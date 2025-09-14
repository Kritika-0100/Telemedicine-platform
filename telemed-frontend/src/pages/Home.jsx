import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log("✅ Home component loaded");
  }, []);

  return <h1 style={{ color: "blue" }}>Welcome to Telemed Platform</h1>;
}

export default Home;
