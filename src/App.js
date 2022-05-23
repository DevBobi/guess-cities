import { useState } from 'react';
import './App.css';
import Init from './components/Init';
import Map from './components/Map';
import './utils/measure'


function App() {
  const [start, setStart] = useState(false)
  console.log('start', start)
  return (
    <div className="App shadow-lg border-2">
      {start ? <Map /> : <Init start={start} setStart={setStart} />}
    </div>
  );
}

export default App;
