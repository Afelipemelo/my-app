import React,{useEffect, useState,Fragment} from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import NabVarPage from '../navBar/navBarPage'
import FormControl from '@mui/material/FormControl';
import Swal from 'sweetalert2'
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import {  Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import {useAuth0} from '@auth0/auth0-react'
import imagenCochinito from '../../img/imagenCochinito.jpg'
import axios from 'axios'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 10,
    p: 4,
  };    
const HomePage = () => {
    const [visible, setVisible] = useState(true);
    //state para validar que los datos del formulario esten llenos   
    const [error,setError] = useState(false)
      //state de la contraseña 
      const [ showPassword, setShowPassword ] = useState(false);
    
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
    
        // Mostrar contraseña
        const handleClickShowPassword = (event) => {
            setShowPassword(!showPassword);
            event.preventDefault();
          };
    const {logout} = useAuth0()
    const {user, isAuthenticated, isLoading} = useAuth0()
     const [formulario,setFormulario] = useState ({
        role: 'USER',
        typeDocument: "",
        documentId: "",
        bornDate: "",
        gender: "",
        phone: "",
        password: ""
        })

          //desfragmetamos el state formulario  
      const {userName,firstName,lastName,email,password,typeDocument,documentId,bornDate,gender,phone } = formulario
    
        const handleChange = (e) => {
            console.log('entre')
            setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
          });
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            if( documentId.trim()== ""|| phone.trim()== ""||password.trim() == "" ){
              setError(true)
              return;
          }
          console.log('paso la validacion')
          setError(false)
  
          const insertarFour = async () => {
              console.log(user)
            const options = {
              method: 'POST',
              url: 'http://localhost:8081/register',
              headers: { 'Content-Type': 'application/json' },
              data: {
                userName: user.nickname,
                firstName: user.given_name,
                lastName: user.family_name,
                email: user.email,
                role: formulario.role,
                typeDocument: formulario.typeDocument,
                documentId: formulario.documentId,
                bornDate: formulario.bornDate,
                gender: formulario.gender,
                phone: formulario.phone,
                password: formulario.password
              }
            }; 
            console.log(user) 

            await axios.request(options).then(function (response) {
              console.log(response.data);
            }).catch(function (error) {
              console.error(error);
              alert("Error al crear el usuario");
            });
          }
  
    
      insertarFour()
      closeHandler()
      setFormulario({
        role:"USER",
        typeDocument:"",
        documentId:"",
        bornDate:"",
        gender:"",
        phone:"",
        password:""
        })  
      };
    return (
        <Fragment>
             {/* <Button 
                      variant="contained" 
                      type="submit" 
                      onClick={()=>logout({returnTo:window.location.origin})}
            >Cerrar Sesion</Button> */}
            <NabVarPage/>
            {isAuthenticated ?
                 <div>
                     <Modal
                      preventClose
                      open={visible}
                        >
                     <Box sx={style}>
                         <Box style={{display:'flex', justifyContent:'center',marginBottom:'10px'}}>
                     <Text color="primary" size={18}>
                       Por favor complete el registro
                     </Text>
                         </Box>
                   <Box style={{width:'100%'}}>
                    <Grid container>
                   <form onSubmit={handleSubmit} className='formulario'>
                    <TextField
                        style={{margin:'10px',width:'45%'}}
                        inputProps={{
                            style: {
                            color: '#2F8DD8'
                            }
                        }}
                        InputLabelProps={{
                            style: { color: '#2F8DD8' }
                        }}
                        disabled
                        id="outlined-disabled"
                        label="nombre de usuario"
                        name='userName'
                        defaultValue={user.nickname}
                        // value={user.nickname}
                        // onChange={handleChanges}
                        />
              <TextField
                  style={{margin:'10px',width:'45%'}}
                  inputProps={{
                    style: {
                      color: '#2F8DD8'
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#2F8DD8' }
                  }}
                    disabled
                    id="outlined-disabled"
                    label="Nombre"
                    name='firstName'
                    defaultValue={user.given_name}
                    // onChange={handleChanges}
                  />
              <TextField
                  style={{margin:'10px',width:'45%'}}
                  inputProps={{
                    style: {
                      color: '#2F8DD8'
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#2F8DD8' }
                  }}
                  disabled
                  id="outlined-disabled"
                  label="Apellido"
                  name='lastName'
                  defaultValue={user.family_name}
                //   onChange={handleChanges}
                  />
               <TextField
                  style={{margin:'10px',width:'45%'}}
                  inputProps={{
                    style: {
                      color: '#2F8DD8'
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#2F8DD8' }
                  }}
                  disabled
                  id="outlined-disabled"
                  label="Correo"
                  name='email'
                  defaultValue={user.email}
                //   onChange={handleChanges}
                  />
              <FormControl  style={{margin:'10px',width:'45%'}}>
                <InputLabel>tipo de identificacion</InputLabel>
                  <Select 
                    type="text"
                    label="tipo de identificacion"
                    name="typeDocument"
                    value={typeDocument}
                    onChange={handleChange}
                    > 
                    <MenuItem disabled value="">
                        <em>identificacion</em>
                    </MenuItem>
                    <MenuItem value ={1}>Cédula de ciudadanía</MenuItem>
                    <MenuItem value = {2}>Cédula de extranjería</MenuItem>
                    <MenuItem value = {3}>Pasaporte</MenuItem>
                  </Select>
              </FormControl>
              <TextField
                  style={{margin:'10px',width:'45%'}}
                  inputProps={{
                    style: {
                      color: '#2F8DD8'
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#2F8DD8' }
                  }}
                  type="text"
                  label="Numero De Documento" 
                  name="documentId"
                  value={documentId}
                  onChange={handleChange}
                  />
              <TextField 
                  style={{margin:'10px',width:'45%'}}
                  inputProps={{
                    style:{color :'#2F8DD8'}
                  }}
                  InputLabelProps={{
                    style:{color:'#2F8DD8'},
                    shrink: true
                  }}
                  type="date"
                  name="bornDate"
                  label='fecha de nacimiento'
                  value={bornDate}
                  onChange={handleChange}
                  />
               <FormControl  style={{margin:'10px',width:'45%'}}>
                <InputLabel>Genero</InputLabel>
              <Select 
                type="text"
                name="gender"
                label='Genero'
                value={gender}
                onChange={handleChange}
                >
                <MenuItem value = {1}>Femenino</MenuItem>
                <MenuItem value = {2}>Masculino</MenuItem>
                <MenuItem value = {3}>Prefiero no decir</MenuItem>
              </Select>
              </FormControl>
              <TextField
                  style={{margin:'10px',width:'45%'}}
                  inputProps={{
                    style: {
                      color: '#2F8DD8'
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#2F8DD8' }
                  }}
                type="text"
                label='Telefono'
                name="phone"
                value={phone}
                onChange={handleChange}
                />
                <TextField
                                     style={{margin:'10px',width:'45%'}}
                
                                   inputProps={{
                                                  style: {
                                          color: "#2F8DD8",
                                        },
                                      }}
                                      InputLabelProps={{
                                        style: { color: "#2F8DD8" },
                                      }}
                                      id="outlined-password-input"
                                      label="Contraseña"
                                      type={showPassword ? 'text' : 'password'}
                                      name="password"
                                      autoComplete="current-password"
                                      variant="outlined"
                                      value={password}
                                      onChange={handleChange}  
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        edge="end"
                                                        onClick={handleClickShowPassword}
                                                        className="boton-visibilidad"
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                        <div style={{marginBottom:'20px', marginTop:'20px',display:'flex',justifyContent:'center'}}
                   >
                      <Button 
                      variant="contained" 
                      type="submit" 
                      onChange={handleChange}
                    >Registrarse
                    </Button>
                    </div>
                    </form>
                    </Grid>
                    </Box>
                   {error ?  <Alert  variant="filled" severity="error" style={{width:'92%'}}>Todos los campos son obligatorios</Alert> : null}
                    </Box>
                 </Modal>
               </div>
            //     <div>
            //         <img src={user.picture}/>
            //         <h2>{user.name} </h2>
            //         <h2>{user.nickname} </h2>
            //         <p>Emai: {user.email}</p>
            //         <Box>
            // <Box className='container-reglas'>
            //     <Grid container style={{display:'flex', justifyContent:'center'}}>
            //         <Grid item  xs={5} sm={5} md={5} lg={5} >
            //             <Box className='imagenes-reglas'>
            //             <img src={imagenCochinito} width="400" height="250" style={{borderRadius:'10px', display:'flex', marginLeft:'60px'}}/>
            //             </Box>
            //         </Grid>
            //         <Grid item  xs={7} sm={7} md={7} lg={7} className='reglas'>
            //             <Grid item xs={12} sm={12} md={12} lg={12}>
            //                 <Box style={{display:'flex', justifyContent:'center'}}>
            //                     <h1>Reglas</h1>
            //                 </Box>
            //             </Grid>
            //             <Grid item xs={12} sm={12} md={12} lg={12}>
            //             <ul>
            //                 <li>Apotar semanal mente</li>
            //                 <li>Monto minimo semanal $2000</li>
            //                 <li>Monto maximo semanal $10000</li>
            //                 <li>Monto maximo de prestamo $10000</li>
            //             </ul>
            //             </Grid>
            //         </Grid>
            //     </Grid>

            // </Box>
            // <Box>
            // <Grid container>
            //     <Grid item xs={8} sm={8} md={8} lg={8}>
            //         <Box className='historial-moviminetos'>
                        
            //         </Box>
            //     </Grid>
            //     <Grid item xs={3} sm={3} md={3} lg={3}>
            //         <Box className='historial-integrantes'>
            //         <div className='monto'>
            //             $172.000
            //         </div>
            //         <ul>
            //                 <li>Andres Melo</li>
            //                 <li>Laura daniel</li>
            //                 <li>juan Andres</li>
            //                 <li>Daniel felipe</li>
            //                 <li>Juan Carlos</li>
            //                 <li>Dana quevedo </li>
            //             </ul>
            //         </Box>
            //     </Grid>
            // </Grid>
            // </Box>
            // <Box className='container-reglas'>
            //     <Grid container >
            //         <Grid item  xs={7} sm={7} md={7} lg={7} className='reglas'>
            //         </Grid>
            //     </Grid>

            // </Box>
            // </Box>
            //     </div>  
            :
            <Box>
            <Box className='container-reglas'>
                <Grid container style={{display:'flex', justifyContent:'center'}}>
                    <Grid item  xs={5} sm={5} md={5} lg={5} >
                        <Box className='imagenes-reglas'>
                        <img src={imagenCochinito} width="400" height="250" style={{borderRadius:'10px', display:'flex', marginLeft:'60px'}}/>
                        </Box>
                    </Grid>
                    <Grid item  xs={7} sm={7} md={7} lg={7} className='reglas'>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Box style={{display:'flex', justifyContent:'center'}}>
                                <h1>Reglas</h1>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                        <ul>
                            <li>Apotar semanal mente</li>
                            <li>Monto minimo semanal $2000</li>
                            <li>Monto maximo semanal $10000</li>
                            <li>Monto maximo de prestamo $10000</li>
                        </ul>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
            <Box>
            <Grid container>
                <Grid item xs={8} sm={8} md={8} lg={8}>
                    <Box className='historial-moviminetos'>
                        
                    </Box>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    <Box className='historial-integrantes'>
                    <div className='monto'>
                        $172.000
                    </div>
                    <ul>
                            <li>Andres Melo</li>
                            <li>Laura daniel</li>
                            <li>juan Andres</li>
                            <li>Daniel felipe</li>
                            <li>Juan Carlos</li>
                            <li>Dana quevedo </li>
                        </ul>
                    </Box>
                </Grid>
            </Grid>
            </Box>
            <Box className='container-reglas'>
                <Grid container >
                    <Grid item  xs={7} sm={7} md={7} lg={7} className='reglas'>
                        gogogo
                    </Grid>
                </Grid>

            </Box>
            </Box>
            
            } 
         </Fragment>
      );
}
 
export default HomePage;