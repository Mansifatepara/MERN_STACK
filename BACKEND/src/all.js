import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function GetAllPatient() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiurl = "http://localhost:5000/patients";
        fetch(apiurl)
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    return (
        <>
            <h1 className='text-center'>Our Patient's</h1>
           

            <div className="table-responsive " >
                <table className="table table-bordered m-3" style={{width:"1400px",height:"auto"}}>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Name</th>
                            <th>Phonenumber</th>
                            <th>Consulting Doctor</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((Pat) => (
                            <tr key={Pat.PatientID}>
                                <td>{Pat.PatientID}</td>
                                <td>{Pat.PatientName}</td>
                                <td>{Pat.Phonenumber}</td>
                                <td>{Pat.Consult}</td>
                                <td>
                                    <Link className="btn btn-info" to={/patients/${Pat.PatientID}}>
                                        Read More
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link className="btn btn-primary m-4" to="/Form" style={{ height: "40px", width: "150px" }} >Add Patient</Link>
        </>
    );
}

export default GetAllPatient;