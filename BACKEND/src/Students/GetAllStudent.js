import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function GetAllStudent() {
    const [data, setData] = useState([]);
    const Navigate = useNavigate();


    useEffect(() => {
        const apiUrl = "http://localhost:4000/students";
        fetch(apiUrl)
        .then(res => res.json())
        .then(res => setData(res));
    }, []);
    

    const formatedStudent = data.map((stu) => {
        return (
            <>
                <tr>
                    <td></td>
                    <td></td>
                    <td>{stu.name}</td>
                    <td>{stu.id}</td>
                    <td><Link className="btn btn-info" to={"/students/" + stu.id}>READ MORE</Link></td>
                </tr>
            </>
        )
    });

    return (
       <>
         <table className="table">
            {formatedStudent}
        </table>
        <button onClick={()=>{Navigate("/AddStudent/")}} className="btn btn-info" style={{width:"200px"}}>ADD NEW STUDENT</button>
       </>
    );
}

export default GetAllStudent;