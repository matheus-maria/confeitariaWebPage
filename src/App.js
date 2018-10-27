import React from 'react';
import Routes from './routes';
import Header from './components/Header/index';

import './styles.css';

const App = () => (
  <div className="App">
    <Header/>
    <Routes/>
  </div>
);

export default App;

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}
 */
