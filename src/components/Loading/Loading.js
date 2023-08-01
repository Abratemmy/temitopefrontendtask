import React from 'react';
import loadingImg from '../../Assets/loading.gif';
import './Loading.scss'

function LoadingPage() {
    return (
        <div className='LoadingContainer'>
            <div className=' LoadingImage'>
                <div className='gifImage'>
                    <img src={loadingImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default LoadingPage