import React from 'react'
import styles from "./Recipe.module.css"
import {Link} from "react-router-dom"

const RecipeCard = ({data}) => {
   console.log(data)

  return (
    <div class="row"  >

      
        
        {  
            data.map((item,index)=>{
              return(
                <div class={styles.card}>
                <h5 className={styles.h5}> {item.recipe.label}</h5>
                <img src={item.recipe.image} className={styles.img} alt="Avatar" style={{width:"150px"}}/>
                <div class={styles.container}>
                {/* <button onClick={handleButton} className={styles.button} type="button" >View More</button> */}
                <Link to={`/details`} state = {item} className={styles.button}>View More</Link>

                </div>
              </div>)
              
      
 
                  
 

                  
                
               
           })   
             
       }
         
    </div>
  )
}

export default RecipeCard