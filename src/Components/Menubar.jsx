import React from 'react'
import '../Components/Menubar.css'
import { FaSearch } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { GrMonitor } from "react-icons/gr";
import { BsPersonX } from "react-icons/bs";
import { BsPersonCheck } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbFileReport } from "react-icons/tb";
import { GiExpense } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { ImStack } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa";
export const Menubar = () => {
    return (
        <>
            <div className='menu-container'>
                <div className="item">
                    <div className='searchbar' style={{ border: '1px solid gray', display: 'flex', padding: '5px',borderRadius:'5px',marginTop:'0px' }}>
                        <div style={{ textAlign: 'center', alignItems: 'center', fontSize: '20px', paddingTop: '2px' }}>
                            <FaSearch />
                        </div>
                        <input type="text" placeholder='Search' style={{ border: 'none', padding: '5px', marginLeft: '6px',backgroundColor:' rgb(237, 232, 225)' }} />
                    </div>
                </div>
                <div style={{position:'relative'}}>
                    <ul>
                        <li className='menu-list'> <GrMonitor /> Dashboard</li>
                        <li className='menu-list'> <MdOutlineFeedback />Feedback</li>
                        <li className='menu-list'><BsPersonX /> Leaves</li>
                        <li className='menu-list'> <BsPersonCheck /> Attendence</li>
                        <li className='menu-list'> <IoIosTimer /> Daily Timesheet</li>
                        <li className='menu-list'><BsPersonWorkspace /> Work log</li>
                        <li className='menu-list'> <FaHandHoldingMedical /> Reimbursement</li>
                        <br /><br />
                        <div style={{borderTop:'1px solid gray',width:'100%',position:'absolute',left:'0px'}}></div>
                        <li className='menu-list'> <TbFileReport /> Reports</li>
                        <li className='menu-list'> <GiExpense /> My Expenses</li>
                        <li className='menu-list'> <FaHandHoldingUsd /> Income</li>
                        <li className='menu-list'><ImStack /> Categories</li>
                        <li className='menu-list'><IoSettingsOutline /> Setting</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
