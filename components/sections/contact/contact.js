"use client";
import React, { useState } from 'react';

function ContactForm() {
  // Step 2: Use state to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Step 3: Define the function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Step 1: Prevent default form submission

    // Process form data here, e.g., send it to a server or log it
    console.log(formData);

    // Example: Sending form data to a server
    // You can replace this URL with your actual endpoint
    const response = await fetch('https://elderassist.azurewebsites.net/api/fn_contact_us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle success response
      console.log('Form submitted successfully');
      <div>
      {/* Your form and other content here */}
      {submissionSuccess && <div className="alert-badge">Form submitted successfully!</div>} 
    </div>
    } else {
      // Handle error response
      console.error('Form submission failed');
    }
  };

  // Update form data in state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Step 4: Attach the submission handler to the form
  return (
    <form onSubmit={handleSubmit}>
      <div className="row clearfix">
        <div className="form-group col-md-6">
            <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
        </div>
        
        <div className=" form-group col-md-6">
            <input type="email" name="email" placeholder="Your Email" required onChange={handleChange}/>
        </div>

        <div className="form-group col-md-12">
            <input type="text" name="phone"placeholder="Phone Number" required onChange={handleChange}/>
        </div>
        
        <div className="form-group col-md-12">
            <textarea name="message" placeholder="Message" required onChange={handleChange}/>
        </div>
        
        <div className="col-md-12 text-center">
            <button className="btn-1 btn-small" type="submit" data-loading-text="Please wait...">Send Message <i className="flaticon-right-arrow-1"></i><span></span></button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm; 