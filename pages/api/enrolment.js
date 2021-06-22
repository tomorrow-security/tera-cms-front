// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  req.status(200).json({
  email: 'teracampustest34@yopmail.com',
  gender: 'M',
  firstName: 'Toto',
  lastName: 'TITI' 
  })
}