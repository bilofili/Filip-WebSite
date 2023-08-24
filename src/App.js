import { Contact } from "./Contact/Contact";
import Prom from "./Prom";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Prom />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  </Router>
}

export default App;