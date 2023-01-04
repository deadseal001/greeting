import './App.css';
import Button from './components/button';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <h1>My firest react app </h1>
      <Button/>
      <Profile firstName='Nathan' title ='ceo' imgUrl='http://via.placeholder.com/200'/>
    </div>
  );
}

export default App;
