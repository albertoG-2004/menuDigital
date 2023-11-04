import '../styles/navbarMenu.css';
import Link from "next/link";

function NavbarMenu(){
    return(
        <div className='contenedor-principal'>
            <div className='cont-nombre'>
                <p>Restaurante Bar Familiar La selvita</p>
            </div>
            <div className='cont-page'>
                <p>Platillos y bebidas</p>
            </div>
            <Link href="../bill">
            <ul className='nav-list'>
                <li>
                    Cuenta
                </li>
            </ul>
            </Link>
        </div>
    );
}

export default NavbarMenu;