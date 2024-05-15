import { Link } from "react-router-dom"
export const Cocktails = ({cocktailMap}) => {
  

  return (
    <li className="peliculasCard">
     <Link to = {`/cocktails/${cocktailMap.idDrink}`}>
<img src={cocktailMap.strDrinkThumb} alt="Foto" />
     <small>{cocktailMap.strDrink}</small>
    </Link>
    </li>
     )
 }

