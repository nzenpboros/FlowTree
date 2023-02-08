import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Details from "./pages/Detail";
import Main from "./pages/Main";
import "./globalStyles/GlobalStyles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/task/:taskId" element={<Details />} /> */}
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;