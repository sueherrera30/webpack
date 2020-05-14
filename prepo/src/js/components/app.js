import React,{ useState } from 'react';
import data from './data.json';
import Loader from './loader';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

function App() {
  const [ loaderList, setLoaderList ] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
}
  return (
    <div>
      <h4>Que bonito combinan react y webpack, ya anden </h4>
      <p className="sass">
        esto es sass
      </p>
      <p className="less">
        esto es less
      </p>
      <p className="stylus">
        esto es stylus
      </p>
      <p className="post-css">
        esto es postcss
      </p>
      <div>
        <img alt='logo' src={logo} width={300}/>
        <video src={video} width={360} controls poster={logo}/>
      </div>
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