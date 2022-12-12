import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TaskDetails from "./components/TaskDetails";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:taskId" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
}
export default App;