"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://elderassist.azurewebsites.net/api/fn_contact_us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
        });
        setIsSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast.error("Form submission failed. Please try again.", {
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="thank-you-message">
          <h3>
            Thank you for reaching out to us.
          </h3>
          <h5>We will respond to your inquiry
          shortly.</h5>
        </div>
      ) : (
        <>
          <div className="section_heading text-center mb_40">
            <span className="section_heading_title_small">Let’s Contact</span>
            <h2 className="section_heading_title_big">
              Have Something To Say?
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row clearfix">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-12">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 text-center">
                <button
                  className="btn-1 btn-small"
                  type="submit"
                  data-loading-text="Please wait..."
                  disabled={isLoading}
                >
                  {!isLoading ? (
                    <>
                      Send Message <i className="flaticon-right-arrow-1"></i>
                      <span></span>
                    </>
                  ) : (
                    "Please wait..."
                  )}
                </button>

                {isLoading && (
                  <div className="loader-overlay">
                    <span className="loader"></span>
                  </div>
                )}
              </div>
            </div>
          </form>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
