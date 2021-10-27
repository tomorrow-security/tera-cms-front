import { useForm } from "react-hook-form"

import PageLink from "../atoms/PageLink"

//TODO le message d'erreur ne fonctionne pas
export default function InputCheckRGPD() {
  const {
    register,
    formState: { errors },
  } = useForm()

  return (
    <label className="flex flex-col justify-center space-y-1">
      <div className="flex flex-row pt-8 mx-auto flex-nowrap w-max-full">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="w-6 h-6 my-auto rounded border-tc-blue md:w-4 md:h-4 text-tc-blue focus:ring-offset-0"
          {...register("consent", { required: true })}
        />
        <div>
          <div className="box-border flex flex-row flex-wrap items-center max-w-full ml-2 text-xs sm:text-base">
            <p>
              J'ai lu et j'accepte la
              <span className="underline">
                <PageLink id="privacy" label="politique de confidentialité" />
              </span>
              et j'accepte d'être recontacté par Tera Campus.
            </p>
          </div>
        </div>
      </div>
      {errors.consent ? (
        <div className="text-center text-tc-red">
          Tu dois accepter la politique de confidentialité pour continuer.
        </div>
      ) : null}
    </label>
  )
}
