import React from "react";
import './style.scss'

class Template1 extends React.Component{

    state={
        isGreen: false
    }

    handleClick = () => {
        this.setState({isGreen:!this.state.isGreen})
    }

    render(){
        return (
            <div className="template-1">
                <button onClick={this.handleClick}>Click Me 1,2</button>
                {!this.state.isGreen?<p>Lorem ipsum dolor sit amet.</p>: <p className="isGreen">Lorem ipsum dolor sit amet.</p>}
            </div>
        )
    }
}

export default Template1