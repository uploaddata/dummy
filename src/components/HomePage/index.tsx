"use client";

import axios from "axios";
import React, { useEffect } from "react";

const HomePage = () => {
  const callApi = async () => {
    try {
      const response = await axios.get("/api");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  useEffect(() => {
    callApi();
  });
  return <div>HomePage</div>;
};

export default HomePage;
