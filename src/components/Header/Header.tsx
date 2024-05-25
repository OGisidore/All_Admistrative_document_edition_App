/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/04/2024 21:57:29
*/
import React, { FC, useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import BugReportForm from '../BugReportForm/BugReportForm';


interface HeaderProps {

}


const Header: FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);




  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className= ' Header flex flex-col w-full justify-center items-center'>
      <div className=" bg-blend-lighten hover:bg-blend-darken drop-shadow-sm w-full flex items-center justify-between">
        <Link to={"/"} className=''>
          <img src="/logo.png" alt="" height={100} />
        </Link>
        <div className=' p-4  rounded-full cursor-pointer hover:bg-gray-600  bg-black text-white  ' onClick={()=>setIsOpen(true)}>
          Signaler un bug
        </div>
      </div>
      {
        isOpen && <BugReportForm display={()=>setIsOpen(false)}/>
      }
      {/* <p className="text-black">
        Creez en quelque secondes tous vos documents admnistratifs
      </p> */}
    </div>

  );
}

export default Header;