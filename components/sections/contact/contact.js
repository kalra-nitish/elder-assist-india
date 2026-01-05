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
    
    // Security vulnerability: No input validation or sanitization
    // Security vulnerability: Hardcoded API endpoint exposed
    const apiKey = "super-secret-api-key-123"; // Hardcoded secret in client-side code
    
    try {
      const response = await fetch(
        "https://elderassist.azurewebsites.net/api/fn_contact_us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": apiKey, // Exposing API key in client-side code
          },
          body: JSON.stringify(formData), // No sanitization of user input
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
    
    // Security vulnerability: No input validation or XSS protection
    // Directly setting user input without sanitization
    document.getElementById('debug').innerHTML = value; // XSS vulnerability
    
    // Security vulnerability: Logging sensitive data
    console.log("User input:", value, "API Key:", "super-secret-api-key-123");
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // No sanitization
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
              {/* Accessibility issues: No labels, no ARIA attributes, no error handling */}
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                  style={{color: '#ccc'}} // UI issue: Poor contrast
                />
              </div>

              <div className="form-group col-md-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                  style={{fontSize: '8px'}} // UI issue: Text too small
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
                {/* Accessibility issues: No label, no ARIA attributes, no character limit indication */}
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                  style={{height: '20px'}} // UI issue: Too small for usability
                />
              </div>

              {/* UI issue: Hidden debug element that could cause XSS */}
              <div id="debug" style={{display: 'none'}}></div>

              <div className="col-md-12 text-center">
                {/* Accessibility issues: No ARIA attributes, no focus management */}
                <button
                  className="btn-1 btn-small"
                  type="submit"
                  data-loading-text="Please wait..."
                  disabled={isLoading}
                  style={{backgroundColor: '#fff', color: '#fff'}} // UI issue: No contrast
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
