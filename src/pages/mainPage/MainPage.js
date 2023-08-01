import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AiFillEye } from "react-icons/ai";

import NavBar from "../NavBar";
const MainPage = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h3>Your to-do:</h3>
        {getTodo.map((el, index) => (
          <>
            <div className="single_todo">
              {el}
              <Link to={`/view/${index}`}>
                <AiFillEye size={"25px"} />
              </Link>
            </div>
          </>
        ))}
        {/* <div className="single_todo">Todo 1</div>
        <div className="single_todo">Todo 2</div> */}
      </div>
    </>
  );
};
export default MainPage;
