/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/05/2024 16:49:28
*/
import React, { FC, useEffect, useRef, useState } from 'react';
import './InfosSup.css';

import { Information } from '../../models/Information';
import { FaPlus } from 'react-icons/fa';


interface InfosSupProps {
  informations: Information[]
  handleChangeInformations: (infos: Information[]) => void

}



const InfosSup: FC<InfosSupProps> = ({ informations, handleChangeInformations }) => {

  const [currentInfos, setCurrentInfos] = useState<Information[]>(informations)
  const [displayInfoForm, setDisplayInfoForm] = useState<boolean>(false)
 const [formData, setFormData ] = useState<Information>({name: '', value:''})
 const formRef = useRef<any>(null)

  // const dispatch = useDispatch()

  useEffect(() => {
    const runLocalData = async () => {
      console.log("useEffect ran"); // Check if useEffect is running in a loop
     

    }
    runLocalData()
  }, [formRef])

  const handleAddInformation = (e: any) => {
    e.preventDefault()
    console.log(e.target);
    if(formData.name && formData.value){
      const newInfos = [ ...currentInfos , formData]
      setCurrentInfos(newInfos)
      if(formRef.current){
        formRef.current.reset()
      }     
      handleChangeInformations(newInfos)
      setDisplayInfoForm(false)
      
    }
      
  };

  return (
    <div className="InfosSup">
      <div className="details">
        {
          currentInfos?.map((information: Information, index) => {
            return <div className='information-item' key={index}>
            <strong>{information.name}</strong> : <span>{information.value}</span>
            </div>
          })
        }
      </div>
      {
        displayInfoForm && <form  className="flex flex-wrap gap-3" ref={formRef}>
          <div className="name">
            <label htmlFor="name">name</label>
            <input  type="text" name='name' id='name' onChange={(e:any)=>setFormData({...formData, name: e.target.value})} />
          </div>
          <div className="name">
            <label htmlFor="name">valeur</label>
            <input  type="text" name='value' id='value' onChange={(e:any)=>setFormData({...formData,value: e.target.value})} />
          </div>
          <button type='button' 
          onClick={ handleAddInformation}>Ajouter</button>
        </form>
      }


      <FaPlus onClick={() => setDisplayInfoForm(true)} />
    </div>
  );
}

export default InfosSup;