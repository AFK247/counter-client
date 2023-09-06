import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { savedCount } from "../redux/counterSlice";
import { toast } from "react-hot-toast";
import Loader from "./Loader";

const CounterModal = ({ setShow, show }) => {
  const dispatch = useDispatch();

  const [countVal, setCountVal] = useState(0);
  const [loading, setLoading] = useState(false);

  const storeCount = useSelector((state) => state.counter.countValue);

  //Api calls and initial state set
  useEffect(() => {
    //Counter value from redux store
    if (storeCount && show) setCountVal(storeCount);
    //Getting counter value from API call
    else if (show) {
      fetch("http://localhost:5000/counterApi", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setCountVal(Number(data[0].value)));
    }
  }, [show]);

  //Submit Function
  const submitHandler = () => {
    //After submit redux store is updated
    dispatch(savedCount(countVal));

    //After submit update API is called
    setLoading(true);
    fetch(`http://localhost:5000/updateCounter/${countVal}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) toast.success("Update Successful");
        setLoading(false);
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        centered
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
          {loading ? (
            <Loader />
          ) : (
            <Button variant="primary" onClick={submitHandler}>
              Save
            </Button>
          )}

          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CounterModal;
