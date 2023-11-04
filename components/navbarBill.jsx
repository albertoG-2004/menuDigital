import '../styles/navbarBill.css';
import Link from "next/link";

function NavbarBill(){
    return(
        <div className='contenedor-principal'>
            <div className='cont-nombre'>
                <p>Restaurante Bar Familiar La selvita</p>
            </div>
            <div className='cont-page'>
                <p>Cuenta</p>
            </div>
            <Link href="../principal">
            <ul className='nav-list'>
                <li>
                    Menu
                </li>
            </ul>
            </Link>
        </div>
    );
}

export default NavbarBill;