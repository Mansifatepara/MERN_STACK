import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {

    const [data, setData] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        const apiUrl = "http://localhost:4000/students/" + id;
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res))
    } , [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">Enter student name : </div>
                    <div className="col">
                        <input type="text" value={data.name} onChange={(e) => {
                            setData({ ...data, name: e.target.value })
                        }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">Enter student email : </div>
                    <div className="col">
                        <input type="text" value={data.email} onChange={(e) => {
                            setData({ ...data, email: e.target.value })
                        }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Enter student mobileno : </div>
                    <div className="col">
                        <input type="number" value={data.mobile} onChange={(e) => {
                            setData({ ...data, mobile: e.target.mobile })
                        }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Enter student standard : </div>
                    <div className="col">
                        <input type="number" value={data.standard} onChange={(e) => {
                            setData({ ...data, standard: e.target.value })
                        }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Enter student class : </div>
                    <div className="col">
                        <input type="text" value={data.class} onChange={(e) => {
                            setData({ ...data, class: e.target.value })
                        }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Enter student id : </div>
                    <div className="col">
                        <input type="number" value={data.id} onChange={(e) => {
                            setData({ ...data, id: e.target.value })
                        }} />
                    </div>
                </div>

                <div className="">
                    <button className="btn" onClick={() => {
                        const apiUrl = "http://localhost:4000/students" + id;
                        fetch(apiUrl, {
                            method: "patch",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(res => res.json())
                            .then(res => {
                                navigate("/students")
                            })
                    }}>Edit</button>
                </div>
            </div>
        </>
    )
}

export default EditStudent;