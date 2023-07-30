import React from "react";
import ReactDOM from "react-dom";
import Zendesk from "react-zendesk";
const ZENDESK_KEY = "6faefe16-7428-46d5-a5be-83e433735e33";

// Take contact form as an example
// Let's customise our contact form appearance, launcher and add prefill content
const setting = {
  color: {
    theme: "#000"
  },
  launcher: {
    chatLabel: {
      "en-US": "Need Help"
    }
  },
  contactForm: {
    fields: [
      { id: "description", prefill: { "*": "My pre-filled description" } }
    ]
  }
};
export default Zendesk






