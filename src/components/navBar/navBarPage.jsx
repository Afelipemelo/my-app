import React,{Fragment} from 'react'
import banner from '../../imagenes/banner.jpeg'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import {  Button } from "@nextui-org/react";
import {useAuth0} from '@auth0/auth0-react'

const NabVarPage = () => {
    const {logout} = useAuth0()
    return ( 
        <Fragment>
            <header className='header'>
                <Grid container >
                    <Grid item xs={7} sm={7} md={7} lg={7}  style={{display:'flex'}}>
                <img className='logo' src='https://imgs.search.brave.com/9vwBHMSDYvbn5B4vNjHd_GvQ3nQekupA2kF1dlJts7g/rs:fit:512:512:1/g:ce/aHR0cDovL2ljb24t/aWNvbnMuY29tL2lj/b25zMi81MTYvUE5H/LzUxMi9jb2luX21v/bmV5X2ljb24taWNv/bnMuY29tXzUxMDkx/LnBuZw'></img>
                <h2 className='titulo'>Mi Ahorro</h2>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}  style={{display:'flex', justifyContent:'flex-end',margin:'auto'}}>
							<Link to="/inicio" className='linksHome'>
                                Inicio
                            </Link>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}  style={{display:'flex', justifyContent:'flex-end',margin:'auto'}}>
							<Link to="/perfil" className='linksHome'>
                                Perfil
                            </Link>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} style={{display:'flex', justifyContent:'flex-end',margin:'auto'}}>
							<Link to="/homePage" className='linksHome'>
                                Mi Grupo
                            </Link>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}  style={{display:'flex', justifyContent:'flex-end',margin:'auto' }}>
                             <Button 
                      variant="contained" 
                      type="submit" 
                      onClick={()=>logout({returnTo:window.location.origin})}
                        >Cerrar Sesion</Button>
                    </Grid>

                </Grid>
            </header>
        </Fragment>
     );
}
 
export default NabVarPage;