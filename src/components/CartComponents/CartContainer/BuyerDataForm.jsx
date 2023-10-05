import React from 'react'
import '../CartContainer/CartContainer.css'
import { useCartContext } from '../../Context/CartContext'

const BuyerDataForm = ({handleOnChange, formData, errorInputName, errorInputEmail, errorInputPhone}) => {
    const {} = useCartContext()

    return (
        <div className="buyer-data">
            <h3>Ingresar datos del comprador</h3>
            <form>
                <label className="form-label">Nombre completo</label>
                <input 
                    className={errorInputName ? 'form-control is-invalid' : 'form-control is-valid'}
                    placeholder={errorInputName ? 'Porfavor ingrese un nombre' : ''}
                    type='text' 
                    name='name' 
                    autoComplete='name' 
                    value={formData.name} 
                    onChange={handleOnChange}/>
                <label className="form-label">Mail de contacto</label>
                <input 
                    className={errorInputEmail ? 'form-control is-invalid' : 'form-control is-valid'} 
                    placeholder={errorInputEmail ? 'Porfavor ingrese un email' : ''}
                    type='email' 
                    name='email' 
                    autoComplete='email' 
                    value={formData.email} 
                    onChange={handleOnChange}/>
                <label className="form-label">Numero de telefono</label>
                <input 
                    className={errorInputPhone ? 'form-control is-invalid' : 'form-control is-valid'} 
                    placeholder={errorInputPhone ? 'Porfavor ingrese un numero' : ''}
                    type='tel'
                    name='tel' 
                    autoComplete='tel' 
                    value={formData.tel}
                    onChange={handleOnChange}/>
            </form>
        </div>
    )
}

export default BuyerDataForm
