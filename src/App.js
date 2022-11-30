import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route/Route';



function App() {
  
  return (
        <div className="App" style={{maxWidth: "1024px"}}>
          <RouterProvider router={router}></RouterProvider>
          <Toaster />
        </div>
  );
}

export default App;
