import React from 'react';
import './ImageCard.css'; // Import custom CSS

const ImageCard = ({ name, count, images }) => {
    return (
        <div className="card-container">
            <div className="p-4 flex justify-center">
                {images.map((image, index) => (
                    <div key={index} className="relative mb-4">
                        <img
                            src={image.url}
                            alt={`Image ${index}`}
                            className="card-image" /* Apply custom CSS class */
                        />
                    </div>
                ))}
            </div>
            <div className="card-content">
                <h1 className="card-title">{name}</h1>
                <p className="card-count">{count}+ offline centers</p>
            </div>
        </div>
    );
};

export default ImageCard;
