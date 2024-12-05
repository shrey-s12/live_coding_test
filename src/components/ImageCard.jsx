import React, { useEffect, useState } from 'react'
import errorIcon from '../assets/error_icon.png'
import spinnerIcon from '../assets/spinner_overlay.jpg'

const ImageCard = ({ name, count, images }) => {
    const [loader, setLoader] = useState(false);
    const [loadError, setLoadError] = useState(false);
    const [timer, setTimer] = useState(5);
    const [retryCount, setRetryCount] = useState(0);

    // Images is loaded and store in an array as ready = true and error = false and vice versa
    images.forEach((image, index) => {
        if (image.error === true) {
            images[index].ready = false;
            images[index].error = true;
        } else {
            const img = new Image();
            img.src = image.url;
            img.onload = () => {
                images[index].ready = true;
                images[index].error = false;
            }
            img.onerror = () => {
                images[index].ready = false;
                images[index].error = true;
            }
        }
    });

    useEffect(() => {
        if (retryCount < 3) {
            if (timer === 0) {
                setTimer(5);
                setLoader(true);
                setRetryCount(retryCount + 1);
            } else {
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
            }
        } else {
            setTimer(0);
            setLoadError(true);
        }
    }, [timer, retryCount]);

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
                                        {loadError && <img src={errorIcon} alt="error" className='h-[38px] w-[38px] rounded-3xl object-cover border' />}
                                        {!loadError && <img src={spinnerIcon} alt="error" className='h-[38px] w-[38px] rounded-3xl object-cover border' />}
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
                <div>
                    <div className='text-white'>Timer: <span>{timer}</span></div>
                    <div className='text-white'>Retry Count: <span>{retryCount}</span></div>
                    {hasError && loadError && <img src={errorIcon} alt="error" className='h-[38px] w-[38px] rounded-3xl object-cover border' />}
                </div>
            </div>
        </div>
    )
}

export default ImageCard