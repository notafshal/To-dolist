import AddToDo from "../pages/add-todo/AddToDo";
import MainPage from "../pages/mainPage/MainPage";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
const Routes = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/add" component={AddToDo} exact />
    </>
  );
};
export default Routes;
