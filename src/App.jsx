import React from 'react';
import Card from './components/Cards';

function App() {
    return (
        <div className='py-4'>
            <div className='container flex'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card 
                        content={{ 
                            imageUrl:'http://placekitten.com/g/300/200',
                            title:'The first post',
                            published:'29 Oktober ,2023' ,
                         }}
                        />
                    </div>
                    <div className='col-md-4'>
                        <Card 
                        content={{ 
                            imageUrl:'http://placekitten.com/300/200',
                            title:'The second post',
                            published:'2 November ,2021' ,
                         }}
                        />
                    </div>
                    <div className='col-md-4'>
                        <Card 
                        content={{ 
                            imageUrl:'http://placekitten.com/g/300/200',
                            title:'The third post',
                            published:'19 Januari ,2022' ,
                         }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
