import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
