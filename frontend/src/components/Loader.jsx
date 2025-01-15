import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner 
      animation="grow"
      role="status"
      variant="info"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
        marginTop: "20px",
      }}
    >
    </Spinner>
  );
};

export default Loader;
