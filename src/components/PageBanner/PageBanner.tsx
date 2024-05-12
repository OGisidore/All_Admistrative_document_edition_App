/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:41:45
*/
import React, { FC, useEffect } from 'react';
import './PageBanner.css';
import { useParams } from 'react-router-dom';
import { Service } from '../../models/Services';
import { services } from '../../apidata/data';


interface PageBannerProps {
 
}


const PageBanner : FC<PageBannerProps> = () =>{
  const { slug } = useParams()
  const service: Service = services.filter((item: Service) => item.slug === slug)[0]



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div className="PageBanner sticky z-10 top-0 bg-[rgb(255,115,0)] w-full">
    <div className="page flex justify-between items-center px-6">
      <div className="PageTitle">
        <h1>{service.name}</h1>
      </div>
      <div className={`pageRoot `}>home / {service.name}</div>
    </div>
  </div>
  );
}

export default PageBanner;