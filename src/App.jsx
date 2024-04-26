import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";

import About from "../src/pages/About"
import Contact from "../src/pages/Contact"
import Home from "../src/pages/Home"
import Projects from "../src/pages/Projects"

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About/>} />
                  <Route path='/projects' element={<Projects/>} />
                  <Route path='/contact' element={<Contact/>} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
