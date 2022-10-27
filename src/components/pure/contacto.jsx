import React from "react";
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class'

const ContactoComponent = ({contac}) =>{

        return(
            <div>

                <h3>
                    Nombre : {contac.nombre}
                </h3>
                
                <h3>
                    Apellido: {contac.apellido}
                </h3>

                <h4>
                    Email: {contac.email}
                </h4>



            </div>
        )



};


ContactoComponent.prototype={
    contac: PropTypes.instanceOf(Contacto)

};


export default ContactoComponent;
