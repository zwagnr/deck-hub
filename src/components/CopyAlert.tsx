import { Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Dispatch, Fragment, SetStateAction } from "react";

interface CopyAlertProps {
  text: string;
  showAlert: boolean;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
}

export function CopyAlert({ text, showAlert, setShowAlert }: CopyAlertProps) {
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={showAlert}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-green-600 text-black shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Icon
                      icon="material-symbols:check-circle"
                      className="h-8 w-8 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-md font-medium mb-4">
                      Deck Code Successfully copied to Clipboard!
                    </p>
                    <p className="mt-1 text-sm ">{text}</p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      className="inline-flex rounded-md bg-green-700 text-black  hover:text-gray-700 "
                      onClick={() => {
                        setShowAlert(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <Icon
                        icon="ic:round-close"
                        className="h-8 w-8  "
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
