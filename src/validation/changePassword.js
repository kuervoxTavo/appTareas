import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

 const schema = yup.object().shape({
    password: 
    yup.string('La contraseña debe ser texto').
    required('Desbes ingresar una contraseña').
    min(6, 'Minimo 6 caracteres'),
 })

 export default yupResolver(schema)