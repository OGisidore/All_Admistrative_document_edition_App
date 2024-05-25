/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect } from 'react';
import './TotalAmountDetail.css';
import { useSelector } from 'react-redux';
import { getBill } from '../../redux/selectors/selectors';
import { ADD_TO_BILL } from '../../redux/actions/actionTypes';
import { useDispatch } from 'react-redux';


interface TotalAmountDetailProps {

}


const TotalAmountDetail: FC<TotalAmountDetailProps> = () => {



  const bill = useSelector(getBill)
  const dispatch = useDispatch()
  const handleChange = (e: any) => {
    const { name, value } = e.target
    dispatch({
      type: ADD_TO_BILL,
      key: name,
      unique: true,
      payload: value

    })

  }


  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (

    <div className="TotalAmountDetail totalAmount col-span-6 ">
      <div className="grid grid-cols-12 ">
        <div className=" p-1  col-span-6 border-0 border-t-[.1rem] border-solid border-gray-950 text-end">Total HT </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-solid border-gray-950">
          <input type="text" value={bill.total_amount_before_deposit_ht} className=' border-none ' name='total_amount_before_deposit_ht' />

        </div>
        <div className=" p-1  col-span-2 border-0 border-t-[.1rem] border-solid border-gray-950"></div>

      </div>
      {
        bill.add_deposit && <>
          <div className="grid grid-cols-12 ">
            <div className=" remiseGLobale p-1 col-span-6 text-end ">
              <label htmlFor="remiseGlobal"> Remise Globale  </label>
              <input type="number" min={0} max={99} className=' w-[5rem] ' onChange={handleChange} name='deposit_rate' defaultValue={0} />
              <span> % </span>

            </div>
            <div className="p-1 col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
              <input type="text" value={bill.deposit_amount} className=' border-none ' name='GlobalDeposit' />

            </div>
          </div>
          <div className="grid grid-cols-12 ">
            <div className=" p-1  col-span-6 text-end ">
              Total HT après remise globale
            </div>
            <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
              <input type="text" value={bill.total_amount_after_deposit_ht} className=' border-none ' name='reference' />

            </div>
          </div>
        </>
      }

      {
        bill.company_type.trim() === "Entreprise avec TVA" && <div className="grid grid-cols-12 ">
          <div className=" p-1  col-span-6 text-end ">
            Total TTC
          </div>
          <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
            <input type="text" value={bill.amount_ttc} className=' ' name='reference' />

          </div>
        </div>
      }

{
  bill.Add_discount &&  <div className="grid grid-cols-12">
        <div className=" p-1  col-span-6 text-end ">
          Acompte
        </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
          <input type="text" className=' border-none ' onChange={handleChange} name='discount' defaultValue={0} />

        </div>
      </div>
}
     

      <div className="grid grid-cols-12 ">
        <div className=" p-1  col-span-6 text-end font-bold ">
          Net à payer ( {bill.currency})
        </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
          <input type="text" value={bill.netAmount} className=' border-none ' name='reference' />

        </div>
      </div>
    </div>

  );
}

export default TotalAmountDetail;