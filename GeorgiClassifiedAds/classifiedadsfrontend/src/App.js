import './App.css';
import Appbar from './components/Appbar';
import Student from './components/Student';
import ClassifiedAds from './components/ClassifiedAds';

function App() {
  return (
    <div className="App">     
      <Appbar/>
      <ClassifiedAds/>
      <Student />
    </div>
  );
}

export default App;
