
interface NewProposeStepperProps {
  step: number
}

export function NewProposeStepper ( {step}: NewProposeStepperProps ) {
  return (
    <div className="w-full pt-4 pb-10 flex justify-center">
          <ol className="flex items-center w-full max-w-3xl text-md font-medium text-center text-gray-500 sm:text-base">
            <li className={"flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 " + (step > 0 && 'text-emerald-600 dark:text-emerald-500') }>
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    {step > 1 && <svg className="w-4 h-4 sm:w-6 sm:h-6 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>}
                    {step <= 1 && <span className="mr-2">1</span>}
                    Devedor
                </span>
            </li>
            <li className={"flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 " + (step > 1 && 'text-emerald-600 dark:text-emerald-500')  }>
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                {step > 2 && <svg className="w-4 h-4 sm:w-6 sm:h-6 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>}
                    {step <= 2 && <span className="mr-2">2</span>}
                    Dívida 
                </span>
            </li>
            <li className={"flex items-center " + (step > 2 && 'text-emerald-600 dark:text-emerald-500')  }>
                <span className="mr-2">3</span>
                Proposta
            </li>
        </ol>
      </div>
  )
}