import { useState } from "react"

export default function FormFunction() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');

    const submitHandler = (e) => {
      e.preventDefault();
       setName(`${firstName} ${lastName}`);
       setFirstName('');
       setLastName('');
    }

    return(
        <div className='p-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='card'>
                        <div className='card-header'>Learn REACT JS</div>
                        <div className='card-body'>
                            <form onSubmit={submitHandler}>
                                <div className='mb-4'>
                                    <label htmlFor='firstName' className='form-label'>
                                        firstName
                                    </label>
                                    <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} name='firstName' id='firstName' className='form-control' />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='lastName' className='form-label'>
                                        lastName
                                    </label>
                                    <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} name='lastName' id='lastName' className='form-control' />
                                </div>
                                <button type='submit' className='btn btn-primary w-100 btn-block'>
                                    Show
                                </button>
                            </form>
                        </div>
                        <div className='card-footer'>
                            My name is {name ? name : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}