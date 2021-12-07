import logo from './logo.svg';
import './App.css';
import "./config/firebaseconfig/firebaseconfig"
import Routing from './config/routes/index';
import { Provider } from 'react-redux';
import store from './config/firebaseconfig/store';
import 'antd/dist/antd.min.css';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Routing/>
      </Provider>
    </div>
  );
}

export default App;
