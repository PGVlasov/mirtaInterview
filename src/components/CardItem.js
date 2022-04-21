import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const CardItem = ({ image }) => {
  const [mouseOn, setMouseOn] = useState(false);
  const navigate = useNavigate();

  const hoverHandler = () => {
    setMouseOn(true);
  };

  const outHandler = () => {
    setMouseOn(false);
  };

  const clickHandler = () => {
    console.log("Cliced ", image.id);
    navigate(`/image/${image.id}`);
  };
  if (mouseOn) {
    return (
      <Card
        style={{
          width: "10rem",
          marginTop: "1rem",
        }}
        onMouseOver={hoverHandler}
        onMouseLeave={outHandler}
      >
        <Card.Img variant="top" src={image.url} />
        <Button onClick={clickHandler}>Подробнее</Button>
      </Card>
    );
  }
  return (
    <Card
      style={{
        width: "10rem",
        marginTop: "1rem",
      }}
      onMouseOver={hoverHandler}
      onMouseLeave={outHandler}
    >
      <Card.Img variant="top" src={image.url} />
    </Card>
  );
};
