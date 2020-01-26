import React from 'react';
import Header from './componentes/Header';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
      </React.Fragment>
    </Provider>
  );
}

export default App;
