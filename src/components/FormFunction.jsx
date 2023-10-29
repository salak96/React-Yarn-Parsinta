import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            name    :''
        }
    }
    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e)=>{
        e.preventDefault();
        this.setState({
            name : `${this.state.firstName} ${this.state.lastName}`
        })
        this.setState({
            firstName : '',
            lastName : ''
        })
    }
    render() {
        const { name } = this.state
        return (
            <div className='p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10'>
                            <div className='card'>
                                <div className='card-header'>Learn REACT JS</div>
                                <div className='card-body'>
                                    <form onSubmit={this.submitHandler}>
                                        <div className='mb-4'>
                                            <label htmlFor='firstName' className='form-label'>
                                                firstName
                                            </label>
                                            <input type='text' value={this.state.firstName} onChange={this.changeHandler} name='firstName' id='firstName' className='form-control' />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor='lastName' className='form-label'>
                                                lastName
                                            </label>
                                            <input type='text' value={this.state.lastName} onChange={this.changeHandler} name='lastName' id='lastName' className='form-control' />
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
        );
    }
}

export default Form;
