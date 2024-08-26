import React, { useState } from 'react'
import { GoOrganization } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineEditCalendar } from "react-icons/md";
import { TbSettingsDollar } from "react-icons/tb";
import '../Components/Sidebar.css'
import Logo from '../images/logo.png'
import { Menubar } from './Menubar';
export const Sidebar = () => {
   const [open,setOpen]=useState(false);
  return (
      <>
      
         <div className='container'>
         <div className='logo-cont'><img src={Logo} alt="logo img" /></div>
            <button className="btnn" onClick={()=>{setOpen(!open)}} title='click me'>{!open?<HiOutlineSquares2X2 />:<HiOutlineSquares2X2 />}</button>
            {
                  open && <div><Menubar /></div>
            }
            <button className="btnn"><GoOrganization /></button>
            <button className="btnn"><RiTeamLine /></button>
            <button className="btnn"><MdOutlineEditCalendar /></button>
            <button className="btnn"><GoOrganization /></button>
            <button className="btnn"><SlCalender /></button>
            <button className="btnn"><TbSettingsDollar /></button>
         </div>
      </>
  )
}
