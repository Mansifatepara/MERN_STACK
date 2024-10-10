import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
    const [formData, setFormData] = useState({
        id : 0,
        name: '',
        email: '',
        mobile: 0,
        standard: 0,
        class: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await fetch('http://localhost:4000/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id : formData.id,
                    name : formData.name,
                    email : formData.email,
                    mobile : formData.mobile,
                    standard : formData.standard,
                    class : formData.class
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Student added successfully!');
                setFormData({
                    id:0,
                    name: '',
                    email: '',
                    mobile: 0,
                    standard: 0,
                    class: ''
                });
                navigate('/students');  // Redirect to student list
            } else {
                alert('Failed to add student: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while registering the student.');
        }
    };

    return (
        <form className="row g-3 p-3" style={{ maxWidth: "600px", margin: "auto", border: "1px solid #ccc", borderRadius: "8px", padding: "20px" }} onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">Student Registration Form</h3>
            <div className="col-md-12">
                <label htmlFor="id" className="form-label">Student's ID</label>
                <input type="number" className="form-control" id="id" value={formData.id} onChange={handleChange} required />
            </div>
            <div className="col-md-12">
                <label htmlFor="name" className="form-label">Student's Name</label>
                <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="col-md-12">
                <label htmlFor="name" className="form-label">Student's email</label>
                <input type="text" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="col-md-12">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="number" className="form-control" id="mobile" value={formData.mobile} onChange={handleChange}s required />
            </div>
            <div className="col-md-6">
                <label htmlFor="standard" className="form-label">Student's Standard</label>
                <input type="number" className="form-control" id="standard" value={formData.standard} onChange={handleChange} required />
            </div>
            <div className="col-md-12">
                <label htmlFor="class" className="form-label">Student's Class</label>
                <input type="text" className="form-control" id="class" value={formData.class} onChange={handleChange} required />
            </div>
            <div className="col text-center mt-4">
                <button className="btn btn-outline-primary">SUBMIT</button>
            </div>
        </form>
    );
}

export default AddStudent;