import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className='col-6 col-md-4 col-lg-3 mb-3 animate__animated animate__fadeIn'>
            <div className='card'>
                <img className='w-100 card-img-top' src={url} alt={title} />
                <div className='card-body'>
                    {title}
                </div>
            </div>
        </div>
    )
}
