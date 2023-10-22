import { Provider } from 'react-redux';
import store from './component/redux/store';
import Gretting from './component/Gretting';
import './App.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Gretting />
        </div>
      </Provider>
    </div>
  );
}

export default App;
