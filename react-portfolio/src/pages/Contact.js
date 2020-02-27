import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Contact() {
  return (
    <div class="wrapper">
      <h1 class="h1">Contact Info</h1>
      <div>
        Email me at <a href="mailto:chrismgon@yahoo.com">chrismgon@yahoo.com</a>{" "}
        or connect with me at (478) 227-2252
      </div>
    </div>
  );
}

export default Contact;
