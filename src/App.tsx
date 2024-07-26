import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import MyContextProvider from "./context/MyContextProvider";
import { Toaster } from "react-hot-toast";
import "./App.css";

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
