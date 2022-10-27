import React from "react";
import { Contacto } from '../../models/contacto.class'
import  ContactoComponent from "../pure/contacto";

const ContactoList = () => {

     const defaultTask = new Contacto('Nicolas', 'Graziano', 'nicolas@gmail.com', false);

    return(
        <div>
        <div>
            Contactos
        </div>
            <ContactoComponent contac={defaultTask}>

            </ContactoComponent>
            
            <h5>
                Estado:{defaultTask.conectado ? 'Contacto en Linea':' Contacto No Disponible '}
            </h5>
        </div>
    )




}
export default ContactoList;