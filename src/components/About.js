import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "./../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User :
          <UserContext.Consumer>
            {(value) => {
              return (
                <h1 className="text-lg font-bold">{value.loggedInUser}</h1>
              );
            }}
          </UserContext.Consumer>
        </div>
        <h2>Our Story</h2>
        <User name="Chintan (Function)" />
        {/* <UserClass name={"First (Class)"} location={"Bangalore Class"} /> */}
        {/* <UserClass name={"Second (Class)"} location={"India Class"} /> */}
        {/* <UserClass name={"Third (Class)"} location={"India Class"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>Our Story</h2>
//       <User name="Chintan (Function)" />
//       <UserClass name={"Chintan (Class)"} location={"Bangalore Class"} />
//     </div>
//   );
// };

export default About;
