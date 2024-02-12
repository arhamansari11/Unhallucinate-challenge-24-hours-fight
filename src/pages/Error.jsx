import React from "react";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>Oops! Something went wrong.</h1>
        <p style={styles.message}>
          Error 404 Page not Found. Please try again later.
        </p>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1rem",
    textAlign: "center",
  },
};

export default Error;
