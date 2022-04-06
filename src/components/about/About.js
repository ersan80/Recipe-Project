import Code from './Code'
import React from 'react'
import styles from "./About.module.css"

const About = () => {
  return (
    <div  className={styles.container} >
        <Code className={styles.img}></Code> 
       <div className={styles.img}>

       </div>
        <div >
          <h1>About Full Steack Developer <span className={styles.span}>CIHAN</span> </h1>  
        </div>
        <div className={styles.data}>
        <h2>Hi, I'am Cihan</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I know JS, ReactJS, NodeJS, SQL, Python, 
        </h4>
        <h2>
          <a href="mailto:chnctnky85@gmail.com">Send email</a> :
          chnctnky85@gmail.com
        </h2>
        </div>
        
    </div>
  )
}

export default About