
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Route } from './Layout/Route';

function App() {
  return (
    <div className="">
     <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App;
