import React from 'react'
import Img from './Img'
import styles from "./Login.module.css"

const Login = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        window.location.href="/main"
    }
  return (
    <div className={styles.container}>
     {   <div>
           <img src={"https://media.istockphoto.com/vectors/food-breakfast-plate-with-fried-egg-becon-tomato-and-coffee-mug-vector-id1347707613?b=1&k=20&m=1347707613&s=170667a&w=0&h=ea2jqHVw6LAj8Dg3RCPTcVAvKg1DqohU0IlAtdRXOpo="} className={styles.img} alt="" />
            <div>
                <h1>
                    {"<ERSAN80/> RECIPE "}
                </h1>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder='USERNAME' required />
                    <input className={styles.input} type="password" placeholder='password' required />
                    
                </form>
                <button className={styles.input} onClick={handleSubmit}>LOGIN</button>
            </div>
        </div> }
    </div>
  )
}

export default Login