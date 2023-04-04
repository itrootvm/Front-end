import axios from "axios";
import { useState, useEffect } from "react";
// import App from './App';

// import Table from "./Table";
// import "./Request.css";

// function Request() {
// const [report, setReport] = useState([]);
//  const results = [];
//  ;



//     useEffect(() => {
//       let headers = new Headers();

//   headers.append('Content-Type', 'application/json');
//   headers.append('Accept', 'application/json');

//   headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
//   headers.append('Access-Control-Allow-Credentials', 'true');

//   headers.append('GET', 'POST', 'OPTIONS')
//       //   const headers = { //'Authorization': 'Bearer my-token',
//       //   "Content-Type": "application/json", 
//       //   "Content-Length": "<calculated when request is sent>"
//       // };
//     //     fetch('http://localhost:8000/send-report', { 
//     //       method : "GET",
//     //       mode: 'no-cors',
//     //       headers: headers })
//     //         .then(response => response.json())
//     //         .then(data => setReport(data));
//     //         // alert(report);
//     //         // report.forEach((reports, index) => {
//     //         // results.push(
//     //         //     <div>reports</div>
//     //         //   )
//     //         // }); 
//     //         console.log(report);
//     // });
//     const rq = fetch("http://localhost:8000/send-report")
//     console.log(rq)

//     return (
//         <div>Request
//             {report?.id}
//         </div>
//     );
//     // fetch('http://localhost:8000/send-report', {mode: 'no-cors'}).then(function (response) {
//     //   // The API call was successful!
//     //   return response.json();
//     // }).then(function (data) {
//     //   // This is the JSON from our response
//     //   console.log(data);
//     // }).catch(function (error) {
//     //   // There was an error
//     //   console.warn(error);
//     // });
    

// }
function Request() {
  // const rq = fetch("http://localhost:8000/send-report",{
  //   mode: "no-cors",
  //   method : "GET",
  // }
  // )
  // rq.then(p => p.json())
  //   console.log(rq)
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJ1c2VySWQiOnsiaWQiOjEyLCJuYW1lIjoiYWFhQGFhYS5hYSIsImVtYWlsIjoiYWFhQGFhYS5hYSIsImVtYWlsX3ZlcmlmaWVkX2F0IjpudWxsLCJjcmVhdGVkX2F0IjpudWxsLCJ1cGRhdGVkX2F0IjpudWxsfSwidG9rZW5DcmVhdGVkQXQiOjE2ODAyOTE0OTcsImV4cGlyZXMiOjE2ODAzNzc4OTd9");
myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6ImtuWTQ4TkV2RkRQTEJtdWdpRGtkNlE9PSIsInZhbHVlIjoiaHRSaUJYTVVMK1NPUENnWDE1YWczcEltMHc2VTdhakZuYXRCUVhQdjBpOEc0NjFOODVtLzhZZDlPYTBTNXJvbHRydWI1OW91aHUvT25LbjR0cnBoUnA3UFBNM2pvYkR0RG4vRzZBZGRXN1JkYlcrYXZqZWsxVndmK2hDS01ldS8iLCJtYWMiOiJjYWU0MDRjY2UxZmEwZGNkNTQ0ZTdmMzg0NDgwNzllYTAwM2I2YTBmOGYyZDJlNmY1MGYyZTM2NWE1YTBjZGM1IiwidGFnIjoiIn0%3D; mrphr_session=eyJpdiI6IjVTb2o2SUl2anU2NDV2aXNxNW1KY3c9PSIsInZhbHVlIjoiOHhNOHZLMzY3NERuYXJQWFJKZktsS2lIY0JTSkhBazc5L2MrNDg1bExXSGY2SmRKS1ZmbDRrZTU5bGtjUUEvbmNLSC9vQmZDTXdHRWR0V3JWUmtHODB1UXVlUmx1aWlWQk9Mak9XV3FQRWVJdnp4OTIzWHplNk9kbFVTb0hmSjIiLCJtYWMiOiI0NGMyNGIzMWU3YTc1ZjljNDI2NzNjZDMxM2VjNmUyNzQxZGFhYjlmZTJkYzkzYTJhOWQxNjg5OGVhOTNkNWI1IiwidGFnIjoiIn0%3D");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  mode: "no-cors",
  redirect: 'follow'
};

fetch("http://localhost:8000/send-report", requestOptions)
  .then(response => response.text())
  .then(result => 
    
    
    
    console.log(result))
  .catch(error => console.log('error', error));
  


  // fetch('http://localhost:8000/send-report', {method : "GET", mode: 'no-cors'}).then(function (response) {
  //     // The API call was successful!
  //     return response.json();
  //   }).then(function (data) {
  //     // This is the JSON from our response
  //     console.log(data);
  //   }).catch(function (error) {
  //     // There was an error
  //     console.warn(error);
  //   });

//   const onFinish = (dispatch) => {
//   fetch('http://localhost:8000/send-report', {
//   mode: "no-cors",
//   method: "GET",
//   headers: {
//     "Accept": "application/json"
//   }
// })
// .then(response => response.json())
// .then((response) => {
//   console.log(response.body);
//   return dispatch({
//     type: "GET_CALL",
//     response: response.body
//   });
// })
// .catch(error => { console.log('request failed', error); }); // Syntax error: unexpected end of input

// }
}
export default Request;