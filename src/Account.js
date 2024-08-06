import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    .account-page {
        width: 90%;
        margin: 0 auto;
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-gap: 20px;
    }

    .account-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        border: 2px solid #4CAF50;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .account-info img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    .account-info h3, .account-info p {
        margin: 5px 0;
    }

    .form-section {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        border: 2px solid #2196F3;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
    }

    .section {
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
    }

    .section:last-of-type {
        border-bottom: none;
    }

    .personal-details {
        color: #4CAF50;
    }

    .address-details {
        color: #2196F3;
    }

    .input-group {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
    }

    .input-group label {
        margin-bottom: 5px;
    }

    .input-group input {
        padding: 8px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .input-group input::placeholder {
        color: #aaa;
    }

    .personal-details-section, .address-details-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .button-group {
        display: flex;
        justify-content: space-between;
    }

    .button-group button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
    }

    .button-group button[type="button"] {
        background-color: #f44336;
        color: white;
    }

    .button-group button[type="button"]:hover {
        background-color: #d32f2f;
        transform: scale(1.05);
    }

    .button-group button[type="submit"] {
        background-color: #4CAF50;
        color: white;
    }

    .button-group button[type="submit"]:hover {
        background-color: #388E3C;
        transform: scale(1.05);
    }
`;

const AccountPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        houseNo: '',
        buildingName: '',
        city: '',
        state: '',
        pincode: ''
    });

    const [accountInfo, setAccountInfo] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const clearAll = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            houseNo: '',
            buildingName: '',
            city: '',
            state: '',
            pincode: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the account info with the form data
        setAccountInfo({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
        });
        console.log(formData);
    };

    return (
        <Wrapper>
            <div className="account-page">
                <div className="account-info">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Account" />
                    <h3>{accountInfo.firstName} {accountInfo.lastName}</h3>
                    <p>{accountInfo.email}</p>
                </div>
                <div className="form-section">
                    <h2>Account Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="section">
                            <h3 className="personal-details">Personal Information</h3>
                            <div className="personal-details-section">
                                <div className="input-group">
                                    <label>First Name</label>
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Last Name</label>
                                    <input 
                                        type="text" 
                                        name="lastName" 
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                        placeholder="Enter your last name"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Phone Number</label>
                                    <input 
                                        type="text" 
                                        name="phoneNumber" 
                                        value={formData.phoneNumber} 
                                        onChange={handleChange} 
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <h3 className="address-details">Address</h3>
                            <div className="address-details-section">
                                <div className="input-group">
                                    <label>House No.,Building Name</label>
                                    <input 
                                        type="text" 
                                        name="houseNo" 
                                        value={formData.houseNo} 
                                        onChange={handleChange} 
                                        placeholder="House No.,Building Name"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>City</label>
                                    <input 
                                        type="text" 
                                        name="city" 
                                        value={formData.city} 
                                        onChange={handleChange} 
                                        placeholder="Enter your city"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>State</label>
                                    <input 
                                        type="text" 
                                        name="state" 
                                        value={formData.state} 
                                        onChange={handleChange} 
                                        placeholder="Enter your state"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Pincode</label>
                                    <input 
                                        type="text" 
                                        name="pincode" 
                                        value={formData.pincode} 
                                        onChange={handleChange} 
                                        placeholder="Enter your pincode"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="button-group">
                            <button type="button" onClick={clearAll}>Clear All</button>
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

export default AccountPage;
