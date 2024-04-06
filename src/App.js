import { BrowserRouter as Router, Switch, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from "./components/Accueil";
import Navbar from "./components/Navbar";
import Activites from './components/Activites';
import Forum from './components/Forum';
import Connaitre from './components/Connaitre';
import Adherer from './components/Adherer';
import Promouvoir from "./components/Promouvoir";
import Apprendre from "./components/Apprendre";
import Enseigner from "./components/Enseigner";
import Divers from './components/Divers';



const router = createBrowserRouter([
  {
    path:'/',
    element: <><Navbar /><Accueil /></>
  },

  {
    path:'/Activites',
    element: <><Navbar /><Activites /></>
  },

  {
    path:'/Forum',
    element: <><Navbar /><Forum /></>
  },

  {
    path:'/Connaitre',
    element: <><Navbar /><Connaitre /></>
  },

  {
    path:'/Adherer',
    element: <><Navbar /><Adherer /></>
  },

  {
    path:'/Promouvoir',
    element: <><Navbar /><Promouvoir /></>
  },

  {
    path:'/Apprendre',
    element: <><Navbar /><Apprendre /></>
  },

  {
    path:'/Enseigner',
    element: <><Navbar /><Enseigner /></>
  },

  {
    path:'/Divers',
    element: <><Navbar /><Divers /></>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
