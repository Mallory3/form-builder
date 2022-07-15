import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { APIProvider } from "./lib/context/APIContext"
import Home from "./components/pages/Home"
import Dashboard from "./components/pages/Dashboard"
import NotFound from "./components/pages/NotFound"
// IMPORT SCSS MODULES
import './App.css';


function App() {
  return (
    <APIProvider>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* TODO: authenticate dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </main>
    </APIProvider>
  );
}

export default App;
