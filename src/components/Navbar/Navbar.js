import React, { useState } from 'react';
import "./Navbar.scss";
import { IoMdPerson } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useSelector } from 'react-redux';
import notification from '../../Assets/Notification.svg'
import profile from '../../Assets/profile.svg';
import homeImg from '../../Assets/Home.svg'
import { NavLink } from 'react-router-dom';

function Navbar({ name, subName, children }) {
    const loggedinUser = useSelector((state) => state.loggedInUserReducer);
    const profileData = loggedinUser

    const navbarData = ["Nanny's Shop", "Tailoring Shop", "Fashion house", 'Mechanic House', "Wares", "Kitchen"]
    const [selectType, setSelectType] = useState(false)
    const [selectActive, setSelectActive] = useState(navbarData[0])
    const [typeSelected, settypeSelected] = useState(navbarData[0])

    return (
        <div className='Navbar' >
            <div className='navContent'>
                <div className="left">
                    <div className="name"> {name}</div>
                    <div className=''>{children}</div>
                </div>
                <div className='right'>
                    <div className='selectDropdown'>
                        <div className='dropdown-btn' onClick={() => setSelectType(!selectType)}>
                            {typeSelected}
                            {/* {typeSelected === "" ? <>{navbarData[0]}</> : <>{typeSelected}</>} */}
                            <MdKeyboardArrowDown className='icon' />
                        </div>
                        {selectType && (
                            <div className='dropdown-content'>
                                <div className='dropOverflow'>
                                    {navbarData?.map((option, index) => (
                                        <div key={index} className={selectActive === option ? "dropdown-item dropActive" : "dropdown-item"}
                                            onClick={(e) => {
                                                settypeSelected(option);
                                                setSelectType(false);
                                                setSelectActive(option)
                                            }}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        )}

                    </div>

                    <div className='notification'>
                        <img src={notification} alt="" />
                    </div>

                    <div className='profile'>
                        <div className='imageSession'>
                            {profileData?.profilePicture ? (<div className='show-Profileimage'>
                                <img src={profileData.profilePicture} alt="image23" />
                            </div>) : (
                                <div className='image-session'>
                                    {/* <IoMdPerson className='icon' /> */}
                                    <img src={profile} alt="" />
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <div className='home'>
                <NavLink to="/" style={{ position: 'relative', top: "-2px" }}><img src={homeImg} alt="" /></NavLink>
                {subName &&
                    <span className='text'>/ <span>{subName}</span></span>
                }

            </div>
        </div>
    )
}

export default Navbar