import axios from "axios";
import capitalize from "lodash/capitalize";
import uppercase from "lodash/upperCase";

export default async (req, res) => {
  if (req.method === "POST") {    
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const utmSource = req.body.utm_source;
    const utmMedium = req.body.utm_medium;
    const utmCampaign = req.body.utm_campaign;

    // Get an existing or create a new contact in Pipedrive

    let contactId = null;

    const checkContactResponse = await axios.get(
      `${process.env.PIPEDRIVE_URL}/persons/search?api_token=${process.env.PIPEDRIVE_API_KEY}&term=${encodeURIComponent(email)}&fields=email`,
    );

    if (checkContactResponse.data.data.items.length > 0) {
      contactId = checkContactResponse.data.data.items[0].item.id;
    };

    if (!contactId) {
      const contactData = {
        "name": `${capitalize(firstname)} ${uppercase(lastname)}`,
        "owner_id": process.env.PIPEDRIVE_OWNER_ID,
        "email": [{ "value": email, "primary": "true" }],
        "phone": phone,
        "visible_to": "3",
      };
  
      const contactResponse = await axios.post(
        `${process.env.PIPEDRIVE_URL}/persons?api_token=${process.env.PIPEDRIVE_API_KEY}`,
        contactData,
      );
  
      contactId = contactResponse.data.data.id;
    }

    // Create a new lead in Pipedrive

    const leadData = {
      "title": `Lead - ${capitalize(firstname)} ${uppercase(lastname)}`,
      "owner_id": parseInt(process.env.PIPEDRIVE_OWNER_ID),
      "person_id": contactId,
      "visible_to": "3",
      "063c6ba9734c417c3444da21903388153482a9fc": "brochure",
    };

    if (utmSource) { leadData["196a64968d03cc113ea056ec54cfeb8d2022b2b6"] = utmSource };
    if (utmMedium) { leadData["de9830fa36ca32a630a9ac875b9ffd5c3698bf31"] = utmMedium };
    if (utmCampaign) { leadData["4ebadfc2898cf660aac89026d57a588dd27a9007"] = utmCampaign };

    const leadResponse = await axios.post(
      `${process.env.PIPEDRIVE_URL}/leads?api_token=${process.env.PIPEDRIVE_API_KEY}`,
      leadData,
    );

    res.status = leadResponse.status;
  }
};
