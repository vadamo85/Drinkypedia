import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./pages/home";
import { CocktailDetail } from "./pages/cocktailDetail" 
import { CocktailList } from "./pages/CocktailList";


import 'bootstrap/dist/css/bootstrap.min.css';





export const App = ()  =>{
  return (
  <BrowserRouter>
 
  <Routes>
    <Route path = "/" element = { <Home/>} />
    <Route path = "/cocktails" element = { <CocktailList/>}/>
    <Route path = "/cocktails/:cocktailid" element = { <CocktailDetail/>}/>
  </Routes>
  </BrowserRouter>
)
 }