import { Routes, Route } from "react-router-dom";
import Nav from './component/Nav'
import HomePage from './component/page/Home';
import ContactPage from "./component/page/Contact";

import './App.css'

function App() {
  

  return (
    <div className={"app"}>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={} /> */}
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
