import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form className="flex flex-col p-4 m-4">
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="Name"
        />
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="Message"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
