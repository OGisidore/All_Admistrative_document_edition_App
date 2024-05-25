/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 16/05/2024 15:03:07
*/
import React, { FC, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
// import { FiAlertCircle } from "react-icons/fi";
import './BugReportForm.css';
import { FaBug } from 'react-icons/fa';


interface BugReportFormProps {
  display: () => void

}


const BugReportForm: FC<BugReportFormProps> = ({ display }) => {


  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="BugReportForm ">

      <AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={display}
          className="bg-slate-900/20 backdrop-blur-sm p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "360deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "12.5deg" }}
            onClick={(e) => e.stopPropagation()}
            className=" bg-[rgba(16,9,5,0.81)]  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FaBug className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-[rgb(255,115,0)] grid place-items-center mx-auto">
                <FaBug />
              </div>
              <form className="shadow-2xl w-[90%] backdrop-blur-sm bg-white/30 p-8">
                <div className="mb-5">
                  <label htmlFor="name" className="mb-3 block text-base font-medium text-[rgb(255,115,0)]">
                    Full Name
                  </label>
                  <input type="text" name="name" id="name" placeholder="Full Name" className="w-[90%] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[rgb(255,115,0)] focus:shadow-md" />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="mb-3 block text-base font-medium text-[rgb(255,115,0)]">
                    Email Address
                  </label>
                  <input type="email" name="email" id="email" placeholder="dev@Web.com" className="w-[90%]  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[rgb(255,115,0)] focus:shadow-md" />
                </div>
                <div className="mb-5">
                  <label htmlFor="subject" className="mb-3 block text-base font-medium text-[rgb(255,115,0)]">
                    Subject
                  </label>
                  <input type="text" name="subject" id="subject" defaultValue={"Bug reported"} placeholder="Enter your subject" className="w-[90%]  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[rgb(255,115,0)] focus:shadow-md" />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="mb-3 block text-base font-medium text-[rgb(255,115,0)]">
                    Message
                  </label>
                  <textarea rows={4} name="message" id="message" placeholder="Type your message" className="w-[90%]  resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[rgb(255,115,0)] focus:shadow-md" defaultValue={""} />
                </div>
                <div className='flex justify-end gap-8'>
                  <button onClick={display} className="hover:shadow-form cursor-pointer border-none rounded-md bg-[rgb(255,64,0)] py-3 px-8 text-base font-semibold text-white outline-none">
                  Nah, go back
                  </button>
                  <button className="hover:shadow-form cursor-pointer border-none rounded-md bg-[rgb(255,115,0)] py-3 px-8 text-base font-semibold text-white outline-none">
                    Submit
                  </button>
                </div>
              </form>
             
            </div>
          </motion.div>
        </motion.div>

      </AnimatePresence>



    </div>
  );
}

export default BugReportForm;