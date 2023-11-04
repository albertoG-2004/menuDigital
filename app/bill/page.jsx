'use client'
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import NavbarBill from "@/components/navbarBill";
import PayBill from "@/components/payBill";
import "../../styles/bill.css";

function Bill(){
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    // Recuperar todos los elementos almacenados en el localStorage
    const existingOrders = JSON.parse(localStorage.getItem("pedidos")) || [];
    // Setea los datos en la constante items
    setItems(existingOrders); 
    setIsLoading(false);

    }, []);

    useEffect(() => {
        // Llama a calcularTotal cuando los datos se cargan correctamente
        if (!isLoading) {
          calcularTotal();
        }
      }, [isLoading, items]);

    const calcularTotal = () =>{
        //Funcion para calcular el total de la cuenta
        const totalCalculado = items.reduce((total, item) => total + parseInt(item.precio, 10), 0);

        setTotal(totalCalculado);
    }

    return(
        <div>
            <NavbarBill></NavbarBill>
            <div className="cont-main">
                <div className="cont-bill">
                <p className="title">Lista de la cuenta</p>
                <ol className="bill">
                    {items.map((item, index) => (
                        <li key={index}>
                            Platillo: {item.nombre} Tamaño: {item.tamaño} Precio: ${item.precio}
                        </li>
                    ))}
                </ol>
                <p className="total">Total: ${total}</p>
                </div>
                <PayBill total={total}></PayBill>
            </div>
        </div>
    )
}

export default Bill;