'use client'
import React from "react";
import "../styles/item.css";

export const Item = ({ id, nombre, tamaño, precio, saveToLocalStorage }) =>{
    const handleAddToBill = () => {
        // Llama a la función saveToLocalStorage pasando los valores
        saveToLocalStorage(nombre, tamaño, precio);
      };
    return(
        <div className="item-box">
            <div>{nombre}</div>
            <div>{tamaño}</div>
            <div className="item-price">${precio}</div>
            <button className="item-add-btn" onClick={handleAddToBill}>
                + Agregar a cuenta
            </button>
        </div>
    )
}