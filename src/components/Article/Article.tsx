/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect, useState } from 'react';
import './Article.css';
import { tvaPercent, unitValue } from '../../Helpers/utilitiesHelpers';


interface ArticleProps {

}


const Article: FC<ArticleProps> = () => {
  const [height, setHeight] = useState('auto');



  const handleChange = (event: any) => {

    const { scrollHeight, clientHeight } = event.target;
    const newHeight = scrollHeight > clientHeight ? `${scrollHeight}px` : height;
    setHeight(newHeight);
  };



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (

    <>
      <div className=" p-1 border-y-0 border-x-[0.1rem] col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="reference" className=" lg:hidden">
            Reference
          </label>
        </div>
        <input type="text"

          name="reference" placeholder="Reference" />
      </div>
      <div className=" col-span-12 sm:col-span-5 md:col-span-4  lg:col-span-3 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="reference" className=" lg:hidden">
            Desigation
          </label>
        </div>

        <textarea
          name="designation"
          placeholder='designation'

          onChange={(e) => handleChange(e)}
          style={{ height }}
          id="designation"
          rows={1}
        ></textarea>
      </div>
      <div className=" p-1 border-r-[0.1rem] col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1 border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="quantity" className=" lg:hidden">
            Quantite
          </label>
        </div>
        <input type="text" name="quantity" />
      </div>
      <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="unit" className=" lg:hidden">
            unite
          </label>
        </div>
        <select className="w-[99%]" name="unit" id="selectUnit">
          <option disabled value="">
            unite
          </option>
          {unitValue.map((unit, index: number) => {
            return (
              <option key={index} value={unit.value}>
                {' '}
                {unit.value}{' '}
              </option>
            )
          })}
        </select>
      </div>
      <div className=" col-span-12 sm:col-span-2 lg:col-span-2 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="unitPrice" className=" lg:hidden">
            Prix unitaire
          </label>
        </div>
        <input type="text" name="unitPrice" />
      </div>
      <div className=" p-1 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="discount" className=" lg:hidden">
            Remise %
          </label>
        </div>
        <input type="text" name="discount" />
      </div>
      <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="pre_taxAmount" className=" lg:hidden">
            Prix Ht
          </label>
        </div>
        <input
          type="text"
          className=" border-none"
          name="pre_taxAmount"

        />
      </div>

      <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="VAT_rate" className=" lg:hidden">
            Tva{' '}
          </label>
        </div>
        <select className="w-[99%]" name="VAT_rate" id="tva">
          {tvaPercent.map((tva) => {
            return (
              <option key={tva._id} value={tva.value}>
                {' '}
                {tva.value}{' '}
              </option>
            )
          })}
        </select>
      </div>

    </>

  );
}

export default Article;