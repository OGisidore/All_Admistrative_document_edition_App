/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect, useState } from 'react';
import './Article.css';
import { tvaPercent, unitValue } from '../../Helpers/utilitiesHelpers';
import { Item } from '../../models/Item';
import { useDispatch } from 'react-redux';
import { ADD_TO_BILL, REMOVE_FROM_BILL, } from '../../redux/actions/actionTypes';
import { generateID } from '../../Helpers/utilities';
import { useSelector } from 'react-redux';
import { getCompanyType } from '../../redux/selectors/selectors';


interface ArticleProps {
  item: Item

}


const Article: FC<ArticleProps> = ({ item }) => {

  const [height, setHeight] = useState('auto');
  const dispatch = useDispatch()
  const companyType = useSelector(getCompanyType)


  const handleChange = (e: any) => {
    const { name, value } = e.target
    const newD = { ...item, [name]: value, }
    dispatch({
      type: ADD_TO_BILL,
      key: "article_lists",
      unique: false,
      payload: newD

    })
  }
  const handleAddArticle = () => {

    dispatch({
      type: ADD_TO_BILL,
      key: "article_lists",
      unique: false,
      payload: {
        _id: generateID(),
        reference: '',
        designation: "",
        quantity: 0,
        unit: "",
        unit_price: 0,
        discount: 0,
        amount_ht: 0,
        tva_rate: 0,
        amount_ttc: 0,
        created_at: new Date()
      }

    })
  }
  const handleDeleteArticle = () => {

    dispatch({
      type: REMOVE_FROM_BILL,
      key: "article_lists",
      unique: false,
      payload: item
    })
  }

  const handleHeigthChange = (event: any) => {
    handleChange(event)

    const { scrollHeight, clientHeight } = event.target;
    const newHeight = scrollHeight > clientHeight ? `${scrollHeight}px` : height;
    setHeight(newHeight);
  };



  useEffect(() => {
    // window.scrollTo(0, 0)
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
          defaultValue={item.reference}
          onChange={handleChange}

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

          onChange={(e) => handleHeigthChange(e)}
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
        <input type="text" onChange={handleChange} name="quantity" />
      </div>
      <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="unit" className=" lg:hidden">
            unite
          </label>
        </div>
        <select className="w-[99%]" onChange={handleChange} name="unit" id="selectUnit">
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
          <label htmlFor="unit_price" className=" lg:hidden">
            Prix unitaire
          </label>
        </div>
        <input type="text" onChange={handleChange} name="unit_price" />
      </div>
      <div className=" p-1 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="discount" className=" lg:hidden">
            Remise %
          </label>
        </div>
        <input type="text" onChange={handleChange} name="discount" />
      </div>
      <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="amount_ht" className=" lg:hidden">
            Prix Ht
          </label>
        </div>
        <input
          type="text"
          className=" border-none"
          name="amount_ht"
          onChange={handleChange}
          value={item.amount_ht}

        />
      </div>
      {
        companyType.trim() === "Entreprise avec TVA" && <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
          <div className="lab">
            <label htmlFor=" tva_rate" className=" lg:hidden">
              Tva{' '}
            </label>
          </div>
          <select className="w-[99%]" onChange={handleChange} name="tva_rate" id=" tva_rate">
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
      }


      <div className="bg-gray-100 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
        <div className="action flex justify-between px-1 font-bold  bg-gray-100">
          <div className="titles">
            <div className="title p-0 m-0">
              <label htmlFor="addT" className=" text-blue-600">
                T
              </label>
              <input
                type="checkbox"
                className="w-[1rem]"
                name="Tit"

                id=""
              />
            </div>
            <div className="sum p-0 m-0">
              <label htmlFor="sumb" className=" text-orange-800">
                =
              </label>
              <input
                type="checkbox"
                className="w-[1rem]"
                name="summ"


                id=""
              />
            </div>
          </div>
          <div className="AddL">
            <div
              onClick={handleDeleteArticle}

              className="remve cursor-pointer text-red-700 "
            >
              x
            </div>
            <div
              onClick={handleAddArticle}
              className="remve cursor-pointer text-green-800 "
            >
              +
            </div>
          </div>
        </div>
      </div>
      {
        companyType.trim() !== "Entreprise avec TVA" && <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 "></div>
      }

    </>

  );
}

export default Article;