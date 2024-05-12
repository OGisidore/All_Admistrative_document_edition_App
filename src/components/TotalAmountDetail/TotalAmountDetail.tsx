/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect } from 'react';
import './TotalAmountDetail.css';


interface TotalAmountDetailProps {

}


const TotalAmountDetail: FC<TotalAmountDetailProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (

    <div className="TotalAmountDetail totalAmount col-span-6 ">
      <div className="grid grid-cols-12 ">
        <div className=" p-1  col-span-6 border-0 border-t-[.1rem] border-solid border-gray-950 text-end">Total HT </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-solid border-gray-950">
          <input type="text" className=' border-none ' name='reference' />

        </div>
        <div className=" p-1  col-span-2 border-0 border-t-[.1rem] border-solid border-gray-950"></div>

      </div>
      <>
        <div className="grid grid-cols-12 ">
          <div className=" remiseGLobale p-1 col-span-6 text-end ">
            <label htmlFor="remiseGlobal"> Remise Globale  </label>
            <input type="text" className=' w-[5rem] ' name='GlobalDeposit'  defaultValue={"0.00"} />
            <span> % </span>

          </div>
          <div className="p-1 col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
            <input type="text" className=' border-none ' name='GlobalDeposit' />

          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <div className=" p-1  col-span-6 text-end ">
            Total HT après remise globale
          </div>
          <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
            <input type="text" className=' border-none ' name='reference' />

          </div>
        </div>
      </>


      <div className="grid grid-cols-12 ">
        <div className=" p-1  col-span-6 text-end ">
          Total TTC
        </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
          <input type="text" className=' ' name='reference' />

        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className=" p-1  col-span-6 text-end ">
          Acompte
        </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
          <input type="text" className=' border-none ' name='reference' defaultValue={"0.00"} />

        </div>
      </div>

      <div className="grid grid-cols-12 ">
        <div className=" p-1  col-span-6 text-end font-bold ">
          Net à payer ()
        </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
          <input type="text" className=' border-none ' name='reference' />

        </div>
      </div>
    </div>

  );
}

export default TotalAmountDetail;