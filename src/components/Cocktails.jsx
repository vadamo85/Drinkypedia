import { Link } from "react-router-dom"
import '../css/cocktails.css'

export const Cocktails = ({cocktailMap}) => {
  

  return (
    <li className="cocktailCard">
      <Link to = {`/cocktails/${cocktailMap.idDrink}`}>
        <div className="cocktail-card">
          <h2 className="title">{cocktailMap.strDrink}</h2>
          <img className="cocktail-img" src={cocktailMap.strDrinkThumb} alt="Foto" />
        </div>
      </Link>
    </li>
  )
}

