import React from "react";
import "../styles/payBill.css"
import { useState } from "react";

function PayBill({total}){
    const [payment, setPayment] = useState(0);

    const handlePaymentChange = (e) => {
        const value = e.target.value;
        setPayment(value);
    };

    const payBill = () =>{
        if (payment<total) {
            let deuda = total-payment;
            alert('El pago no es suficiente, faltan: '+deuda)
        }else if (payment==total) {
            alert('Pagado, vuelva pronto')
        }else{
            let cambio = payment-total;
            alert('Pagado, su cambio es: '+cambio)
        }
    }

    const cleanLocalStorage = () =>{
        localStorage.clear();
        router.push('../principal', { scroll: false })
    }

    return(
        <div className="cont-pay">
            <p className="lbl-text">Total: ${total}</p>
            <label className="lbl-text">Pago</label>
            <input className="input-pago" type="number" step="1" pattern="\d+" value={payment}
            onChange={handlePaymentChange}/>
            <br/>
            <br/>
            <label className="lbl-text">Cambio: </label>
            <br/>
            <br/>
            <button className="btn-total" onClick={payBill}>Pagar</button>
        </div>
    )
}

export default PayBill;