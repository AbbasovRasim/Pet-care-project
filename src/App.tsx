import { Route, Routes } from "react-router";
import Start from "./pages/start/Start";

function App() {
  return (
    <Routes>
      <Route path="/start" element={<Start />} />
    </Routes>
  );
}

export default App;
