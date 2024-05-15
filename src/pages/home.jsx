import { Link } from "react-router-dom";
import { Carrousel } from "../components/carrousel";

import { Header } from '../components/header'
import { Footer } from '../components/footer'


import '../css/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export const Home = () => {
  return (
    <>
      <Header />
      <Carrousel />
      <div className="link"><Link to={`/cocktails`} className="btn btn-outline-light btn-lg boton">
        <i>Discover new cocktails!</i>

      </Link>
      </div>
      <Footer />
    </>
  );
};
