import "./public.scss";
export const PublicHome = () => {
  return (
    <main
      id="intro"
      className="bg-image"
      style={{
        backgroundImage:
          "url(https://mdbootstrap.com/img/new/fluid/city/018.jpg)",
        height: "100vh",
      }}
    >
      <div className="container alert__public mt-5">
        {" "}
        <h3 className="position-relative text-center alert alert__public alert-danger container">
          There are currently no Todos available, more Todos will be added soon.
        </h3>
      </div>
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} />
    </main>
  );
};
