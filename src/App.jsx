import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";  
import './App.css'; 
import { Toaster } from "react-hot-toast";
import { BookingProvider } from './Context/BookingContext.jsx';  

const App = () => {
  return (
    <BookingProvider>
      <div>
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </BookingProvider>
  );
}

export default App;
