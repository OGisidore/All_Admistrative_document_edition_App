/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 26/05/2024 09:25:31
*/
import React, { FC, useEffect, useState } from 'react'
import { RiBillLine } from 'react-icons/ri'
import { IoSearch } from 'react-icons/io5'

import './BillSearching.css'
import { getAllBill } from '../../database/apialldocs'
import { Bill } from '../../models/BIll'
import { setItem } from '../../services/localStorage'

interface BillSearchingProps {}

const BillSearching: FC<BillSearchingProps> = () => {
  const [bills, setBills] = useState<Bill[]>([])
  const [results, setResults] = useState<Bill[]>([])

  const handleSeach = (e: any) => {
    e.preventDefault()
    const { value } = e.target
    console.log(value)
    console.log(bills)
    let tag = value.trim()
    let result = bills.filter(
      (t) => t.reference.toLowerCase().search(tag.toLowerCase()) !== -1
    )
    console.log({ result })
    setResults(result)
  }
  useEffect(() => {
    const runLocalData = async () => {
      const data = await getAllBill()
      setBills(data.results as Bill[])
    }
    runLocalData()
  }, [])

  return (
    <div className="BillSearching flex flex-col mt-3 pr-10 items-end">
      <div className="inline-flex flex-col justify-center relative text-gray-500">
        <div className="relative p-2   flex items-center rounded border border-solid border-gray-800 ">
          <IoSearch className="w-4 h-4  " />
          <input
            type="text"
            className=" focus:outline-none focus:border-none border-none focus:ring-2 focus:ring-yellow-600 "
            placeholder="search..."
            onKeyUp={handleSeach}
          />
        </div>
        {results.length > 0 && (
          <>
            
            <ul className="bg-white border  border-gray-100 list-none w-full mt-2 ">
            <h3 className="mt-2 text-sm">Facture:</h3>
              {results.map((bill) => {
                return (
                  <li key={bill._id} onClick={()=> setItem("bill", bill)} className=" py-1 border-b-2 border-gray-100  cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                    <RiBillLine />
                    <b> facture de {bill.reference}</b>
                  </li>
                )
              })}
            </ul>
          </>
        ) }
      </div>
    </div>
  )
}

export default BillSearching
