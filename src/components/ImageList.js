import { useEffect } from "react";
import { CardItem } from "./CardItem";
import { Loader } from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { loadImages } from "../store/actions/image";

export const ImageList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const images = useSelector((state) => state.image.allImages);

  if (images.length === 0) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>Category 1</h3>
            {images.map((image) => {
              if (image.id < 7) {
                return (
                  <div key={image.id}>
                    <CardItem image={image} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="col">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>Category 2</h3>
            {images.map((image) => {
              if (image.id > 6 && image.id < 13) {
                return (
                  <div key={image.id}>
                    <CardItem image={image} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="col">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>Category 3</h3>
            {images.map((image) => {
              if (image.id > 12 && image.id < 19) {
                return (
                  <div key={image.id}>
                    <CardItem image={image} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="col">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>Category 4</h3>
            {images.map((image) => {
              if (image.id > 18 && image.id < 25) {
                return (
                  <div key={image.id}>
                    <CardItem image={image} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
