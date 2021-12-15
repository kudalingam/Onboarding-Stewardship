import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_yjalANuJOISZAjeQreD28");

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("form.current", form.current);
    const data = {
      to_name: form.current.user_name,
      reply_to: form.current.user_email,
      message: form.current.message,
    };
    console.log("data", data);
    e.preventDefault();

    emailjs.sendForm("service_csfev69", "template_lq3idf6", data).then(
      (result) => {
        console.log(`Success`, result.text, result.status);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default Email;
