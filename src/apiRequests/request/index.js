import axios from "axios";
import { useState, useEffect } from "react";

function Request() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/send-report")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return null;
}

export default Request;