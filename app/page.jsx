'use client'

import React from "react";
import './index.css';
import Navbar from "@/components/navbar";
import { useState } from "react";
import { useRouter } from 'next/navigation'

function IndexPage(){
  const router = useRouter();
  const meseros = [{noMesero:'1',contraseña:'1234'},{noMesero:'1',contraseña:'9876'}];
  const [mesero, setMesero] = useState({noMesero: '', contraseña:''})
  
  const handleChange = ({target}) => {
    const {name, value} = target;
    setMesero({
      ...mesero,
      [name]:value
    });
  }

  const iniciarSesion = () =>{
    const encontrado = meseros.find((m) => m.noMesero === mesero.noMesero && m.contraseña === mesero.contraseña);
    if(encontrado){
      router.push('/principal', { scroll: false })
    }else{
      alert('No encontrado, intente nuevamente')
    }
  }
  return(
    <div>
      <Navbar></Navbar>
      <div className="cont-main">
        <div className="cont-form">
            <label htmlFor="">Ingresa tus datos</label>
            <br/><br/>
            <label className="lbl-text">Número de mesero</label>
            <br/>
            <input type="text" placeholder="Número" className="input-form" value={mesero.noMesero}
            onChange={handleChange} name='noMesero'/>
            <br/>
            <label className="lbl-text">Contraseña</label>
            <br/>
            <input type="password" placeholder="Contraseña" className="input-form" value={mesero.contraseña}
            onChange={handleChange} name='contraseña'/>
            <br/><br />
            <button className="btn-ingresar" onClick={iniciarSesion}>Ir al menú</button>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;