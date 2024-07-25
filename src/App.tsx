import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import MyContextProvider from "./context/MyContextProvider";
import "./App.css";

function App() {
  return (
    <section>
      <BrowserRouter>
        <MyContextProvider>
          <AppRouter />
        </MyContextProvider>
      </BrowserRouter>
    </section>
  );
}

export default App;
