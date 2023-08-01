import React, { useState } from 'react'
import SIDEBAR from '../../components/Sidebar/Sidebar'
import { converstaionData } from './ConversationData';
import './Conversation.scss';
import emojiImg from '../../Assets/emoji.svg';
import sendImg from '../../Assets/Send.svg'
import searchImg from '../../Assets/Search.svg';
import { BsCheck } from 'react-icons/bs';
import Picker from 'emoji-picker-react';
import { AiOutlinePlus, AiOutlineCamera } from 'react-icons/ai'

function Conversation() {
    const [search, setSearch] = useState('');

    const [selectType, setSelectType] = useState(false)
    const [selectActive, setSelectActive] = useState()

    console.log("selelct", selectActive)

    const [popupcontent, setPopupcontent] = useState({})

    const changeContent = (data, event) => {
        setPopupcontent(data);
        setSelectType(true);
        setSelectActive(data?.id)
    }

    const [inputStr, setInputStr] = useState("");
    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        console.log("Emohi", event.emoji)
        setInputStr((prevInput) => setInputStr(prevInput + emojiObject.emoji));
        setShowPicker(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // open profileImage
    const [openProfile, setOpenProfile] = useState(false);
    const viewProfile = () => {
        setOpenProfile(true)
    }

    return (
        <div>
            <SIDEBAR name="Conversations" subName="Conversations">
                <div className='Conversations'>
                    <div className='topWrapper'>
                        <div className='text'>Conversations with Customers</div>
                        <button>New Message</button>
                    </div>

                    <div className='contentWrapper'>
                        <div className='contactsContainer'>
                            <div className='pageCard'>
                                <div className='top'>
                                    <div className='title'>Contacts</div>
                                    <div className='number'>{converstaionData?.length}</div>
                                </div>

                                <div className='searchInput'>
                                    <div className='icon'><img src={searchImg} alt="" /></div>
                                    <input type='text' placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search} />
                                </div>

                                <div className='contact'>
                                    {converstaionData?.filter((item) => {
                                        return search?.toLowerCase() === "" ? item :
                                            (item?.name?.toLowerCase().includes(search.toLowerCase()))

                                    })?.map((data, index) => {
                                        return (
                                            <div className={selectActive === data?.id ? 'content activeContent' : 'content'} key={index}
                                                onClick={() => changeContent(data, index)}
                                            >
                                                <div className='image'><img src={data?.image} alt="" /></div>
                                                <div className='detail'>
                                                    <div className='name'>{data?.name} <span>{data?.new === "true" && (<span className='new'>New</span>)}</span></div>
                                                    <div className='text'><div className='message'>{data?.text}</div> <span>12:55am</span></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='conversationDetails'>
                            <div className='pageCard'>
                                {selectType ?
                                    <div className='detailWrapper'>
                                        <div className='top'>
                                            <div className='left'>
                                                <div className='image'>
                                                    <img src={popupcontent?.image} alt="" />
                                                </div>
                                                <div className='name'>
                                                    {popupcontent?.name}
                                                    <div className='status'>
                                                        {popupcontent?.status === "online" ?
                                                            <div className='online'><span></span>{popupcontent?.status}</div>
                                                            : <div className='offline'><span></span>{popupcontent?.status}</div>
                                                        } 12:55 am
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='right'>
                                                <div className='first'>
                                                    <div className='customer'>New Customer</div>
                                                    <div className='viewProfile' onClick={viewProfile}>View Profile</div>
                                                </div>
                                                <div className='second'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5137 21.5H8.16592C5.09955 21.5 2.74715 20.3924 3.41534 15.9348L4.19338 9.89357C4.60528 7.66931 6.02404 6.81805 7.26889 6.81805H17.4474C18.7105 6.81805 20.0469 7.73339 20.5229 9.89357L21.3009 15.9348C21.8684 19.889 19.5801 21.5 16.5137 21.5Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M16.651 6.59839C16.651 4.21232 14.7167 2.27802 12.3307 2.27802V2.27802C11.1817 2.27315 10.0781 2.72618 9.26388 3.53694C8.44969 4.34769 7.99199 5.44938 7.992 6.59839H7.992" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M15.2963 11.1018H15.2506" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M9.46572 11.1018H9.41995" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <div className='order'>0 Orders</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='content'>
                                            <div className='maindate'>12 August 2022</div>
                                            <div className='leftMessage'>
                                                <div className='message message1'>Hello, I want to make enquiries about your product</div>
                                                <div className='date'>12:55am</div>
                                            </div>

                                            <div className='rightMessage'>
                                                <div className='message message2'>Hello Janet, thank you for reaching out</div>
                                                <div className='date'>12:57am <span><BsCheck className="icon" /></span></div>
                                            </div>
                                            <div className='rightMessage'>
                                                <div className='message message2'>What do you need to know?</div>
                                                <div className='date'>12:57am <span><BsCheck className="icon" /></span></div>
                                            </div>

                                            <div className='maindate'>Today</div>
                                            <div className='leftMessage'>
                                                <div className='message message1'>I want to know if the price is negotiable, i need
                                                    about 2 Units</div>
                                                <div className='date'>12:55am</div>
                                            </div>

                                            <div className='picker-container'>
                                                <form onSubmit={handleSubmit}>
                                                    <div className=" inputsession">
                                                        <div className='plus'>
                                                            <AiOutlinePlus className='icon' />
                                                        </div>
                                                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"
                                                            className="input-style"
                                                            value={inputStr}
                                                            placeholder='Your message'
                                                            onChange={(e) => setInputStr(e.target.value)}
                                                        />
                                                        <div class="send">
                                                            <img src={emojiImg} alt="image23" onClick={() => setShowPicker((val) => !val)} />
                                                            <button type="submit">Send <img src={sendImg} alt="" /> </button>

                                                        </div>

                                                        {showPicker &&
                                                            <div className='showPicker'>
                                                                <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
                                                            </div>
                                                        }
                                                    </div>

                                                </form>



                                            </div>
                                        </div>

                                    </div> :

                                    <div className='startConversation'>
                                        <div className='text'>Start conversation with your customers</div>
                                    </div>

                                }
                            </div>
                        </div>
                    </div>
                    {openProfile && (
                        <div className='popupContainer'>
                            <div className='previewBody' onClick={(e) => e.stopPropagation()}>
                                <div className='popMessage'>
                                    <div className="closeImg">
                                        <div onClick={() => setOpenProfile(false)} style={{ cursor: 'pointer' }}>X</div>
                                    </div>
                                    <div className='image'>
                                        <img src={popupcontent?.image} alt="" />
                                        <div className="camera"> <AiOutlineCamera className="icon" /></div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    )}
                </div>


            </SIDEBAR>
        </div>
    )
}

export default Conversation