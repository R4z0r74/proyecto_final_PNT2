import React from 'react';
import './Contacto.css';
import Navbar from '../Navbar/Navbar';

function Contacto() {

    const handleSubmit = () => {
        alert("Gracias por contactarnos!")
    }
    return (
        <>
            <Navbar/>
            <div className="contacto-container">
                <h2>Contacto</h2>
                <p>
                    ¿Tienes alguna pregunta? No dudes en comunicarte con nosotros. Nos encantaría ayudarte.
                </p>
                <form className="contacto-form" onSubmit={ handleSubmit }>
                    <label>
                        Nombre:
                        <input type="text" name="nombre" placeholder="Tu nombre" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" placeholder="Tu email" required />
                    </label>
                    <label>
                        Mensaje:
                        <textarea name="mensaje" placeholder="Escribe tu mensaje aquí..." required></textarea>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
}

export default Contacto;