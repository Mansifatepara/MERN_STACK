import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function GetAllFaculty(){
    const [data,setData] = useState([]);
    const Navigate = useNavigate();

    useEffect(()=>{
        const apiUrl = "http://localhost:5000/faculties";
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res))    
    },[])

    const formatedFaculty = data.map((fac)=>{
        return(
            <>
                <tr>
                    <td></td>
                    <td></td>
                    <td>{fac.id}</td>
                    <td>{fac.name}</td>
                    <td><Link className="btn btn-info" to={"/faculties/"+fac.id}>READ MORE</Link></td>
                </tr>
            </>
        )
    });

    return(
        <>
            <table className="table">
            {formatedFaculty}
        </table>
        <button onClick={()=>{Navigate("/AddFaculty/")}} className="btn btn-info" style={{width:"200px"}}>ADD NEW FACULTY</button>
        </>
    )
}

export default GetAllFaculty;