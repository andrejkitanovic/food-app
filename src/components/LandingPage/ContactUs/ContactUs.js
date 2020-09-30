import React from "react";
import "./ContactUs.scss";

const contactUs = (props) => {
  return (
    <div className="ContactUs" id="contact">
      <h3>Feel free to contact us</h3>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s
      </p>
      <form action="POST">
        <h4>Send us a message!</h4>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your E-mail"
        />
        <label for="message">Message:</label>
        <textarea placeholder="Give us a quick feedback!" name="message" id="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default contactUs;
