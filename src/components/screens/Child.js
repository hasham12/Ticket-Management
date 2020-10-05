import React from 'react'

export default class Child extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div style={{backgroundColor: 'green', padding:'10px'}}>
                <h4>
                    This is Child Component
                </h4>
                {this.props.children}
            </div>
        );
    }
}