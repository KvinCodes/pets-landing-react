import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterApp from './components/Router';

function App() {
  return (
    <div className="bg-lavenders">
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
