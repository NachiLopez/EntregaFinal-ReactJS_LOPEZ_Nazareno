import React from 'react'
import '../CartContainer/CartContainer.css'
import { useCartContext } from '../../Context/CartContext'

const FormularioDatosComprador = ({handleOnChange, formData}) => {
    const {} = useCartContext()

    return (
        <div className="datos-comprador">
            <h3>Ingresar datos del comprador</h3>
            <form onSubmit={enviarDatos}>
                <label>Nombre completo</label>
                <input type='text' name='name' autoComplete='name' value={formData.name} onChange={handleOnChange}/>
                <label>Mail de contacto</label>
                <input type='email' name='email' autoComplete='email' value={formData.email} onChange={handleOnChange}/>
                <label>Numero de telefono</label>
                <input type='tel' name='tel' autoComplete='tel' value={formData.tel} onChange={handleOnChange}/>
            </form>
        </div>
    )
}

export default FormularioDatosComprador