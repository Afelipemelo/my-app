import { useState, useEffect, Fragment } from "react";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import axios from 'axios'
import Alert from '@mui/material/Alert';

const NewUser = () => {
      //state para validar que los datos del formulario esten llenos   
      const [error,setError] = useState(false)
      //state de la contraseña 
      const [ showPassword, setShowPassword ] = useState(false);
      //state del formulario
      const [formulario,setFormulario] = useState ({
        userName:"", 
        firstName:"",
        lastName:"", 
        email:"",
        role:"USER",
        typeDocument:"",
        documentId:"",
        bornDate:"",
        gender:"",
        phone:"",
        password:""
        })
      //desfragmetamos el state formulario  
      const {userName,firstName,lastName,email,password,typeDocument,documentId,bornDate,gender,phone } = formulario
      //handleChange para llenar el formulario
        const handleChange = (e) => {
            setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
          });
        };

        // Mostrar contraseña
        const handleClickShowPassword = (event) => {
          setShowPassword(!showPassword);
          event.preventDefault();
        };
        //handleSubmit para enviar el formulario
        const handleSubmit = (e) => {
          e.preventDefault();
        //   if(userName.trim()=="" || firstName.trim() == "" || lastName.trim()=="" ||email.trim() == "" ||typeDocument.trim()== "" || documentId.trim()== ""|| bornDate.trim()== ""|| gender.trim()== ""|| phone.trim()== ""||password.trim() == "" ){
        //     setError(true)
        //     return;
        // }
        console.log('paso la validacion')
        setError(false)

        const insertarFour = async () => {

          const options = {
            method: 'POST',
            url: 'http://localhost:8081/register',
            headers: { 'Content-Type': 'application/json' },
            data: {
              userName: formulario.userName,
              firstName: formulario.firstName,
              lastName: formulario.lastName,
              email: formulario.email,
              role: formulario.role,
              typeDocument: formulario.typeDocument,
              documentId: formulario.documentId,
              bornDate: formulario.bornDate,
              gender: formulario.gender,
              phone: formulario.phone,
              password: formulario.password
            }
          };  
          await axios.request(options).then(function (response) {
            console.log(response.data);
            alert("Cita agendada con exito"); // lo puse como un mensaje emergente :v
          }).catch(function (error) {
            console.error(error);
            alert("Error al agendar la cita");
          });
        }

  
    insertarFour()
    setFormulario({
      userName:"", 
      firstName:"",
      lastName:"", 
      email:"",
      role:"USER",
      typeDocument:"",
      documentId:"",
      bornDate:"",
      gender:"",
      phone:"",
      password:""
      })
          alert("El formulario se ha enviado");
        };
       
    return (
    <Grid container style={{width:'100%'}}>

      <Grid container item  xs={12} sm={12} md={7} lg={7} style={{ margin: '4rem auto'}} sx={{
            border: '1px',
            borderRadius: '15px',
            boxShadow: '5px 5px 6px 2px  rgba(125,125,125,0.43)',
            background:'rgb(250, 250, 250)'}}
        >
        <Box style={{width:'100%'}}>
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Link
              href='./Login'
              activestyle={{ color: '#e1e1e1!important', backgroundColor: '#000!important' }}
              underline='none'
              >
                <h4 className="iniciar-sesionon" style={{ cursor: 'pointer',color:'#2F8DD8',display:'flex',justifyContent:'center' }}>
                  Iniciar sesión
                </h4>
              </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Link
                activestyle={{ color: '#e1e1e1!important', backgroundColor: '#000!important' }}
                underline='none'
              >
                <h4 className="registrarseoff" style={{ cursor: 'pointer',color:'#2F8DD8',display:'flex',justifyContent:'center' }}>
                  Registrarse
                </h4>
              </Link>
            </Grid>
          </Grid>
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
                  type="text"
                  name='userName'
                  label="Nombre de usuario" 
                  onChange={handleChange}
                  value={userName}
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
                  type="text"
                  name='firstName'
                  label="Nombre" 
                  onChange={handleChange}
                  value={firstName}
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
                  type="text"
                  name='lastName'
                  label="Apellido" 
                  onChange={handleChange}
                  value={lastName}
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
                  type="text"
                  label='Correo'
                  name="email"
                  value={email}
                  onChange={handleChange}
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
                                      // onChange={e => setFormulario({
                                      //       ...formulario,
                                      //       [e.target.name]: e.target.value
                                      //   })}
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
                    <div style={{marginBottom:'10px',display:'flex',justifyContent:'center'}}
                   >
                      <Button 
                      variant="contained" 
                      type="submit" 
                      onChange={handleChange}
                    >Registrarse</Button>
                    </div>
          </form>
          {error ?  <Alert  variant="filled" severity="error" style={{width:'100%', margin:'10px'}}>Todos los campos son obligatorios</Alert> : null}
          </Grid>   
        </Box>
      </Grid>
    </Grid>
      )
    }
    export default NewUser