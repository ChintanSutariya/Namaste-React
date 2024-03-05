import React from "react";
import UserSubClass from "./UserSubClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
      // count: 0,
      // Count2: 2,
    };
    console.log("Child Constructor");
  }
  async componentDidMount() {
    console.log("Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/chintansutariya");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  render() {
    console.log("Child Render");
    const { name, location } = this.state.userInfo;
    // const { count, Count2 } = this.state;
    return (
      <div className="user-card">
        {/* <UserSubClass name={this.props.name} /> */}
        {/* <UserSubClass name={this.props.name + this.props.name} /> */}
        {/* <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase Count
        </button>
        <button
          onClick={() => {
            this.setState({ count: count - 1 });
          }}
        >
          Decrease Count
        </button> */}
        {/* <h1>Count2 : {Count2}</h1> */}
        <img src={this.state.userInfo.avatar_url} alt="User Avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: 707</h3>
      </div>
    );
  }
}

export default UserClass;

/**
 * MOUNTING
 * 1. Constructor (dummy data)
 * 2. Render (Dummy Data)
 *    <HTML Dummy>
 * 3. Component Did Mount
 *    <API Call>
 *    <this.setState> State variable is updated
 *
 * UPDATING
 * 1. Render (API Data)
 *   <HTML new API Data>
 * 2. Component Did Update
 */
