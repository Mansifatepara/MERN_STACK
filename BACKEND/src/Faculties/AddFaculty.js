import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddFaculty() {
    const [formData, setFormData] = useState({
        id : 0,
        name: '',
        email: '',
        mobile: 0,
        experience:''
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
            const response = await fetch('http://localhost:5000/faculties', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id : formData.id,
                    name : formData.name,
                    email : formData.email,
                    mobile : formData.mobile,
                    experience : formData.experience
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Faculty added successfully!');
                setFormData({
                    id:0,
                    name: '',
                    email: '',
                    mobile: 0,
                    experience : ''
                });
                navigate('/faculties');  // Redirect to student list
            } else {
                alert('Failed to add Faculty: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while registering the Faculty.');
        }
    };

    return (
        <form className="row g-3 p-3" style={{ maxWidth: "600px", margin: "auto", border: "1px solid #ccc", borderRadius: "8px", padding: "20px" }} onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">Faculty Registration Form</h3>
            <div className="col-md-12">
                <label htmlFor="id" className="form-label">Faculty's ID</label>
                <input type="number" className="form-control" id="id" value={formData.id} onChange={handleChange} required />
            </div>
            <div className="col-md-12">
                <label htmlFor="name" className="form-label">Faculty's Name</label>
                <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="col-md-12">
                <label htmlFor="name" className="form-label">Faculty's email</label>
                <input type="text" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="col-md-12">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="number" className="form-control" id="mobile" value={formData.mobile} onChange={handleChange}s required />
            </div>
            <div className="col-md-6">
                <label htmlFor="experience" className="form-label">Faculty's Experience</label>
                <input type="number" className="form-control" id="experience" value={formData.experience} onChange={handleChange} required />
            </div>
            <div className="col text-center mt-4">
                <button className="btn btn-outline-primary">SUBMIT</button>
            </div>
        </form>
    );
}

export default AddFaculty;