import React from 'react'
import { Route } from 'react-router-dom';
import Child from './Child'

export default class Parent extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
            <div style={{backgroundColor: 'blue', padding:'10px', width: '50vw'}}>
                <h3>This is Parent</h3>
                <Child>
                    <p style={{backgroundColor: 'white', padding: '10px'}}>
                        This paragraph will show up in the child, but was sent from the parent
                    </p>
                    <p style={{backgroundColor: 'white', padding: '10px'}}>
                        This paragraph will show up in the child, but was sent from the parent
                    </p>
                </Child>
            </div>
            </>
        )
    };
}