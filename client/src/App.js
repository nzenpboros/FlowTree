import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Details from "./pages/Detail";
import Main from "./pages/Main";
import "./globalStyles/GlobalStyles.css";

//temporary taskDetails route used to work on UI
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="/task/:taskId" element={<Details />} /> */}
        <Route path="/task/new" element={<Details />} /> 
      </Routes>
    </Router>
  );
}

export default App;