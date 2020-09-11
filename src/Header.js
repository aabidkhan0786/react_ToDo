import React from 'react'
import logo from '../src/Images/logo.png'

const Header = () => {
    return (
        <>
            
             <img className="mt-2" src={logo} width="50" height="50" alt="" loading="lazy"/> 
             <span className="ml-3 h3 pb-0 task_form my-5 task_form"><u>ToDo</u></span>
            
             
  
        </>
    )
}

export default Header
