import React, { Fragment } from "react";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { Transition, Dialog } from "@headlessui/react";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-manrope font-bold leading-6 text-gray-900"
                  >
                   Upload A Photo
                  </Dialog.Title>
                  <div className="mt-6">
                   <input type="file"  />
                  </div>

                  <div className="mt-6 font-manrope font-medium">
                   <input type="text" className="w-full text-center border border-gray-600 rounded-lg focus:border-none focus:ring-red-600" placeholder="Please Enter A Caption" />
                  </div>


                  <div className="mt-4 flex justify-center ">
                    <button
                      type="button"
                      className="gradient inline-flex justify-center rounded-md  px-4 py-2 font-gilBold text-sm text-white transition-all duration-150  ease-out focus:outline-none hover:scale-[1.10]"
                      onClick={() => setOpen(false)}
                    >
                      Upload Post
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
