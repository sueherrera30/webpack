import React,{ useState } from 'react';
import data from './data.json';
import Loader from './loader';

function App() {
  const [ loaderList, setLoaderList ] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
}
  return (
    <div>
      {/* <h4>Que bonito combinan react y webpack, ya anden </h4> */}
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