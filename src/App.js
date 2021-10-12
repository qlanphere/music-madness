import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Lyrics from './components/Lyrics';
import Quote from './components/Quote';
import Tables from './components/Tables';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Quote/>
      <Tables/>
      <Footer/>
    </div>
  );
}

export default App;
