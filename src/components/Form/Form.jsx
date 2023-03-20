import React from 'react'
import styleForm from './Form.module.css'
import Validation from './Validation';

export default function Form(props){

    const [userData, setUserData] =React.useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    });

    const handleChange = (e)=>{
        console.log(e.target.value)
        const {value, name} = e.target;
        setUserData({...userData, [name] : value});
        setErrors(Validation({
            ...userData,
            [e.target.name] : e.target.value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(userData)
    }

    return(
    <form onSubmit={handleSubmit}>
    <img className={styleForm.imagen} src='https://www.tn8.tv/wp-content/uploads/2021/04/ry-k.jpg' alt='Rick and morty Login image' />
        <label className={styleForm.style}>Username:</label>
        <input 
        className={errors.username ? styleForm.errorsName : styleForm.container }
        value={userData.username}
        onChange={handleChange}
        name='username'
        />
        {errors.username ? <p className={styleForm.message}>{errors.username}</p> : null}
        <label className={styleForm.style}>Password:</label>
        <input  
        className={errors.password ? styleForm.errorsName : styleForm.container}
        type='password'
        name='password'
        value={userData.password}
        onChange={handleChange}
        />
        {errors.password ? <p className={styleForm.message}>{errors.password}</p> : null}
        <br/>
        <button className={styleForm.boton} type='submit' >Enviar</button>
    </form>
    )
}