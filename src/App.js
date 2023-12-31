import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import CounterModal from "./components/CounterModal";
import { Toaster } from "react-hot-toast";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{ height: "600px" }}
      className="container d-flex justify-content-center align-items-center"
    >
      <Button variant="primary" onClick={() => setShow(true)}>
        Click Me
      </Button>
      <CounterModal setShow={setShow} show={show} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
