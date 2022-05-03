import React,{useState,useEffect}from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';


// "userName":"1",
// "firstName":"2",
// "lastName":"3",
// "email":"4",
// "password":"5",
// "role":"USER",
// "typeDocument":"6",
// "documentId":"7",
// "bornDate":"2000-09-30",
// "gender":"8",
// "phone":"9"
const Login = () => {
    const [ showPassword, setShowPassword ] = useState(false);
	
	const [ dataUser, setDataUser ] = useState({
		correo: '',
		password: ''
	});
    // Mostrar contraseña
    const handleClickShowPassword = (event) => {
            setShowPassword(!showPassword);
            event.preventDefault();
        };
	const handleSubmit = () => {
		const { correo, password } = dataUser;
			if (correo !== '' && password !== '') {
				localStorage.setItem('sesion', JSON.stringify(dataUser));
			} else {
				<Alert  variant="filled" severity="error" style={{width:'100%', margin:'10px'}}>Todos los campos son obligatorios</Alert>
			}
		};
    return (  
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
						<Grid container style={{marginLeft:'20px'}} >
							<Grid item xs={6} sm={6} md={6} lg={6}>
								<Link
									activestyle={{ color: '#e1e1e1!important', backgroundColor: '#000!important' }}
									underline='none'
								>
									<h4 className="iniciar-sesionon" style={{ cursor: 'pointer',color:'#2F8DD8' }}>
										Iniciar sesión
									</h4>
								</Link>
								</Grid>
							<Grid item xs={6} sm={6} md={6} lg={6}>
								<Link
									href='./NewUser'
									activestyle={{ color: '#e1e1e1!important', backgroundColor: '#000!important' }}
									underline='none'
								>
									<h4 className="registrarseoff" style={{ cursor: 'pointer',color:'#2F8DD8' }}>
										Registrarse
									</h4>
								</Link>
							
							</Grid>
						</Grid>

						<form noValidate autoComplete="off" className="form-login">
							{/* //Correo electronico//   */}
							<Box >
								<TextField
                                    style={{margin:'10px',width:'92%'}}
									inputProps={{
										style: {
											color: '#2F8DD8'
										}
									}}
									InputLabelProps={{
										style: { color: '#2F8DD8' }
									}}
									id="mui-theme-provider-outlined-input"
									label="Correo electrónico"
									variant="outlined"
									type="correo"
									name="correo"
                                    size='small'
									className="correo-box"
									value={dataUser.correo}
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
                                    
                                    style={{margin:'10px',width:'92%'}}
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
								<Link
                                    style={{textDecoration:'none'}}
									activestyle={{ color: '#e1e1e1!important', backgroundColor: '#000!important' }}
								>
									<h6 style={{ cursor: 'pointer' }}>¿Olvidó su Contraseña?</h6>
								</Link>
							</Box>
							<Box style={{ display:'flex', justifyContent:'center',height:'50px' }}>
								<Button
									color="primary"
									variant="contained"
                                    size='small'
									onClick={handleSubmit}
                                    style={{fontSize:'6px', marginBottom:'10px'}}
									>
									<h1 style={{fontFamily:'cursive'}}>Iniciar Sesión</h1>
								</Button>
							</Box>
						</form>
					</Box>
				</Grid>
			</Grid>
    );
}
 
export default Login;