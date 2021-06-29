import React from 'react';

export default function ContactInfo(props) {
    return(
        <div>
            <div>
                <span>CONTACTANOS</span>
                <div>
                    <span><a href="https://www.instagram.com/conectandoparaeducar/" className="text-blue-700  text-md hover:text-blue-500">Instagram</a></span>
                    <span><a href="mailto:conectandoparaeducar@gmail.com " className="text-blue-700  text-md hover:text-blue-500">Email</a></span>
                    <span><a href="whatsapp://send?text=Estoy interesado en saber cómo puedo contribuir con el proyecto&phone=+5491164346553&abid=+5491164346553">WhatsApp</a></span>
                </div>
            </div>          
        </div>
    )
}