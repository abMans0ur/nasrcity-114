import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { HiMiniBars4 } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu]=useState(false)
    const [bigMenu,setBigMenu]=useState(false)
    useEffect(()=>{
        const handleResize=()=>{
            window.addEventListener('resize',()=>{
                if(window.innerWidth<=768){
                    setMenu(true)
                }else{
                    setMenu(false)
                }
            })
        }
        handleResize()
    },[])
    const bigMenuHandler=()=>{
        setBigMenu(!bigMenu)
    }

    return (
        <header>
            <nav>
                <span>logo</span>
                
                <ul className={bigMenu?"bigMenu":undefined} style={menu?{display:"none"}:{display:"flex"}}  >
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                </ul>
                <HiMiniBars4 style={menu?{display:"block"}:{display:"none"}} onClick={bigMenuHandler}  size={30} />
            </nav>
        </header>
    )
}

export default Navbar
