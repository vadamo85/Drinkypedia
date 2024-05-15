import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/carrousel.css';

export const Carrousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="/tragos1.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='letter'>Drinkypedia</h5>
            <p className='letter1'>First page to consult how to do a great cocktail!</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="/tragos1.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='letter'>Register Now!</h5>
            <p className='letter1' >And save your favourite cocktails.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/tragos1.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='letter' >Create new cocktails!</h5>
            <p className='letter1' >Be creative and design your own cocktails.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
