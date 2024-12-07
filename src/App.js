import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Importing components for different routes
import Todo from "./Todo";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Todo</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes */}
        <Routes>
          <Route path="/" exact element={<Todo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
