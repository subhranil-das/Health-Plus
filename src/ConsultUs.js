import React, { useState } from 'react';
import styled from 'styled-components';

const ConsultUs = () => {
    const [showMedicalConditions, setShowMedicalConditions] = useState(false);
    const [showMedications, setShowMedications] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        exp_date: '',
        address: '',
        email: '',
        number: '',
        conditions: '',
        medical_conditions: '',
        medications: '',
        current_medications: '',
        reason: '',
        app_date: '',
        consultation_time: ''
    });

    const handleConditionsChange = (event) => {
        const conditionsValue = event.target.value;
        setShowMedicalConditions(conditionsValue === 'yes');
        setFormData(prevState => ({
            ...prevState,
            conditions: conditionsValue
        }));
    };

    const handleMedicationsChange = (event) => {
        const medicationsValue = event.target.value;
        setShowMedications(medicationsValue === 'yes');
        setFormData(prevState => ({
            ...prevState,
            medications: medicationsValue
        }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission with formData
        window.location.href = '/submit'; // Redirect to the submit folder (e.g., ThankYou page)
    };

    const Wrapper = styled.div`
        font-family: 'Arial', sans-serif;
        margin: 20px auto;
        padding: 20px;
        background-color: #e6f7ff; /* Background color of the surrounding area */
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    `;

    const FormContainer = styled.div`
        background-color: white; /* Form background color */
        padding: 30px;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        max-width: 800px;
        width: 100%;
    `;

    const FormHeading = styled.h1`
        text-align: center;
        color: #333;
        margin-bottom: 20px;
        font-size: 26px;
    `;

    const SectionHeading = styled.h2`
        color: #333;
        margin: 20px 0;
        font-size: 22px;
        border-bottom: 2px solid #4daea1;
        padding-bottom: 10px;
    `;

    const Input = styled.input`
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 6px;
        box-sizing: border-box;
        font-size: 16px;
        background-color: #f9f9f9;
        transition: border-color 0.3s;
        
        &:focus {
            border-color: #4daea1;
            outline: none;
        }
    `;

    const Textarea = styled.textarea`
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 6px;
        box-sizing: border-box;
        font-size: 16px;
        background-color: #f9f9f9;
        transition: border-color 0.3s;
        
        &:focus {
            border-color: #4daea1;
            outline: none;
        }
    `;

    const Fieldset = styled.fieldset`
        margin: 20px 0;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 6px;
    `;

    const Legend = styled.legend`
        padding: 0 10px;
        color: #333;
        font-size: 18px;
    `;

    const SubmitButton = styled.input`
        background-color: #4daea1;
        color: white;
        height: 50px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        width: 100%;
        margin-top: 20px;
        transition: background-color 0.3s, box-shadow 0.3s;
        font-size: 18px;

        &:hover {
            background-color: #1a504c;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
    `;

    const Select = styled.select`
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 6px;
        box-sizing: border-box;
        font-size: 16px;
        background-color: #f9f9f9;
        transition: border-color 0.3s;
        
        &:focus {
            border-color: #4daea1;
            outline: none;
        }
    `;

    const RadioGroup = styled.div`
        display: flex;
        margin: 10px 0;

        label {
            display: flex;
            align-items: center;
            margin-right: 20px;
            font-size: 16px;
        }
    `;

    return (
        <Wrapper>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <FormHeading>Consult Us</FormHeading>
                    <SectionHeading>Patient Details</SectionHeading>
                    <p>
                        Full Name:*
                        <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                    </p>
                    <p>
                        Date of Birth:*
                        <Input type="date" name="exp_date" value={formData.exp_date} onChange={handleChange} required />
                    </p>
                    <p>
                        Address:
                        <Textarea placeholder='Enter your address' name='address' value={formData.address} onChange={handleChange} rows="5"></Textarea>
                    </p>
                    <p>
                        Email:*
                        <Input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter your Email Id' required />
                    </p>
                    <p>
                        Phone Number:*
                        <Input type='number' name='number' value={formData.number} onChange={handleChange} placeholder='**********' required />
                    </p>
                    <Fieldset>
                        <Legend>Gender*</Legend>
                        <RadioGroup>
                            <label>
                                <Input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required />
                                Male
                            </label>
                            <label>
                                <Input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} required />
                                Female
                            </label>
                        </RadioGroup>
                    </Fieldset>
                    <SectionHeading>Medical History</SectionHeading>
                    <p>Do you have any existing medical conditions*</p>
                    <Fieldset>
                        <RadioGroup>
                            <label>
                                <Input type="radio" name="conditions" value="yes" checked={formData.conditions === 'yes'} onChange={handleConditionsChange} required />
                                Yes
                            </label>
                            <label>
                                <Input type="radio" name="conditions" value="no" checked={formData.conditions === 'no'} onChange={handleConditionsChange} required />
                                No
                            </label>
                        </RadioGroup>
                    </Fieldset>
                    {showMedicalConditions && (
                        <div>
                            <p>
                                Please describe your existing medical conditions:
                                <Textarea placeholder="Enter your medical conditions" name="medical_conditions" value={formData.medical_conditions} onChange={handleChange} rows="5"></Textarea>
                            </p>
                        </div>
                    )}
                    <p>Are you currently taking any medications*</p>
                    <Fieldset>
                        <RadioGroup>
                            <label>
                                <Input type="radio" name="medications" value="yes" checked={formData.medications === 'yes'} onChange={handleMedicationsChange} required />
                                Yes
                            </label>
                            <label>
                                <Input type="radio" name="medications" value="no" checked={formData.medications === 'no'} onChange={handleMedicationsChange} required />
                                No
                            </label>
                        </RadioGroup>
                    </Fieldset>
                    {showMedications && (
                        <div>
                            <p>
                                Please list the medications you are currently taking:
                                <Textarea placeholder="Enter your medications" name="current_medications" value={formData.current_medications} onChange={handleChange} rows="5"></Textarea>
                            </p>
                        </div>
                    )}
                    <p>
                        Reason for Consultation:
                        <Textarea placeholder='Briefly describe your health concern or reason for consultation:' name='reason' value={formData.reason} onChange={handleChange} rows="5"></Textarea>
                    </p>
                    <SectionHeading>Appointment Information</SectionHeading>
                    <p>
                        Preferred Date for Consultation:* <Input type='date' name='app_date' value={formData.app_date} onChange={handleChange} required />
                    </p>
                    <p>
                        Preferred Time for Consultation:*
                        <Select name='consultation_time' value={formData.consultation_time} onChange={handleChange} required>
                            <option value="">--Select Time--</option>
                            <option value="10:00 am">10:00 am</option>
                            <option value="11:00 am">11:00 am</option>
                            <option value="2:30 pm">2:30 pm</option>
                            <option value="4:00 pm">4:00 pm</option>
                        </Select>
                    </p>
                    <SubmitButton type="submit" value="Submit" />
                </form>
            </FormContainer>
        </Wrapper>
    );
};

export default ConsultUs;
