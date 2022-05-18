import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: './Inicio',
    text: 'Inicio',
  },
  {
    id: 2,
    url: './Perfil',
    text: 'Perfil',
  },
  {
    id: 3,
    url: '/Mi grupo',
    text: 'Mi grupo',
  },
    {
    id: 4,
    url: '/logout',
    text: 'Cerrar sesión',
  },


];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },

];
