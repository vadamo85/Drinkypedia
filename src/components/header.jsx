import '../css/header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Header = () => {
    return (
        <header>
    <nav className="navbar">
        <div className="container-fluid custom-container">
            <a className="navbar-brand custom-navbar-brand" href="/">
                <img src="/Drinkypedia.png" alt="Drinkypedia Logo" width="100" height="60" className="d-inline-block align-text-top" />
                <span className="letter">Drinkypedia</span>
            </a>
            <img src="./" alt="" />
        </div>
    </nav>
</header>
    );
};