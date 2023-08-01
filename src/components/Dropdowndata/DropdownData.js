import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import './dropdownData.scss'

function DropdownData() {
    const navbarData = ["This Week", "Last Week", "Last Month", 'Last 2 Months']
    const [selectType, setSelectType] = useState(false)
    const [selectActive, setSelectActive] = useState(navbarData[0])
    const [typeSelected, settypeSelected] = useState(navbarData[0])
    return (
        <div className='dropdownComponent'>
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
        </div>
    )
}

export default DropdownData