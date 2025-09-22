import React, { useState } from 'react';
import '../components/form.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    country: '',
    email: '',
    phone: '',
    mobile: '',
    state: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Country change
  const CountryChange =() =>{
    let Country = document.getElementById('Country').value;

    if(Country == "India"){

        document.getElementById ('State').innerHTML = `
        <option selected value="stateselect">Please select your state</option>
         <option value="Maharashtra">Maharashtra</option>
         <option value="Karnataka">Karnataka</option>
         <option value="Tamil Nadu">Tamil Nadu</option>
         <option value="Uttar Pradesh">Uttar Pradesh</option>
         <option value="Gujarat">Gujarat</option>
        `        
    }
    if(Country == "USA"){
        document.getElementById ('State').innerHTML = `
        <option selected value="stateselect">Please select your state</option>
         <option value="California">California</option>
         <option value="Texas">Texas</option>
         <option value="Florida Nadu">Florida</option>
         <option value="New York">New York</option>
         <option value="Illinois">Illinois</option>
        `     
    }
    if(Country == "Canada"){
        document.getElementById ('State').innerHTML = `
        <option selected value="stateselect">Please select your state</option>
         <option value="Ontario">Ontario</option>
         <option value="Quebec">Quebec</option>
         <option value="Columbia">Columbia</option>
         <option value="Alberta">Alberta</option>
         <option value="Manitoba">Manitoba</option>
        `     
    }  

  }

  // Handle form submit
  const handleSubmit = () => {
    if (!formData.name || !formData.dob || !formData.address || !formData.country || !formData.email) {
      setErrorMessage('All fields are required.');
      return;
    }
    setErrorMessage('');
    console.log( formData);
  };

  return (
    <div>
      <div className="wrapper">
        <h1>Personal Details</h1>
        {errorMessage && <p id="error-message">{errorMessage}</p>}
        <div className="container">
          <div className="slide1">
            <div>
              <label>Name</label>
              <input
                id="Name"
                type="text"
                placeholder="Enter your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Birth Date</label>
              <input
                id="DOB"
                type="date"
                placeholder="Enter your Birth Date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Address</label>
              <input
                id="Address"
                type="text"
                placeholder="Enter your Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Country</label>
              <select
                id="Country"
                name="country"
                value={formData.country}
                onChange={CountryChange}
              >
                <option value="">Please Select your Country</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
              </select>
            </div>
          </div>

          <div className="slide2">
            <div>
              <label>E-Mail</label>
              <input
                id="Email"
                type="email"
                placeholder="Enter your E-Mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                id="Phone"
                type="number"
                placeholder="Enter your Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Mobile</label>
              <input
                id="Mobile"
                type="number"
                placeholder="Enter your Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>State</label>
              <select
                id="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select your State</option>
                <option value="TamilNadu">TamilNadu</option>
               
              </select>
            </div>
          </div>
        </div>

        <div className="buttonctr">
          <button className="sub-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
