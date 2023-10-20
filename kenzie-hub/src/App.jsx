import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routers/routerMain";
import "react-toastify/dist/ReactToastify.css";
import "../src/style/index.scss";
import { useContext } from "react";
import { userContext } from "./providers/userContext";

function App() {
  const { loading } = useContext(userContext);
  return (
    <>
      {
        loading ? <div>Carregando...</div> :
          <RouterMain />
      }

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
