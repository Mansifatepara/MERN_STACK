import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



function GetFacultyByID() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const apiUrl = "http://localhost:5000/faculties/" + id;
        fetch(apiUrl, { method: "get" })
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    return (
        <>
            <table>
                <Link to='/faculties' className="btn btn-info">Back</Link>
                <tr>
                    <td>Faculty id : </td>
                    <td>{data.id}</td>
                </tr>
                <tr>
                    <td>Faculty Name :</td>
                    <td>{data.name}</td>
                </tr>
                <tr>
                    <td>Faculty email : </td>
                    <td>{data.email}</td>
                </tr>
                <tr>
                    <td>Faculty mobileno : </td>
                    <td>{data.mobile}</td>
                </tr>
                <tr>
                    <td>Faculty Experience : </td>
                    <td>{data.experience}</td>
                </tr>


            </table>

            <button className="btn btn-danger" style={{ width: "100px" }} onClick={() => {
                const apiUrl = "http://localhost:5000/faculties/" + id;
                fetch(apiUrl, { method: "delete" })
                    .then(res => res.json(res))
                    .then(res => {
                        navigate("/faculties")
                    })

            }}>Delete</button>
        </>
    )

}

export default GetFacultyByID;




//                     <td>name</td>
//                     <td>email</td>
//                     <td>mobile</td>
//                     <td>experience</td>