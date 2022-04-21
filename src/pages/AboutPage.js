import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const AboutPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>About Page</h1>
      <Button
        style={{ width: "18rem", marginTop: "2rem" }}
        onClick={clickHandler}
      >
        На Главную
      </Button>
    </div>
  );
};
