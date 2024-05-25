/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/04/2024 21:57:29
*/
import React, { FC, useEffect } from 'react';
import './TaskCart.css';
import { Link } from 'react-router-dom';
import { Service } from '../../models/Services';


interface TaskCartProps {
  task : Service
 
}


const TaskCart : FC<TaskCartProps> = ({task}) =>{



    useEffect(() => {
      const runLocalData = async () => {
       
        

      }
      runLocalData()
    })

  return (
      <Link to={"/" + task.slug} className="TaskCart">
         <img src={task.imageUrl} alt={task.name} className="object-cover h-48 w-60 m-0" />
         <div className="submit m-0 p-3">
          {task.name}
         </div>
      </Link>
  );
}

export default TaskCart;