import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from  './style';
import routes from './routes'
import { renderRoutes } from "react-router-config";
import {HashRouter} from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './store'

function App() {
  return (
    // <Provider store={store}>
      <HashRouter>
        <IconStyle></IconStyle>
        <GlobalStyle></GlobalStyle>
        {renderRoutes(routes)}
      </HashRouter>
    // </Provider> 
  );
}

export default App;
