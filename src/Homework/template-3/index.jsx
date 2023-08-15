import React from "react";
import "./style.scss";

class Template3 extends React.Component {

  state={
    isToggle: false
  }

  handleClick = () => {
    this.setState({isToggle: !this.state.isToggle})
  }

  render() {
    return (
        <div className="template3">
          <button onClick={this.handleClick}>Click Me 3</button>
          {!this.state.isToggle ? <div className="caseIsTrue">
            <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div> :
          <div className="caseIsFalse">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
             <p>Lorem ipsum dolor sit amet.</p>
             </div>}
        </div>
    )
  }
}

export default Template3;
