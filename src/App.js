import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Quote from './components/Quote';
import Tables from './components/Tables';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Quote/>
      <Tables/>
    </div>
  );
}

export default App;
