import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';
import About from './About';
import PageNotFound from './PageNotFound';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App p-2">
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/create" Component={Create}></Route>
          <Route exact path="/read/:id" Component={Read}></Route>
          <Route exact path="/edit/:id" Component={Update}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/*" Component={PageNotFound}></Route>
        </Routes>
        <Footer/>   
    </div>
    </Router>
  );
}

export default App;
