import React from 'react';
export default function Post(props) {
    console.log(props);
    return (
        <div className='card'>
            <img src={props.content.imageUrl} className='card-img-top' alt='cat' />
            <div className='card-body'>
                <h4>{props.content.title}</h4>
                <small className='text-muted'>{props.content.published}</small>
            </div>
        </div>
    );
}
