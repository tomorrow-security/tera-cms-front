import { useForm } from 'react-hook-form'

import PageLink from '../atoms/PageLink'

export default function InputCheckRGPD () {
  const {register, formState :{ errors }} = useForm()
  
  return (
    <label className="block">
      <div className="flex flex-row content-center align-center w-max">
        <input
          type="checkbox"
          name='acceptPrivacyRules'
          className={`my-auto mr-2 border outline-none ${errors.acceptPrivacyRules ? 'border-tc-red' : 'border-tc-blue'}`} 
          {...register("acceptPrivacyRules", { required: true })}
        />
        <span className="flex flex-row text-xs flex-nowrap align-items sm:text-base">
          J'ai lu et j'accepte la&nbsp;
          <PageLink id="privacy" 
            label="politique de confidentialité" />
          &nbsp;de Tera Campus.
        </span>
      </div>
      {/* // TODO errors ne fonctionne pas */}
      {
        errors.acceptPrivacyRules && <span className="text-tc-red">
          Tu dois accepter la politique de confidentialité pour continuer.
        </span>
      }
    </label>
  )
}

