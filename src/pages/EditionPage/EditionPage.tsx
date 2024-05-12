/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:30:56
*/
import React, { FC, useEffect } from 'react';
// import Loading from '../Loading/Loading';
import './EditionPage.css';
import PageBanner from '../../components/PageBanner/PageBanner';
import TemplateList from '../../components/TemplateList/TemplateList';
import EditionCopie from '../../components/EditionCopie/EditionCopie';
import SubscribeForm from '../../components/SubscribeForm/SubscribeForm';


interface EditionPageProps {

}


const EditionPage: FC<EditionPageProps> = () => {


  // const [state, setState] = useState<any>(null)


  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  }, [])

  return (

    <div className="TaskPage w-full  main">
      <PageBanner />
      <TemplateList />
      <EditionCopie />

      <div className="callToAction my-[3rem] p-1 ">
        <button className="w-full p-3 font-bold border-none bg-[rgb(255,115,0)] cursor-pointer ">
          Enregister le Pdf
        </button>
      </div>
      
      <SubscribeForm />
    </div>



  );
}

export default EditionPage;