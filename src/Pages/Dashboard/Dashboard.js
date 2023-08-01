import React, { useEffect, useState } from 'react'
import SIDEBAR from '../../components/Sidebar/Sidebar'
import DropdownData from '../../components/Dropdowndata/DropdownData';
import icon1 from '../../Assets/icon1.svg';
import user from '../../Assets/user.svg';
import bag from '../../Assets/Bag.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUSERS } from '../../components/Redux/Action/User';
import LoadingPage from '../../components/Loading/Loading';
import phone from '../../Assets/phone.svg';
import phone2 from '../../Assets/phone2.svg'
import cart from '../../Assets/cart.svg'
import './Dashboard.scss'
import BarChartRechart from './Barchart/Barchart';
import Piechart from './PieChart/PieChart';
import { MdKeyboardArrowDown } from 'react-icons/md'

function Dashboard() {
    const dispatch = useDispatch();

    const { allUsers, isLoading } = useSelector((state) => state.userReducer);
    console.log("allUsers", allUsers);
    // barchart dropdown
    const [dropdown, setDropdown] = useState(false);
    const openDropdown = () => {
        setDropdown(!dropdown)
    }
    const [selected, setSelected] = useState("sales");
    const handleClick = (event) => {
        setSelected(event.target.id);
        console.log(event.target.id)
        setDropdown(false)

    }
    useEffect(() => {
        dispatch(getAllUSERS())
    }, [dispatch])
    return (
        <div>
            <SIDEBAR name="Dashboard" subName="dashboard">
                {isLoading ? <LoadingPage /> :
                    <div className='DashboardPage'>
                        <div className='row gx-4 gy-4 firstRow'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <div className='pageCard'>
                                    <div className='top'>
                                        <div className='image image1'>
                                            <img src={icon1} alt="" />
                                        </div>
                                        <DropdownData />
                                    </div>
                                    <div className='contentWrapper'>
                                        <div className='content'>
                                            <div className='name'>sales</div>
                                            <div className='text'>₦4,000,000.00</div>
                                        </div>
                                        <div className='content'>
                                            <div className='name'>Volume</div>
                                            <div className='text'>450 <span>+20.00%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <div className='pageCard'>
                                    <div className='top'>
                                        <div className='image image2'>
                                            <img src={user} alt="" />
                                        </div>
                                        <DropdownData />
                                    </div>
                                    <div className='contentWrapper'>
                                        <div className='content'>
                                            <div className='name'>Customers</div>
                                            <div className='text'>1,250 <span>+20.00%</span></div>
                                        </div>
                                        <div className='content'>
                                            <div className='name'>Active</div>
                                            <div className='text'>1,180 <span>85%%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <div className='pageCard'>
                                    <div className='top'>
                                        <div className='image image3'>
                                            <img src={bag} alt="" />
                                        </div>
                                        <DropdownData />
                                    </div>
                                    <div className='contentWrapper'>
                                        <div className='content'>
                                            <div className='name'>All Orders</div>
                                            <div className='text'>450</div>
                                        </div>
                                        <div className='content'>
                                            <div className='name'>Pending</div>
                                            <div className='text'>5</div>
                                        </div>
                                        <div className='content'>
                                            <div className='name'>Completed</div>
                                            <div className='text'>445</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='otherContent'>
                            <div className='row gx-4 gy-4'>
                                <div className='col-lg-8 col-md-6 col-sm-12'>
                                    <div className='row gx-4 gy-4'>
                                        <div className='col-12'>
                                            <div className='row gx-4 gy-4 firstPart'>
                                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                                    <div className='pageCard card1'>
                                                        <div className='top'>
                                                            <div className='title'>Marketing</div>
                                                            <DropdownData />
                                                        </div>
                                                        <Piechart />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <div className='card2'>
                                                        <div className='pageCard allProducts '>
                                                            <div className='image'>
                                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4189 15.7321C21.4189 19.3101 19.3099 21.4191 15.7319 21.4191H7.94988C4.36288 21.4191 2.24988 19.3101 2.24988 15.7321V7.93211C2.24988 4.35911 3.56388 2.25011 7.14288 2.25011H9.14288C9.86088 2.25111 10.5369 2.58811 10.9669 3.16311L11.8799 4.37711C12.3119 4.95111 12.9879 5.28911 13.7059 5.29011H16.5359C20.1229 5.29011 21.4469 7.11611 21.4469 10.7671L21.4189 15.7321Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M7.48096 14.463H16.216" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <div className='contentWrapper'>
                                                                <div className='content'>
                                                                    <div className='name'>All Products</div>
                                                                    <div className='text'>45</div>
                                                                </div>
                                                                <div className='content'>
                                                                    <div className='name'>Active</div>
                                                                    <div className='text'>32 <span>+24%</span></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className='pageCard abandoneCard'>
                                                            <div className='top'>
                                                                <div className='image'>
                                                                    <img src={cart} alt="" />

                                                                </div>
                                                                <DropdownData />
                                                            </div>

                                                            <div className='contentWrapper'>
                                                                <div className='content'>
                                                                    <div className='name red'>Abandoned Card</div>
                                                                    <div className='text'>45% <span>+0.00%</span></div>
                                                                </div>
                                                                <div className='content'>
                                                                    <div className='name'>Customers</div>
                                                                    <div className='text'>30</div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12'>
                                            <div className='barChartSession'>
                                                <div className='pageCard'>
                                                    <div className='top'>
                                                        <div className='left'>
                                                            <div className='title'>Summary</div>

                                                            <div className='dropdownComponent'>
                                                                <div className='selectDropdown'>
                                                                    <div className='header' onClick={openDropdown} style={{ position: 'relative' }}>{selected}
                                                                        <span><MdKeyboardArrowDown className="dropdown" /></span>
                                                                        {dropdown && (
                                                                            <div className='dropdown-content'>
                                                                                <div className='dropOverflow'>
                                                                                    <div className={selected === "sales" ? "dropdown-item dropActive" : "dropdown-item"} onClick={handleClick}
                                                                                        id={"sales"}>
                                                                                        Sales
                                                                                    </div>
                                                                                    <div className={selected === "profit" ? "dropdown-item dropActive" : "dropdown-item"} onClick={handleClick}
                                                                                        id={"profit"}>
                                                                                        Profit
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='right'>
                                                            <DropdownData />
                                                        </div>
                                                    </div>

                                                    <BarChartRechart selected={selected} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* recent orders session */}
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='recentOrder'>
                                        <div className='pageCard'>
                                            <div className='top'>
                                                <div className='title'>Recent Orders</div>
                                            </div>

                                            <div className='contentWrapper'>
                                                {allUsers?.map((data, index) => {
                                                    return (
                                                        <div className='content'>
                                                            <div className='left'>
                                                                <div className='image'>
                                                                    {data?.price > 100 ? <img src={phone2} alt="" /> : <img src={phone} alt="" />}
                                                                </div>
                                                                <div className='product'>
                                                                    <div className='name'>iPhone 13</div>
                                                                    <div className='price'>₦730,000.00 x 1</div>
                                                                </div>
                                                            </div>
                                                            <div className='right'>
                                                                <div className='date'>12 sept 2022</div>
                                                                <div className='status'>{data?.price > 100 ? <div className='completed'>Completed</div>
                                                                    : <div className='pending'>Pending</div>
                                                                }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </SIDEBAR>
        </div>
    )
}

export default Dashboard