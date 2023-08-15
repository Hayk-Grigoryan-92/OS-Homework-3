import React from "react";
import './style.scss'

class Template6 extends React.Component{

    handleClick = (e) => {
       
    }

    render(){
        return <div className="template-6">
            <button onClick={this.handleClick}>Click Me 6</button>
            <div></div>

        </div>
    }
}

export default Template6