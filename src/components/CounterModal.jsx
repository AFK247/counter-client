import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux/es/exports";

const CounterModal = ({ setShow, show }) => {
  const handleModalClose = () => setShow(false);
  const [countVal, setCountVal] = useState(0);

  const storeCount = useSelector((state) => state.counter.count);
  console.log(storeCount);

  return (
    <>
      <Modal
        show={show}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter your Value</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <AiFillMinusCircle
              style={{ cursor: "pointer" }}
              size={30}
              onClick={() => setCountVal(countVal - 1)}
            />
            <span className="mx-4 text-primary fw-bolder fs-5">{countVal}</span>
            <AiFillPlusCircle
              style={{ cursor: "pointer" }}
              size={30}
              onClick={() => setCountVal(countVal + 1)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Save</Button>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CounterModal;
