import './App.css';
import Index from './pages/index';
import Projects from "./pages/projects";
import Topnav from './components/topnav.component';
import NotFound from './pages/404';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  document.title = "Tech for everyone, not just one group • MML Tech LLC";
  return (
    <div className="App">
      
      <div>
        <nav>
          <Topnav />
        </nav>
        <main>
          <BrowserRouter>
            <Routes>
              {/**
               * all of the routes for the site go below
               */}
              <Route path='*' Component={NotFound} />
              <Route path="/" Component={Index} />
              <Route path="/index" Component={Index} />
              <Route path="/projects" Component={Projects} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </div>
  );
}

export default App;
