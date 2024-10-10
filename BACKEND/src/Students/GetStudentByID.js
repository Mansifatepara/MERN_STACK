import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



function GetStudentByID() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const Navigate = useNavigate();
    useEffect(() => {
        const apiUrl = "http://localhost:4000/students/" + id;
        fetch(apiUrl, { method: "get" })
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    return (
        <>
            <table>
                <Link to='/students' className="btn btn-info">Back</Link>
                <tr>
                    <td>Student name : </td>
                    <td>{data.name}</td>
                </tr>
                <tr>
                    <td>Student id :</td>
                    <td>{data.id}</td>
                </tr>
                <tr>
                    <td>Student email : </td>
                    <td>{data.email}</td>
                </tr>
                <tr>
                    <td>Student mobileno : </td>
                    <td>{data.mobile}</td>
                </tr>
                <tr>
                    <td>Student std. : </td>
                    <td>{data.standard}</td>
                </tr>
                <tr>
                    <td>Student class : </td>
                    <td>{data.class}</td>
                </tr>


            </table>

            <div>
                <button className="btn btn-danger" style={{ width: "100px" }} onClick={() => {
                    const apiUrl = "http://localhost:4000/students/" + id;
                    fetch(apiUrl, { method: "delete" })
                        .then(res => res.json())
                        .then(res => {
                            navigate("/students")
                        })

                }}>Delete</button>
                <button className="btn btn-primary" onClick={()=>{Navigate("/EditStudent/")}} style={{width:"100px"}}>EDIT</button>
            </div>
        </>
    )

}

export default GetStudentByID;