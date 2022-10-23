import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Route } from './Layout/Route';

function App() {
  return (
    <div className="App">
     <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App;
