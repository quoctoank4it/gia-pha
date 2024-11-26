import "./App.css";
import FamilyTree from "./Components/FamilyTree";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonDetail from "./Components/PersonDetail";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          GIA PHẢ HỌ DIỆP
          <br />
          <span>Gìn giữ cho muôn đời sau</span>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<FamilyTree />} />
            <Route path="/:id" element={<PersonDetail />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
