import NavBar from "../NavBar";
import { useHistory } from "react-router-dom";

const ViewPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };
  return (
    <>
      <NavBar />
      <button onClick={goBack} style={{ background: "#e7e7e7, color:#666" }}>
        Back
      </button>
    </>
  );
};
export default ViewPage;
