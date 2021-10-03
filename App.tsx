import React from 'react';
import Navigation from './src/sreeens/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
export default App;
