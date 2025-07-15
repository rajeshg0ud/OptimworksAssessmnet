import { Provider } from 'react-redux';
import './App.css';
import File from './File';
import Header from './Header';
import store from './Store';

 
function App() {

  return (
   <Provider store={store} >
     <div className="App">
      <Header />
      <File />
    </div>
   </Provider>
  );
}

export default App;
