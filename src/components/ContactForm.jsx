import React, { useState } from "react";
import { links } from "data";
import axios from "axios";

export default function ContactForm() {
  const [errors, setErrors] = useState(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;
    let formData = new FormData();
    Object.keys(values).forEach((key) => {
      if (values[key] !== "") {
        formData.append(key, values[key]);
      } else {
        isError = true;
      }
    });

    if (isError) {
      setErrors("All fields are required")
    } else {
      axios
        .post(links.contact, formData)
        .then((res) => {
          setValues({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setErrors(null);
        })
        .catch((err) => {
          setErrors(err.response.data.message);
        });
    }
  };

  return (
    <form
      method="POST"
      className="contact-form-area"
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="row contact-form">
        <div className="form-group col-md-12">
          <input
            required={true}
            id="name"
            name="name"
            className="form-control"
            placeholder="Name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-12">
          <input
            required={true}
            id="email"
            name="email"
            className="form-control"
            placeholder="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-12">
          <input
            required={true}
            id="mobile"
            name="subject"
            className="form-control"
            placeholder="Subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-12">
          <textarea
            required={true}
            id="message"
            name="message"
            className="yourmessage form-control"
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="submit-form form-group col-sm-12">
          <button id="frm" className="button submit-btn" type="submit">
            <span>Submit</span>
          </button>
          <p className={`form-messege ${errors !== "" ? "error" : ""}`}>
            {errors}
          </p>
        </div>
      </div>
    </form>
  );
}
