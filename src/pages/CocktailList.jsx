import { Cocktails } from "../components/Cocktails"
import { get } from "../utils/conexionApi"
import { useState, useEffect } from "react"
import '../css/cocktailList.css'

import { Header } from '../components/header'
import { Footer } from '../components/footer'


export const CocktailList = () => {
  const [cocktail, setCocktail] = useState([])
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCocktail = async () => 
        {
            
            try {
                const data = await get('filter.php?c=Ordinary_Drink');

                setCocktail(data.drinks.slice(0,15,1));  // donde empieza , donde termina , de cuanto en cuanto salta
                }  
                catch (error) {

                setError(error)
                }

                
         }
         fetchCocktail();
}
, [])

 return (
  <>
      <Header />

      {/* mapear */}
      <ul className="titulos">
        {cocktail.map((cocktailItem) => (
          <Cocktails key={cocktailItem.idDrink} cocktailMap={cocktailItem} />
        ))}
      </ul>
      
      <Footer />
    </>
  );

}

