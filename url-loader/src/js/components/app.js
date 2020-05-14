import React,{ useState } from 'react';
import data from './data.json';
import Loader from './loader';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

function App() {
  const [ loaderList, setLoaderList ] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
}
  return (
    <div>
      <h4>Que bonito combinan react y webpack, ya anden </h4>
      <p>
        <img alt='logo' src={logo} width={300}/>
        <video src={video} width={360} controls poster={logo}/>
      </p>
      <ul>
        {
          loaderList.map(item => <Loader {...item} />)
      }
      <button onClick={handleClick}>¿Qué has aprendido vato?</button>
      </ul>
    </div>
  )
}
export default App;