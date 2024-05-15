import { get } from "../utils/conexionApi"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/cocktailDetails.css'

import { Header } from '../components/header'
import { Footer } from '../components/footer'



export const CocktailDetail = () => {
    const [cocktail, setCocktail] = useState(null) // cocktail se inica como null y tengo metodo que cambia el estado ( SET)
    const { cocktailid } = useParams();
    console.log(cocktailid)

    useEffect(() => {
        get(`lookup.php?i=${cocktailid}`).then((data) => {
            // console.log(data) ;
            setCocktail(data.drinks[0])

        })
    }, [cocktailid])


    // si pongo que el id no existe

    if (!cocktail) {
        return null
    }


    return (
    <>
        <Header />
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card text-center-bg-light">
                    <img src={cocktail.strDrinkThumb} alt={cocktail.title} className="card-img-top" />
                 <div className="card-body">
                    <h5 className="card-title">
                        {cocktail.strDrink}
                    </h5>
                    <p className="card-text">
                        <strong>Instructions: </strong>
                        {cocktail.strInstructions}
                    </p>
                    <p className="card-text">
                        <strong>Ingredient 1: </strong>
                        {cocktail.strIngredient1}
                    </p>
                    <p className="card-text">
                        <strong>Ingredient 2: </strong>
                        {cocktail.strIngredient2}
                    </p>
                    <p className="card-text">
                        <strong>Ingredient 3: </strong>
                        {cocktail.strIngredient3}
                    </p>
                    <p className="card-text">
                        <strong>Ingredient 4: </strong>
                        {cocktail.strIngredient4}
                    </p>
                    <p className="card-text">
                        <strong>Ingredient 5: </strong>
                        {cocktail.strIngredient5}
                    </p>
                    <p className="card-text">
                        <strong>Ingredient 6: </strong>
                        {cocktail.strIngredient6}
                    </p>
                    <p className="card-text" >
                        <strong>Glass  </strong>
                        {cocktail.strGlass}
                    </p>
                </div>  
                </div>
                 </div>
            </div>
        </div>
        <div className="link">
            <Link to={`/cocktails`} className="btn btn-outline-light btn-lg boton1">
                <i>Try a new cocktail!</i>
            </Link>
        </div>
        <Footer />
    </>
    );
};