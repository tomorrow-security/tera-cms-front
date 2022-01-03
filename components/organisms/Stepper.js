import { ClipboardCheckIcon, LightBulbIcon, UserGroupIcon, VideoCameraIcon } from "@heroicons/react/outline"

import Block from "../atoms/Block"

export default function Stepper () {
  return (
    <Block>
      <div className="grid grid-cols-1 md:grid-cols-4">

        <div className="relative">
          <div className="absolute z-0 left-6 md:left-0 md:top-6 md:w-full h-full md:h-0 border-l md:border-l-0 md:border-t border-tc-blue-navy" />
          <div className="relative z-10 my-2 md:my-0 flex flex-row md:flex-col items-center space-x-2 md:space-x-0 md:space-y-2">
            <div>
              <LightBulbIcon className="p-2 w-12 h-12 bg-white border border-tc-blue-navy rounded-full text-tc-blue-navy" />
            </div>
            <span className="md:px-4 md:text-center">Je dépose mon dossier en ligne</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute z-0 left-6 md:left-0 md:top-6 md:w-full h-full md:h-0 border-l md:border-l-0 md:border-t border-tc-blue-navy" />
          <div className="relative z-10 my-2 md:my-0 flex flex-row md:flex-col items-center space-x-2 md:space-x-0 md:space-y-2">
            <div>
              <ClipboardCheckIcon className="w-12 h-12 p-2 bg-white text-tc-blue-navy border border-tc-blue-navy rounded-full" />
            </div>
            <span className="md:px-4 md:text-center">Je passe gratuitement le test d'admission</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute z-0 left-6 md:left-0 md:top-6 md:w-full h-full md:h-0 border-l md:border-l-0 md:border-t border-tc-blue-navy" />
          <div className="relative z-10 my-2 md:my-0 flex flex-row md:flex-col items-center space-x-2 md:space-x-0 md:space-y-2">
            <div>
              <VideoCameraIcon className="p-2 w-12 h-12 bg-white border border-tc-blue-navy rounded-full text-tc-blue-navy" />
            </div>
            <span className="md:px-4 md:text-center">Je passe mon entretien</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute z-0 left-6 md:left-0 md:top-6 md:w-full h-full md:h-0 border-l md:border-l-0 md:border-t border-tc-blue-navy" />
          <div className="relative z-10 my-2 md:my-0 flex flex-row md:flex-col items-center space-x-2 md:space-x-0 md:space-y-2">
            <div>
              <UserGroupIcon className="p-2 w-12 h-12 bg-white border border-tc-blue-navy rounded-full text-tc-blue-navy" />
            </div>
            <span className="md:px-4 md:text-center">Je finalise mon inscription définitive</span>
          </div>
        </div>

      </div>
    </Block>
  )
}
