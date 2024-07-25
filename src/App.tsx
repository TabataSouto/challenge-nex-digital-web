import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";

function App() {
  return <section>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </section>;
}

export default App;
