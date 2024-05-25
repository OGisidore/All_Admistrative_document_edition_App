/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect } from 'react';
import './SubscribeForm.css';


interface SubscribeFormProps {

}


const SubscribeForm: FC<SubscribeFormProps> = () => {



  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="SubscribeForm ">


      <div className="flex items-center justify-center p-12">

        <div className="mx-auto w-full max-w-[550px]">
          <h1>Contact us or Report bugs</h1>
          <form className="shadow-2xl w-full p-8">
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
              <input type="text" name="subject" id="subject" placeholder="Enter your subject" className="w-[90%]  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[rgb(255,115,0)] focus:shadow-md" />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="mb-3 block text-base font-medium text-[rgb(255,115,0)]">
                Message
              </label>
              <textarea rows={4} name="message" id="message" placeholder="Type your message" className="w-[90%]  resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[rgb(255,115,0)] focus:shadow-md" defaultValue={""} />
            </div>
            <div>
              <button className="hover:shadow-form cursor-pointer border-none rounded-md bg-[rgb(255,115,0)] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit 
              </button>
            </div>
          </form>
        </div>
      </div>


    </div>
  );
}

export default SubscribeForm;