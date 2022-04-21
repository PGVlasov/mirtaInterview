import { ImageList } from "../components/ImageList";

export const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Main Page</h1>
      <ImageList />
    </div>
  );
};
