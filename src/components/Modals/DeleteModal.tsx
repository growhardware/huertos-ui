// export const DeleteModal = () => {
//   return (
//     <>
//       <button
//         type="button"
//         classNameName="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//         data-twe-toggle="modal"
//         data-twe-target="#exampleModal"
//         data-twe-ripple-init
//         data-twe-ripple-color="light"
//       >
//         Launch demo modal
//       </button>

//       <div
//         data-twe-modal-init
//         classNameName="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div
//           data-twe-modal-dialog-ref
//           classNameName="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
//         >
//           <div classNameName="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
//             <div classNameName="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
//               <h5
//                 classNameName="text-xl font-medium leading-normal text-surface dark:text-white"
//                 id="exampleModalLabel"
//               >
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 classNameName="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
//                 data-twe-modal-dismiss
//                 aria-label="Close"
//               >
//                 <span classNameName="[&>svg]:h-6 [&>svg]:w-6">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </span>
//               </button>
//             </div>

//             <div classNameName="relative flex-auto p-4" data-twe-modal-body-ref>
//               Modal body text goes here.
//             </div>

//             <div classNameName="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
//               <button
//                 type="button"
//                 classNameName="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
//                 data-twe-modal-dismiss
//                 data-twe-ripple-init
//                 data-twe-ripple-color="light"
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 classNameName="ms-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//                 data-twe-ripple-init
//                 data-twe-ripple-color="light"
//               >
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const click = (display) => {
//   document.getElementById('id01').style.display = display;
// };
// export const DeleteModal = () => {
//   return (
//     <>
//       <button onClick={click('block')}>Open Modal</button>

//       <div id="id01" className="modal">
//         <span onClick={click('none')} className="close" title="Close Modal">
//           &times;
//         </span>
//         <form className="modal-content">
//           <div className="container">
//             <h1>Delete Account</h1>
//             <p>Are you sure you want to delete your account?</p>

//             <div className="clearfix">
//               <button type="button" className="cancelbtn">
//                 Cancel
//               </button>
//               <button type="button" className="deletebtn">
//                 Delete
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export const DeleteModal = () => {
//   return (
//     // <main className="antialiased bg-gray-200 text-gray-900 font-sans overflow-x-hidden">
//     <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
//       <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
//       <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
//         <div className="md:flex items-center">
//           <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
//             <i className="bx bx-error text-3xl"></i>
//           </div>
//           <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
//             <p className="font-bold">Delete your account</p>
//             <p className="text-sm text-gray-700 mt-1">
//               You will lose all of your data by deleting your account. This
//               action cannot be undone.
//             </p>
//           </div>
//         </div>
//         <div className="text-center md:text-right mt-4 md:flex md:justify-end">
//           <button className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
//             Delete Account
//           </button>
//           <button
//             className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
//           md:mt-0 md:order-1"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//     // </main>
//   );
// };

// import { useState } from 'react';
// export const DeleteModal = (showModal, handleShow, handleClose): JSX.Element => {
import { useState } from 'react';

interface ChildProps {
  showModal: boolean;
  toogleShowModal: () => void;
}

export const DeleteModal: React.FC<ChildProps> = ({
  showModal,
  toogleShowModal,
}) => {
  // if (showModal?.showModal && show) {
  if (showModal) {
    return (
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
            viewBox="0 0 320.591 320.591"
            // onClick={() => {
            //   handleClose;
            // }}
            onClick={toogleShowModal}
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"
            ></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"
            ></path>
          </svg>

          <div className="my-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 fill-red-500 inline"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000"
              />
              <path
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000"
              />
            </svg>
            <h4 className="text-gray-800 text-lg font-semibold mt-4">
              Are you sure you want to delete it?
            </h4>
            <p className="text-sm text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor auctor arcu, at fermentum dui. Maecenas
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <button
              type="button"
              className="px-4 py-2 rounded-lg text-white text-sm tracking-wide bg-red-500 hover:bg-red-600 active:bg-red-500"
            >
              Delete
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg text-gray-800 text-sm tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
              onClick={toogleShowModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
};
