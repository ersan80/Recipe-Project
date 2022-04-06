import React, {useState,useEffect} from 'react'
import Form from '../header/Form'
import axios from "axios"
import RecipeCard from './RecipeCard'
import Meal from './Meal'


const Main = () => {
  
 
  
 
  return (
    <div style={{backgroundColor:"#00adb5",height:"1000px"}}>
      <h1 style={{textAlign:"center",margin:"1px" ,padding:"25px"}}>Food App</h1>

      
         <Form  /> 

         
      
      
    
    </div>
  )
}

export default Main