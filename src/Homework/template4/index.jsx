import React from "react";

class Template4 extends React.Component {
  state = {
    isToggle: false,
  };

  handleClick = () => {
    this.setState({ isToggle: !this.state.isToggle });
    console.log('1');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me 4</button>
        {!this.state.isToggle ? (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        ) : (
          null
        )}
      </div>
    );
  }
}

export default Template4;
