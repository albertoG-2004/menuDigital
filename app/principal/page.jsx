import NavbarMenu from "@/components/navbarMenu";
import { ItemList } from "@/components/itemList";
import "../../styles/principal.css";

function Principal( ){
    return(
        <div>
            <NavbarMenu></NavbarMenu>
            <div className="cont-items">
                <p className="title">Platillos</p>
                <ItemList></ItemList>
            </div>
        </div>
    );
}

export default Principal;