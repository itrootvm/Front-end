import axios from "axios";
import { useState, useEffect } from "react";
// import App from './App';

// import Table from "./Table";
// import "./Request.css";

function Request() {
const [report, setReport] = useState([]);
 const results = [];

    useEffect(() => {
        const headers = { //'Authorization': 'Bearer my-token',
        "Content-Type": "application/json", 
        "Content-Length": "<calculated when request is sent>"
      };  
        fetch('http://localhost:3000/send-report', { 
          method :"GET",
          headers })
            .then(response => response.json())
            .then(data => setReport(data));
            alert(report);
            report.forEach((reports, index) => {
            results.push(
                <div>reports</div>
              )
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    return (
        <div>Request
            {report?.id}
        </div>
    );


}
export default Request;