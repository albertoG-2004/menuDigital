'use client'
import React from "react";
import { Item } from "./item";
import platillos from "../data/platillos.json";
import "../styles/item.css";

export const ItemList = () => {
    const saveToLocalStorage = (nombre, tamaño, precio) => {
        const item = { nombre, tamaño, precio };
        // Recuperar la lista de pedidos actual del localStorage
        const existingOrders = JSON.parse(localStorage.getItem("pedidos")) || [];
        // Agregar el nuevo pedido a la lista
        existingOrders.push(item);
        const newItem = JSON.stringify(existingOrders);
        // Guardar la lista actualizada en el localStorage
        localStorage.setItem("pedidos", newItem);
    };

    return(
        <div className="item-list">
            {
                platillos.map((platillo, idx)=>{
                    return <Item key={platillo.id} {...platillo} saveToLocalStorage={saveToLocalStorage}/>
                })
            } 
        </div>
    )
}