import axios from 'axios';
import React, { useState } from 'react';
import { FiMail, FiPhone, FiUsers,  } from "react-icons/fi";
import { FaBirthdayCake  } from "react-icons/fa";
import { HiOutlineIdentification  } from "react-icons/hi";
import { RiLockPasswordFill  } from "react-icons/ri";
import { Link } from 'react-router-dom';
import '../styles/components/Form.css';

const AddUser = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [identification, setIdentification] = useState("");
    const [identificationType, setIdentificationType] = useState("0");
    const [birthDate, setBirthDate] = useState(null);
    const [phone, setPhone] = useState("");


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("https://warm-mountain-11426.herokuapp.com/api/user", 
/*             { headers: {
                Authorization: `Bearer ${localStorage.token}` 
            }}, */
            {
                name,
                lastName,
                identificationType,
                identification,
                email,
                birthDate,
                password,
                role:"user",
                username:identification,
                phone
            });
        }
        catch(e){
            alert(e)
        }
    };


    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <p>Nombres</p>
                <div className="inp">
                <FiUsers size='1.5em'/>
                <input type="text" name="name" placeholder="Nombre" onChange={e=>setName(e.target.value)}/>
                </div>
                <p>Apellidos</p>
                <div className="inp">
                <FiUsers size='1.5em'/>
                <input type="text" name="name" placeholder="Apellidos" onChange={e=>setLastName(e.target.value)}/>
                </div>
                <p>Tipo de identificación</p>
                <div className="inp">
                <FiUsers size='1.5em'/>
                <select name="identificationType" onSelect={(e)=>setIdentificationType(e.target.value)}>
                    <option value="0">Cédula de ciudadanía</option>
                    <option value="1">Tarjeta de identidad</option>
                    <option value="2">Cédula de extanjería</option>
                </select>
                </div>
                <p>Número de identificación</p>
                <div className="inp">
                <HiOutlineIdentification size='1.5em'/>
                <input type="number" name="identification" placeholder="Número de identificación" onChange={e=>setIdentification(e.target.value)}/>
                </div>
                <p>Correo electrónico</p>
                <div className="inp">
                <FiMail size='1.5em'/>
                <input type="text" name="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                </div>
                <p>Contraseña</p>
                <div className="inp">
                <RiLockPasswordFill size='1.5em'/>
                <input type="password" name="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                </div>
                <p>Teléfono</p>
                <div className="inp">
                <FiPhone size='1.5em'/>
                <input type="number" name="phone" placeholder="Teléfono" onChange={e=>setPhone(e.target.value)}/>
                </div>
                <p>Fecha de nacimiento</p>
                <div className="inp">
                <FaBirthdayCake size='1.5em'/>
                <input type="date" name="birthday" placeholder="Fecha de nacimiento" onChange={e=>setBirthDate(e.target.value)}/>
                </div>
                <div className="terms">
                    <label ><input type="checkbox" name="terms" /> Acepto los términos y condiciones</label>
                </div>
                <button>Registrarse</button>
                <Link to="login"> <p>Ya tengo una cuenta</p> </Link> 
            </form>
        </div>
    )
}

export default AddUser;
