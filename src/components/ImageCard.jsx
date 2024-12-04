import React, { useState } from 'react'
import errorIcon from '../assets/error_icon.png'
import spinnerIcon from '../assets/spinner_overlay.jpg'

const ImageCard = ({ name, count, images }) => {
    const [loader, setLoader] = useState(false);
    setTimeout(() => {
        setLoader(true);
    }, 5000);
    while (images.length < 4) {
        images.push({ url: "", ready: false, error: false })
    }
    const hasError = images.reduce((acc, image) => acc || image.error, false)
    return (
        <div className="bg-gray-500 min-h-screen flex justify-center pt-12">
            <div className='flex justify-between items-center bg-slate-950 h-48 min-w-[600px] px-20'>
                <div className='flex justify-between items-center'>
                    <div className='grid grid-cols-2'>
                        {images.map((image, index) => (
                            <div key={index}>
                                {image.error
                                    ? <>
                                        {loader && <img src={errorIcon} alt="error" className='h-[38px] w-[38px] rounded-3xl object-cover border' />}
                                        {!loader && <img src={spinnerIcon} alt="error" className='h-[38px] w-[38px] rounded-3xl object-cover border' />}
                                    </>
                                    :
                                    <>
                                        {loader && <img src={image.url} alt="" className='h-[38px] w-[38px] rounded-3xl object-cover border' />}
                                        {!loader && <img src={spinnerIcon} alt="" className='h-[38px] w-[38px] rounded-3xl object-cover border' />}
                                    </>
                                }
                            </div>
                        ))
                        }
                    </div>
                    <div className='ml-6'>
                        <h1 className='text-2xl text-white'>{name}</h1>
                        <p className='text-white'>{count}+ offline centers</p>
                    </div>
                </div>
                {hasError && loader && <img src={errorIcon} alt="error" className='h-[38px] w-[38px] rounded-3xl object-cover border' />}
            </div>
        </div>
    )
}

export default ImageCard