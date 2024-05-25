/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:46
*/
import React, { FC, useEffect } from 'react';
import './ArticleList.css';
import { useSelector } from 'react-redux';
import { getArticle } from '../../redux/selectors/selectors';
import { Item } from '../../models/Item';
import Article from '../Article/Article';


interface ArticleListProps {
 
}


const ArticleList : FC<ArticleListProps> = () =>{

  const articles : Item[] = useSelector(getArticle)
  



    useEffect(() => {
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ArticleList">
         
               

                <div className="tablesBody mt-2 lg:mt-0 border-solid border-gray-950 border-1 lg:border-0 grid grid-cols-12"
                >
                  {
                    articles.map((art : Item)=>{
                      return <Article key={art._id} item={art}/>
                    })
                  }
                  
                  {/* <div className="bg-gray-100 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
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
                         
                          className="remve cursor-pointer text-red-700 "
                        >
                          x
                        </div>
                        <div
                         
                          className="remve cursor-pointer text-green-800 "
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>

          
      </div>
  );
}

export default ArticleList;