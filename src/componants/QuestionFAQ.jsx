import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

function QuestionFAQ() {
  return (
 <div className="w-full px-4 pt-16">
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2"></div>
  
    <Disclosure >
      
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg- px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            Do you offer technical support?
            <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''}h-5 w-5 text-purple-500`} />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-[#cae2ff]">No</Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}

export default  QuestionFAQ