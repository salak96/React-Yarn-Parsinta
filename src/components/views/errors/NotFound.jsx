import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container justify-content-center text-center align-items-center py-5 mx-auto'>
            <div className='w-full max-w-xs m-2'>
                <h1 className='flex justify-center text-3xl font-bold mb-2 text-blue-600'>Oops ! </h1>
                <img className='mx-auto' src='https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif' alt='404' style={{ maxWidth: '100%' }} />
                <p className='my-5 text-xl'>Sorry, an unexpected has occurred</p>
                <p className='my-5 text-xl'>Please try again later</p>
                <p className='my-5 text-xl'>{useRouteError()?.statusText}</p>
            </div>
        </div>
    );
};

export default NotFound;
