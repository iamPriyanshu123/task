import User from '../images/user.png'
import '../Components/Profile.css'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useState } from 'react';
export const Profile = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className='profile-cont'>
                <div className='img-cont'>
                    <img src={User} alt="user-img" />
                    <button className='btn' onClick={() => { setShow(!show) }}>{!show ? <FaChevronDown /> : <FaChevronUp />}</button>
                    {
                        show && <div className='togle-cont'>
                            <div className='about-user'>
                                <div>
                                    <img src={User} alt="user-img" />
                                </div>
                                <div>
                                    <h3>Priyanshu Kushwah</h3>
                                    <p>Frontend-Developer</p>
                                    <ul>
                                        <li className='profile-list'><IoPersonCircleOutline style={{fontSize:"25px",position:"relative",top:'5px'}} /> Profile</li>
                                        <li className='profile-list'><MdOutlineManageAccounts style={{fontSize:"25px",position:"relative",top:'5px'}} /> Account Setting</li>
                                        <li className='profile-list' style={{color:'red'}}> <IoMdLogOut style={{fontSize:"25px",position:"relative",top:'5px'}} /> Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )

}