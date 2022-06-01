import './App.css';
import Map from './components/Map';


function App() {
  // const [start, setStart] = useState(false)
  
  return (
    <div className="App shadow-lg border-2">
      {/* {start ? <Map /> : <Init start={start} setStart={setStart} />} */}
      <Map />
    </div>
  );
}

export default App;
