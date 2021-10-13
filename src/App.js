import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Bodys from './components/Bodys';
import Footer from './components/Footer';
import Header from './components/Header';
import Lyrics from './components/Lyrics';
import Quote from './components/Quote';
import Tables from './components/Tables';
import {BrowserRouter as Router,
        Link, Route, Switch} from 'react-router-dom'
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route exact path = "/home">
        <Bodys/>
        <Quote/>
        <Footer/>
        </Route>
        <Route exact path = "/music">
        <Tables/>
        <Footer/>
        </Route>
        <Route exact path = "/about">
        <About/>
        <Footer/>
        </Route>
      
      
      <Footer/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
