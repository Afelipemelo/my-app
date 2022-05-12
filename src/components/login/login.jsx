import React,{useState,useEffect,Fragment}from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { ReactDOM } from 'react-router-dom';
import Swal from 'sweetalert2'
import GoogleLogin from 'react-google-login';
import { useAuth0 } from '@auth0/auth0-react';
import HomePage from '../homePage/homePage';

import axios from 'axios'

const Login = () => {
	const navigate = useNavigate()
	const {isAuthenticated} = useAuth0()
	const {loginWithRedirect} = useAuth0();
    const [ showPassword, setShowPassword ] = useState(false);
	
	const [ dataUser, setDataUser ] = useState({
		userName: '',
		password: ''
	});
    // Mostrar contraseña
    const handleClickShowPassword = (event) => {
            setShowPassword(!showPassword);
            event.preventDefault();
        };
	
	const handleSubmit = async() => {
		const { userName, password } = dataUser;
			if (userName !== '' && password !== '') {
				const options = {
					method: 'POST',
					url: 'http://localhost:8081/authenticate',
					Headers: { 'Content-Type' : 'aplication/json'},
					data: {
						userName: dataUser.userName,
						password: dataUser.password
					}	
				}
				await axios.request(options).then(function(response){
						console.log(response.data)	
						Swal.fire({ 
							icon: 'success',
							title: 'Genial...',
							  text: 'Bienvenido!'
							})
							navigate('/HomePage')	
				}).catch(function (error) {
					console.error(error);
					Swal.fire({ 
						icon: 'error',
						  title: 'Oops...',
						  text: 'Usuraio no encontrado!',
					})
				})
			} else {
				Swal.fire({ 
					icon: 'warning',
  					title: 'Oops...',
  					text: 'Todos los campos son obligatorios!'
				})
						}
	}
    return (  
		<Fragment>
		<Grid container style={{width:'100%'}}>
				<Grid item  xs={12} sm={12} md={3} lg={3} style={{ margin: '4rem auto'}}>
					<Box border={2} 
                        className='inicio'
                        sx={{
                            border: '1px',
                            borderRadius: '15px',
                            boxShadow: '5px 5px 6px 2px  rgba(125,125,125,0.43)',
                            background:'rgb(250, 250, 250)'}}
                    >
						<Grid container style={{marginLeft:'30px'}} >
							<Grid item xs={6} sm={6} md={6} lg={6} style={{marginTop:'20px'}}>
								<Link to="/Login" className='links'
								>Iniciar sesion </Link>
							</Grid>
							<Grid item xs={6} sm={6} md={6} lg={6}  style={{marginTop:'20px'}}>
								<Link to="/NewUser" className='links'>Registrarse</Link>
							</Grid>
						</Grid>

						<form noValidate autoComplete="off" className="form-login">
							{/* //Correo electronico//   */}
							<Box >
								<TextField
                                    style={{margin:'30px 0px 10px 10px',width:'92%'}}
									inputProps={{
										style: {
											color: '#2F8DD8'
										}
									}}
									InputLabelProps={{
										style: { color: '#2F8DD8' }
									}}
									id="mui-theme-provider-outlined-input"
									label="Nombre de Usuario"
									variant="outlined"
									type="text"
									name="userName"
                                    size='small'
									className="correo-box"
									value={dataUser.userName}
									onChange={(e) =>
										setDataUser({
											...dataUser,
											[e.target.name]: e.target.value
										})}
								/>
							</Box>

							{/* //Contraseña//   */}
							<Box>
								<TextField
                                    style={{margin:'10px 0px 40px 10px',width:'92%'}}
									inputProps={{
										style: {
											color: '#2F8DD8'
										}
									}}
									InputLabelProps={{
										style: { color: '#2F8DD8' }
									}}
									id="outlined-password-input"
									label="Contraseña"
									type={showPassword ? 'text' : 'password'}
									name="password"
									autoComplete="current-password"
									variant="outlined"
                                    size='small'
                                    value={dataUser.password}
									onChange={(e) =>
										setDataUser({
											...dataUser,
											[e.target.name]: e.target.value
										})}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													edge="end"
													onClick={handleClickShowPassword}
												>
													{showPassword ? <Visibility /> : <VisibilityOff />}
												</IconButton>
											</InputAdornment>
										)
									}}
								/>
							</Box>

							<Box style={{marginTop:'-20px',display:'flex',justifyContent:'center'}}>
								{/* <Link
                                    style={{textDecoration:'none'}}
									activestyle={{ color: '#e1e1e1!important', backgroundColor: '#000!important' }}
								>
									<h6 style={{ cursor: 'pointer' }}>¿Olvidó su Contraseña?</h6>
								</Link> */}
							</Box>
							<Box style={{ display:'flex', justifyContent:'center',height:'50px' }}>
								<Button
									color="primary"
									variant="contained"
                                    size='small'
									onClick={handleSubmit}
                                    style={{fontSize:'6px'}}
									>
									<h1 style={{fontFamily:'cursive'}}>Iniciar Sesión</h1>
								</Button>
							</Box>
						</form>
						<Box  style={{ display:'flex', justifyContent:'center',height:'50px',marginTop:'10px' }}>
							<Button
								// color="primary"
								variant="outlined"
								size='small'
								onClick={()=> loginWithRedirect()}
								style={{marginBottom:'20px'}}
								>
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original-wordmark.svg" />
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
			{isAuthenticated ? 
				navigate('/HomePage')
				:null}
			</Fragment>
    );
}
export default Login;