"use client";

import { useState } from 'react';
import { Box, Grid, Typography, Paper,} from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export default function Anasayfa() {
  return (
    <Box sx={{
      flexGrow: 1,
      p: 3,
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      backgroundImage: 'url(/view-3d-bee-with-honeycomb.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      {/* Başlık */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          mb: 4,
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '12px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            padding: 2,
          }}
        >
          {/* Sol görsel */}
          <Box
            sx={{
              flex: 1,
              height: '300px',
              backgroundImage: 'url(https://cdn.vectorstock.com/i/500p/67/95/lovely-bee-flying-on-yellow-background-vector-31226795.jpg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: 'rotate(-90deg)',
            }}
          />

          {/* Orta Görsel */}
          <Box
            sx={{
              flex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/006/225/257/small_2x/a-cute-bee-flying-with-honeycomb-and-line-of-heart-isolated-on-white-background-illustration-cute-cartoon-character-free-vector.jpg)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundColor: 'transparent',
              height: '300px',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                color: 'Black',
                padding: 15,
                borderRadius: '8px',
              }}
            >
              KOVAN TAŞIMA REHBERI
            </Typography>
          </Box>

          {/* Sağ görsel */}
          <Box
            sx={{
              flex: 1,
              height: '300px',
              backgroundImage: 'url(https://cdn.vectorstock.com/i/500p/67/95/lovely-bee-flying-on-yellow-background-vector-31226795.jpg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: 'rotate(-270deg)',
            }}
          />
        </Box>
      </Typography>

      <Accordion sx={{ mb: 4 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
            Ek alan veya SearchBox yeri
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: '#555' }}>
            ...
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/*Harita Kısmı*/}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper elevation={6} sx={{ overflow: 'hidden', borderRadius: '12px' }}>
            <Box sx={{ height: 500 }}>
              <MapContainer center={[39.925533, 32.866287]} zoom={6} style={{ height: '100%', borderRadius: '12px' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
              </MapContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} container direction="column" spacing={4}>
          <Grid item>
            <Paper elevation={6} sx={{ p: 3, backgroundColor: '#fff', borderRadius: '12px', textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                Haritadan Seçilen Bölgeye Göre Gelecek Çıktı [1]
              </Typography>
              <Typography sx={{ color: '#555', mb: 2 }}>
                ...
              </Typography>
            </Paper>
          </Grid>

          <Grid item>
            <Paper elevation={6} sx={{ p: 3, backgroundColor: '#fff', borderRadius: '12px', textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5', }}>
                Haritadan Seçilen Bölgeye Göre Gelecek Çıktı [2]
              </Typography>
              <Typography sx={{ color: '#555', mb: 2 }}>
                ...
              </Typography>
            </Paper>
          </Grid>


          <Grid item>
            <Paper elevation={6} sx={{ p: 3, backgroundColor: '#fff', borderRadius: '12px', textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5', }}>
                Haritadan Seçilen Bölgeye Göre Gelecek Çıktı [3]
              </Typography>
              <Typography sx={{ color: '#555', mb: 2 }}>
                ...
              </Typography>
            </Paper>
          </Grid>
        </Grid>



        <Grid item xs={12}>
          <Paper elevation={6} sx={{ p: 3, backgroundColor: '#fff', borderRadius: '12px' }}>
            <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
              Kovanların yeni bölgelere taşınması sırasında dikkat edilmesi gereken Hususlar
            </Typography>


            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold'}}>Polen kaynaklarına yakınlık</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ...
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold' }}>Arı Stresi</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ...
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold' }}>İklim Değişiklikleri</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ...
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold' }}>Araç Ve Ekipman</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ...
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold' }}>Ülke Ve Bölge Kuralları</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ...
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ mt: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold' }}>Çiçeklenme Dönemleri</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ...
                </Typography>
              </AccordionDetails>
            </Accordion>

          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}