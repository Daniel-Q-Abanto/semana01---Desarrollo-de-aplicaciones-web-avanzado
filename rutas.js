
  const express = require('express');
  const path = require('path');
  const router = express.Router();
  
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
  });
  
  router.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'nosotros.html'));
  });
  
  router.get('/servicios', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'servicios.html'));
  });
  
  router.get('/producto', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'producto.html'));
  });
  
  router.get('/marcas', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'marcas.html'));
  });
  
  router.get('/equipo', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'equipo.html'));
  });
  
  router.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'contacto.html'));
  });
  
  router.post('/enviar-contacto', (req, res) => {
    console.log('Formulario recibido:', req.body);
    res.send('Gracias por contactarnos. Nos comunicaremos pronto.');
  });
  
  module.exports = router;