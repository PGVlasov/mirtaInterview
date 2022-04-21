import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { Loader } from "./Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadImages } from "../store/actions/image";

export const Image = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  const param = useParams();
  const imageId = parseInt(param.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const images = useSelector((state) => state.image.allImages);

  const image = useSelector((state) =>
    state.image.allImages.find((i) => i.id === imageId)
  );

  if (images.length === 0) {
    return <Loader />;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "18rem", marginTop: "2rem" }}>
        <Card.Img variant="top" src={image.url} />
        <Card.Body>
          <Card.Title>{image.title}</Card.Title>
        </Card.Body>
      </Card>
      <Button
        style={{ width: "18rem", marginTop: "2rem" }}
        onClick={clickHandler}
      >
        Назад
      </Button>
    </div>
  );
};
