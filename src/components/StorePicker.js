import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

 goToStore = event => {
   // 1 stop form
    event.preventDefault();
    // 2 get text
    const storeName = this.myInput.current.value;
    // 3 change the page - remember it has all the react router stuff as props cos it's a child component
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" 
        ref={this.myInput}
        required
         placeholder="Store Name"
         defaultValue={getFunName()}
          />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
} 

export default StorePicker;
