import "./App.css";
import { AddStudent } from "./pages/AddStudent";
import AjaxToReact from "./pages/AjaxtoReact";
import EditForm from "./pages/OpenEditForm";
import StudentList from "./pages/StudentList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentList />,
  },

  {
    path: "/student-add",
    element: <AddStudent />,
  },
  {
    path: "/student-edit/:id",
    element: <EditForm />,
  },
  {
    path: "/ajax-react",
    element: <AjaxToReact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
