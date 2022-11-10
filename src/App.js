import logo from './logo.svg';
import './App.css';
import { routes } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
