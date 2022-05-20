import React,{Fragment} from 'react';
import NabVarPage from '../navBar/navBarPage';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import cochinito from '../../imagenes/imagen-cochinito.jpg'
import Pensar from '../../imagenes/imagen-pensar.jpg'
import Ventajas from '../../imagenes/imagen-ventajas.jpg'
import { Card } from "@nextui-org/react";
const Inicio = () => {
  return ( 
   <Fragment>
     <NabVarPage/>
     <Box style={{width:'80%', display:'flex', marginLeft:'150px',marginTop:'2rem'}}>
     <Card bordered >
      <Grid container>
        <Grid item xs={4} sm={4} md={4} lg={4}   style={{display:'flex',justifyContent:'center'}}>
          <img src={cochinito} ></img>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} >
          <Grid item xs={12} sm={12} md={12} lg={12}  style={{display:'flex',justifyContent:'center'}}>
          <h1  style={{color:'#2F8DD8'}}>Sobre nuestro cochinito App</h1>
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7} style={{marginLeft:'180px'}}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod maiores ea aspernatur repellat ex cum mollitia nam, dolor animi adipisci asperiores laboriosam, architecto eaque qui odio a ut beatae exercitationem.</h3>
          </Grid>
        </Grid>
      </Grid>
    </Card>
     </Box>
     <Box style={{width:'80%', display:'flex', marginLeft:'150px',marginTop:'2rem'}}>
     <Card bordered >
      <Grid container>
        <Grid item xs={4} sm={4} md={4} lg={4}   style={{display:'flex',justifyContent:'center'}}>
          <img src={Pensar} ></img>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} >
          <Grid item xs={12} sm={12} md={12} lg={12}  style={{display:'flex',justifyContent:'center'}}>
          <h1 style={{color:'#2F8DD8'}}>¿Como se usa?</h1>
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7} style={{marginLeft:'180px'}}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod maiores ea aspernatur repellat ex cum mollitia nam, dolor animi adipisci asperiores laboriosam, architecto eaque qui odio a ut beatae exercitationem.</h3>
          </Grid>
        </Grid>
      </Grid>
    </Card>
     </Box>
     <Box style={{width:'80%', display:'flex', marginLeft:'150px',marginTop:'2rem'}}>
     <Card bordered >
      <Grid container>
        <Grid item xs={4} sm={4} md={4} lg={4}   style={{display:'flex',justifyContent:'center'}}>
          <img src={Ventajas} ></img>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} >
          <Grid item xs={12} sm={12} md={12} lg={12}  style={{display:'flex',justifyContent:'center'}}>
          <h1 style={{color:'#2F8DD8'}}>Ventajas</h1>
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7} style={{marginLeft:'180px'}}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod maiores ea aspernatur repellat ex cum mollitia nam, dolor animi adipisci asperiores laboriosam, architecto eaque qui odio a ut beatae exercitationem.</h3>
          </Grid>
        </Grid>
      </Grid>
    </Card>
     </Box>

   </Fragment>
   );
}
 
export default Inicio;