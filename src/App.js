import Accueil from "./components/Accueil";
import Navbar from "./components/Navbar";
import Activite from './Activite'
import Activites from './components/Activites'
import { BrowserRouter as Router, Switch, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <><Navbar /><Accueil /></>
  },

  {
    path:'/Activite',
    element: <><Navbar /><Activites /></>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
