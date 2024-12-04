import React from 'react'
import errorIcon from '../assets/error_icon.png'

const ImageCard = ({ name, count, images }) => {
    const hasError = images.some((image) => image.error);
    return (
        <div className="bg-gray-500 min-h-screen flex justify-center pt-12">
            <div className='flex justify-between items-center bg-slate-950 h-48 w-[80%] px-20'>
                <div className='flex justify-between items-center'>
                    <div className='grid grid-cols-2'>
                        {images.map((image, index) => (
                            <div key={index}>
                                {image.error
                                    ? <img src={errorIcon} alt="error" className='h-[38px] w-[38px] rounded-3xl object-cover border' />
                                    : <img src={image.url} alt="" className='h-[38px] w-[38px] rounded-3xl object-cover border' />}
                            </div>
                        ))
                        }
                    </div>
                    <div className='ml-12'>
                        <h1 className='text-2xl text-white'>{name}</h1>
                        <p className='text-white'>{count}+ offline centers</p>
                    </div>
                </div>
                {hasError && <img src={errorIcon} alt="error" className='h-[38px] w-[38px] rounded-3xl object-cover border' />}
            </div>
        </div>
    )
}

export default ImageCard