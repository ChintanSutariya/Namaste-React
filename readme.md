Ep 1

Parcel
-Dev BUild
-Local Server
-HMR (Hot Module Replacement)
-File Watching Algorithm - written in C++
-Caching - Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling - to support older browsers
-Diagnostic
-Error Handling
-HTTPs
-Tree Shaking - remove unused code
-Different dev and prod bundles

Food App

- Header
- -Logo
- -Nav Items
- Body
- -Search
- -RestaurantContainer
- -RestaurantCard
- -Image
- -Name of Restaurant, Star Rating, Cuisine, Delivery Time
- Footer
- -CopyRight
- -Links
- -Address
- -Contact

Two types of Export/Import

1. Default Export/Import
   export default Component;
   import Component from "path";
2. Named Export/Import
   export const Component;
   import { Component } from "path";

# React Hooks

(Normal JS Utility Function)
-useState() - Superowerful State Variables in React
-useEffect()

# 2 types of Routing in web apps

- Client Side Routing
- Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our Store
- Connect our Store to our app.
- Slice (cart Slice)
- Dispatch(action)
- Selector

# Types of testing (Developer)

- Unit Testing
  Testing of one unit or one Component in Isolation.
- Integration Testing
  Integration testing is a type of software testing where components of the software are gradually integrated and then tested as a unified group.
- End to End Testing - e2e Testing
  End-to-end testing verifies that all components of a system can run under real-world scenarios. The goal of this form of testing is to simulate a user experience from start to finish.

# Setting up Testing in our App

- Installed React Testing Library
- Installed jest
- Installed Babel dependencies
- Added BabelConfig File
- Configure Parcel config file to disable default babel transpilation
- Jest Configuration - npx jest --init
- Install jsdom library - npm install --save-dev jest-environment-jsdom
- Install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react inside my babel config - ["@babel/preset-react", { runtime: "automatic" }] in babel.config.js
- Install @testing-library/jest-dom
