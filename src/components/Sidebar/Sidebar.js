import React, { useState } from 'react';
import "./Sidebar.scss";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import logo from '../../Assets/logo.svg'
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai"
import { useDispatch } from 'react-redux';
// import { AlertToggle } from '../../Common/Message/Message';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Navbar from '../Navbar/Navbar';
import chevrondown from '../../Assets/chevron-down.svg'

function SIDEBAR({ children, name, subName, defaultToggleState }) {
    const sidebarData = [
        {
            link: "",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M16.0755 2H19.4615C20.8637 2 22 3.14585 22 4.55996V7.97452C22 9.38864 20.8637 10.5345 19.4615 10.5345H16.0755C14.6732 10.5345 13.537 9.38864 13.537 7.97452V4.55996C13.537 3.14585 14.6732 2 16.0755 2Z" fill="" stroke="#53545C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="" stroke="#53545C" />
            </svg>,
            text: "Dashboard"
        },
        {
            link: "order",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5137 21.5H8.16592C5.09955 21.5 2.74715 20.3924 3.41534 15.9348L4.19338 9.89357C4.60528 7.66931 6.02404 6.81805 7.26889 6.81805H17.4474C18.7105 6.81805 20.0469 7.73339 20.5229 9.89357L21.3009 15.9348C21.8684 19.889 19.5801 21.5 16.5137 21.5Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.651 6.59839C16.651 4.21232 14.7167 2.27802 12.3307 2.27802V2.27802C11.1817 2.27315 10.0781 2.72618 9.26388 3.53694C8.44969 4.34769 7.99199 5.44938 7.992 6.59839H7.992" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.2963 11.1018H15.2506" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.46572 11.1018H9.41995" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ,
            text: "Orders"
        },
        {
            link: "customers",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59151 15.2068C13.2805 15.2068 16.4335 15.7658 16.4335 17.9988C16.4335 20.2318 13.3015 20.8068 9.59151 20.8068C5.90151 20.8068 2.74951 20.2528 2.74951 18.0188C2.74951 15.7848 5.88051 15.2068 9.59151 15.2068Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59151 12.0198C7.16951 12.0198 5.20551 10.0568 5.20551 7.6348C5.20551 5.2128 7.16951 3.2498 9.59151 3.2498C12.0125 3.2498 13.9765 5.2128 13.9765 7.6348C13.9855 10.0478 12.0355 12.0108 9.62251 12.0198H9.59151Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.4831 10.8816C18.0841 10.6566 19.3171 9.2826 19.3201 7.6196C19.3201 5.9806 18.1251 4.6206 16.5581 4.3636" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.5954 14.7322C20.1464 14.9632 21.2294 15.5072 21.2294 16.6272C21.2294 17.3982 20.7194 17.8982 19.8954 18.2112" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            text: "Customers"
        },
        {
            link: "inventory",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4189 15.7321C21.4189 19.3101 19.3099 21.4191 15.7319 21.4191H7.94988C4.36288 21.4191 2.24988 19.3101 2.24988 15.7321V7.93211C2.24988 4.35911 3.56388 2.25011 7.14288 2.25011H9.14288C9.86088 2.25111 10.5369 2.58811 10.9669 3.16311L11.8799 4.37711C12.3119 4.95111 12.9879 5.28911 13.7059 5.29011H16.5359C20.1229 5.29011 21.4469 7.11611 21.4469 10.7671L21.4189 15.7321Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.48096 14.463H16.216" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            text: "Inventory"
        },
        {
            link: "conversation",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.9394 12.413H15.9484" stroke="#53545C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.9304 12.413H11.9394" stroke="#53545C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.9214 12.413H7.9304" stroke="#53545C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ,
            text: "Conversations"
        },
        {
            link: "settings",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8067 7.62357L20.1842 6.54348C19.6577 5.62956 18.4907 5.31427 17.5755 5.83867V5.83867C17.1399 6.0953 16.6201 6.16811 16.1307 6.04104C15.6413 5.91398 15.2226 5.59747 14.9668 5.16133C14.8023 4.8841 14.7139 4.56835 14.7105 4.24599V4.24599C14.7254 3.72918 14.5304 3.22836 14.17 2.85762C13.8096 2.48689 13.3145 2.27782 12.7975 2.27803H11.5435C11.037 2.27802 10.5513 2.47987 10.194 2.8389C9.83669 3.19793 9.63717 3.68455 9.63961 4.19107V4.19107C9.6246 5.23688 8.77248 6.07677 7.72657 6.07666C7.40421 6.07331 7.08846 5.9849 6.81123 5.82036V5.82036C5.89606 5.29597 4.72911 5.61125 4.20254 6.52517L3.53435 7.62357C3.00841 8.53635 3.3194 9.70256 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2055 5.18653 11.889C5.18653 12.5725 4.8219 13.204 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1453V16.1453L4.16593 17.2346C4.41265 17.6797 4.8266 18.0082 5.31619 18.1474C5.80578 18.2865 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6515 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6716C9.5387 18.9488 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8067 16.1453C21.0618 15.7075 21.1318 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6718 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.9279C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70285 21.3264 8.54345 20.8067 7.63272V7.63272V7.62357Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="12.1751" cy="11.889" r="2.63616" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            text: "Settings"
        },

    ]

    const { pathname } = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userDataToken')));
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [userlogout, setUserLogout] = useState(false)
    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        setTimeout(() => {
            navigate("/")
            setUser(null)
            localStorage.clear('userDataToken')
        }, 300)
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    return (
        <div>
            <div className='InterfaceWeb'>
                <input type="checkbox" id="interface-check" className="headerinput" />
                <div className={click ? "sidebarDesign active" : "sidebarDesign"}>
                    <ul>
                        <div className='sidebar-logo'>
                            <img src={logo} alt="" />
                            <div className='text'>Metrix</div>
                        </div>
                        <li>
                            <label htmlFor="interface-check" className="sidebarlabel">
                                <MdOutlineKeyboardArrowRight className="headericon" id="sidebar_btn" />
                            </label>
                        </li>
                        <div style={{ paddingTop: "20px" }}>
                            {sidebarData.map((item, index) => {
                                return (
                                    <li onClick={handleClick} key={index}>
                                        <div onClick={defaultToggleState}>
                                            <NavLink
                                                to={`/${item.link}`}
                                                // to={pathname.includes(`/${item.link2}`) ? `/${item.link2}` : `/${item.link}`}
                                                isActive={() => [`/${item.link}`, `/${item.link2}`].includes(pathname)}
                                                className="sidebar-navlink " activeClassName="active">
                                                <span className="icon">{item.icon}</span><span className="text">{item.text}</span>
                                            </NavLink>
                                        </div>
                                    </li>
                                )
                            })}
                        </div>

                        <div className='down-sidebar'>
                            <li onClick={handleClick}>
                                <NavLink to='/contact_support' exact className="sidebar-navlink contact">
                                    <span className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span><span className="text">Contact Support </span>
                                </NavLink>
                            </li>

                            <li onClick={handleClick} >
                                <div className="sidebar-navlink upgradeAccount">
                                    <div className='first'>
                                        <span className="icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 12V22H4V12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M22 7H2V12H22V7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 22V7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span><span className="text">Free Gift Awaits You! </span>
                                    </div>
                                    <NavLink to='/upgrade' exact className='upgrade'>
                                        <span className="text ">Upgrade your account <img src={chevrondown} alt="" className="icon" /> </span>
                                    </NavLink>
                                </div>

                            </li>

                            <li className="">
                                <button onClick={() => setUserLogout(true)} exact className="mobile-logout"
                                    style={{ border: "none", background: "#fff", textAlign: "left" }}
                                >
                                    <span className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M2 6.447C2 3.996 4.03024 2 6.52453 2H11.4856C13.9748 2 16 3.99 16 6.437V17.553C16 20.005 13.9698 22 11.4744 22H6.51537C4.02515 22 2 20.01 2 17.563V16.623V6.447Z" fill="#CC5F5F" />
                                            <path d="M21.7789 11.4548L18.9331 8.5458C18.639 8.2458 18.1657 8.2458 17.8725 8.5478C17.5803 8.8498 17.5813 9.3368 17.8745 9.6368L19.4337 11.2298H17.9387H9.54844C9.13452 11.2298 8.79852 11.5748 8.79852 11.9998C8.79852 12.4258 9.13452 12.7698 9.54844 12.7698H19.4337L17.8745 14.3628C17.5813 14.6628 17.5803 15.1498 17.8725 15.4518C18.0196 15.6028 18.2114 15.6788 18.4043 15.6788C18.5952 15.6788 18.787 15.6028 18.9331 15.4538L21.7789 12.5458C21.9201 12.4008 22 12.2048 22 11.9998C22 11.7958 21.9201 11.5998 21.7789 11.4548Z" fill="#CC5F5F" />
                                        </svg>
                                    </span><span className="text">Logout</span>
                                </button>
                            </li>
                        </div>


                    </ul>
                </div>

                <div className="interface-content">
                    <Navbar name={name} subName={subName}>
                        <div className="mobileView">

                            <div className="nav-icon" onClick={handleClick}>
                                {click === true ? <div>
                                    <span className="" onClick={handleClick} > <AiOutlineClose className="icon newnav-cancel" />   </span>
                                </div> : <div>
                                    <span className="" onClick={handleClick} > <AiOutlineMenuFold className='icon' />   </span>
                                </div>
                                }
                            </div>
                        </div>
                    </Navbar>
                    <div className='container'>
                        <div className='interfaceWrapper'>
                            {children}
                        </div>

                    </div>
                </div>
            </div>

            {/* {userlogout && (
                <AlertToggle topic="Log Out" text="Are you sure you want to log out of your account ?"
                    closeAlertToggle={() => setUserLogout(false)} performAction={logout} subText="logout"
                />
            )} */}

        </div >
    )
}

export default SIDEBAR