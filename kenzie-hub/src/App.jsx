import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routers/routerMain";
import "react-toastify/dist/ReactToastify.css";
import "../src/style/index.scss";

function App() {
  return (
    <>
      <RouterMain />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        toastClassName={({ type }) =>
          type === "success" ? "toast-success" : "toast-error"
        }
      />
    </>
  )
}

export default App
