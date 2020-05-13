import '../css/index.css';
import text from './text';

text();

if(module.hot) {
  // si cambia algo en mi archivo importado entonces 
  // ejecuta la funcion
  module.hot.accept('./text.js', function() {
    console.log('recargando 2.0 on fire')
    text();
  })
}

console.log('hola mundo desde webpack home rosa');
