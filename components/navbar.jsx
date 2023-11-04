import '../styles/navbar.css';

function Navbar(){
    return(
        <div className='contenedor-principal'>
            <div className='cont-nombre'>
                <p>Restaurante Bar Familiar La selvita</p>
            </div>
            <div className='cont-page'>
                <p>Bienvenido Mesero</p>
            </div>
        </div>
    );
}

export default Navbar;