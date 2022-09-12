import React, { Fragment, useRef, useState } from "react";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { Transition, Dialog } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { addDoc, serverTimestamp,updateDoc,collection,doc } from "@firebase/firestore";
import { db, storage } from "../firebase";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Modal = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const { data: session } = useSession();

  // Refs
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  // Functions

  const uploadPost = async () => {
    if (loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.username,
      caption: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    console.log("posted with ",docRef.id);
    
    const imageRef = ref(storage,`posts/${docRef.id}/image`)

    await uploadString(imageRef,selectedFile,"data_url").then(async snapshot=>{

      const downloadUrl = await getDownloadURL(imageRef)

      await updateDoc(doc(db,'posts',docRef.id),{
        image:downloadUrl
      })
    })

    setOpen(false)
    setLoading(false)
    setSelectedFile(null)
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

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
                  {selectedFile ? (
                    <img
                      src={selectedFile}
                      onClick={() => setSelectedFile(null)}
                      className="w-full cursor-pointer object-contain"
                      alt="selected-image"
                    />
                  ) : (
                    <div
                      onClick={() => filePickerRef.current.click()}
                      className="gradient mx-auto flex h-16 w-16 cursor-pointer  items-center justify-center rounded-full text-white 
                    "
                    >
                      <Icon
                        className="h-10 w-10"
                        icon="ant-design:camera-outlined"
                      />
                    </div>
                  )}

                  <Dialog.Title
                    as="h3"
                    className="mt-6 text-center font-manrope text-2xl font-bold leading-6 text-gray-900"
                  >
                    Upload A Photo
                  </Dialog.Title>
                  <div className="mt-6">
                    <input
                      ref={filePickerRef}
                      type="file"
                      hidden
                      onChange={addImageToPost}
                    />
                  </div>

                  <div className="mt-6 font-manrope font-medium">
                    <input
                      ref={captionRef}
                      type="text"
                      className="w-full rounded-lg border-none  text-center focus:ring-red-600"
                      placeholder="Please Enter A Caption"
                    />
                  </div>

                  <div className="mt-4 flex justify-center ">
                    <button
                    disabled={!selectedFile}
                    
                      type="button"
                      className=" inline-flex justify-center rounded-md  px-4 py-2 font-gilBold text-sm text-white transition-all duration-150  ease-out focus:outline-none hover:scale-[1.10]  disabled:bg-gray-500 disabled:cursor-not-allowed enabled:gradient hover:disabled:bg-gray-500 "
                      onClick={uploadPost}
                    >
                      {loading ? "Uploading...":"Upload Post"}
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
