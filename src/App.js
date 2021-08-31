
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Rooms from './components/Rooms';
import SingleRoom from './components/SingleRoom';
import Error from './components/Error';

function App() {
  return (
   <>
   <Route path="/" component={Home} />
   <Route path="/rooms/" component={Rooms} />
   <Route path="/single-room" component={SingleRoom} />
   </>
  );
}

export default App;
