import React from "react";

class UserSubClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Sub Child Constructor");
  }
  componentDidMount() {
    console.log(this.props.name + "Sub Child Component Did Mount");
  }
  render() {
    console.log(this.props.name + "Sub Child Render");

    return (
      <div className="user-card">
        <h1>Count All</h1>
      </div>
    );
  }
}

export default UserSubClass;
