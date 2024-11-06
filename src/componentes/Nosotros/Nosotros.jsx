import React from 'react';
import './Nosotros.css';
import Navbar from '../Navbar/Navbar';

function Nosotros() {
    return (
        <>
            <Navbar/>
            <div className="nosotros-container">
                <h2>Sobre Nosotros</h2>
                <p>
                    Bienvenidos a nuestra página. Somos una empresa dedicada a brindar soluciones innovadoras
                    en el ámbito de la tecnología. Nuestro equipo está comprometido en ofrecer los mejores servicios
                    para ayudar a nuestros clientes a alcanzar sus objetivos.
                </p>
                <p>
                    Nos destacamos por nuestra pasión, dedicación y enfoque en el detalle para garantizar resultados
                    excepcionales. ¡Gracias por confiar en nosotros!
                </p>
            </div>
        </>
    );
}

export default Nosotros;