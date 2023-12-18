import './App.css';
import  City  from './assets/city.jpg';
import { Challenge } from './components/Button/Challenge';
import { ListRender } from './components/ListRender/ListRender';
import { ManageData } from './components/ManageData/ManageData';

function App() {
  return (

    <div className="App">
      <div className='paisagem'>
        <img src='/img1.jpg' alt='paisagem' />
      </div>
      <div className='cyberpunk'>
        <img src={City} alt='cyberpunk' />
      </div>
      <Challenge />
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
