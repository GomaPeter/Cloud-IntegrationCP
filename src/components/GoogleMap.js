// ContactUs.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 6.5077,
  lng: 3.3691,
};

const ContactUs = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <LoadScript googleMapsApiKey="AIzaSyCgFVnrypv9F2yoE3WOKX0dnGDoYG1RH4k">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
        <Box mt={3}>
          <Typography variant="body1">
            Our Office Address: Tejuosho Rd, Yaba, Lagos 101241, Lagos
          </Typography>
          <Typography variant="body1">Email: LiveLifeandLove@gmail.com</Typography>
          <Typography variant="body1">Phone: +1 123-456-7890</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
