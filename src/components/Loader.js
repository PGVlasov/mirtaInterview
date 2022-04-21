import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{ width: "30rem", height: "30rem", marginTop: "2rem" }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
