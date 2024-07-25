import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import MyContextProvider from "./context/MyContextProvider";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <section>
      <BrowserRouter>
        <MyContextProvider>
          <Toaster />
          <AppRouter />
        </MyContextProvider>
      </BrowserRouter>
    </section>
  );
}

export default App;
