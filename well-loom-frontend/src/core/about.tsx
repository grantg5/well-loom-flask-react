import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Stack,
  Divider,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export function About() {
  return (
    <Box sx={{ fontFamily: 'sans-serif', width: '100vw', textAlign: 'center' }}>
      <Box sx={{ bgcolor: 'grey.50', pt: 6, px: 5 }}>
        <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom>
          About Well Loom
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          One thing that we all chase is a greater sense of well being. Whether that's through a sense of purpose & finding
          meaningfulness throughout life, coping with life's struggles more skillfully, or feeling good and capable in these
          vessels we call our bodies, it's something all humans can unite on.
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Well Loom provides a guide through the many ways in which one can improve their sense of well being, helping you
          identify what benefits (and doesn't benefit) you most, and plan for life events that may significantly elevate
          your experience in this life.
        </Typography>
      </Box>

      <Box sx={{ bgcolor: 'white', pt: 10, px: 2 }}>
        <Typography variant="h4" gutterBottom>
          What is well being?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
            <Paper elevation={2} sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
                <FavoriteIcon color="error" sx={{ fontSize: 40, mr: 2 }} />
                <Box textAlign="left">
                <Typography variant="h6" color="text.primary">Physical Well-Being</Typography>
                <Typography color="text.secondary">
                    Nurture your body through exercise, nutrition, and rest so that you can feel at your best throughout the day.
                </Typography>
                </Box>
            </Paper>
            <Paper elevation={2} sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
                <PsychologyIcon color="success" sx={{ fontSize: 40, mr: 2 }} />
                <Box textAlign="left">
                <Typography variant="h6" color="text.primary">Mental Well-Being</Typography>
                <Typography color="text.secondary">
                    Cope with past wounds, enhance mental resilience, and process the challenges of life in healthy ways.
                </Typography>
                </Box>
            </Paper>
            <Paper elevation={2} sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
                <SelfImprovementIcon color="warning" sx={{ fontSize: 40, mr: 2 }} />
                <Box textAlign="left">
                <Typography variant="h6" color="text.primary">Spiritual Well-Being</Typography>
                <Typography color="text.secondary">
                    Connect with what lies beyond your sense of self, and gain unconditional love, acceptance, and meaning.
                </Typography>
                </Box>
            </Paper>
        </Grid>
      </Box>

      <Box sx={{ bgcolor: 'yellow.50', pt: 10, px: 2 }}>
        <Typography variant="h4" gutterBottom>
          Area to Theory to Practice
        </Typography>
        <Paper elevation={1} sx={{ p: 4 }}>
          <Typography variant="h6" color="text.secondary">
            Each area of well being contains mountains of theories on how one lives a good life through them, with subsequent
            practices that can help you grow in said areas.
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ bgcolor: 'white', pt: 10, px: 2 }}>
        <Typography variant="h4" gutterBottom>
          This site helps you:
        </Typography>
        <List sx={{ maxWidth: 800, mx: 'auto' }}>
          <ListItem>
            <ListItemText primary="Discover theories on and practical approaches to improving well-being" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Track what practices seem to help over time" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Get recommendations on what to try next based on where you are day-to-day" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Discover, prepare for, and process events that may significantly improve your well being" />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ bgcolor: 'red.50', py: 12, px: 2 }}>
        <Typography variant="h4" gutterBottom>
          Disclaimer
        </Typography>
        <Typography variant="h6" color="text.secondary">
          The information provided on Well Loom is for educational purposes only and is not a substitute for professional
          medical or mental health advice. Always consult a qualified professional for personal concerns.
        </Typography>
      </Box>
    </Box>
  );
}

// export function About() {
//     return (
//         <div className="font-sans w-screen text-center mx-auto">
//             <div className="bg-gray-50 pb-12 pt-12 pl-20 pr-20">
//                 <h1 className="text-4xl font-bold text-gray-800">About Well Loom</h1>
//                 <p className="text-lg text-gray-600">
//                 One thing that we all chase is a greater sense of well being. Whether that's through a sense of purpose & finding meaningfulness throughout life, coping with
//                 life's struggles more skillfully, or feeling good and capable in these vessels we call our bodies, it's something all humans can unite on.
//                 </p>

//                 <p className="text-lg text-gray-600 pt-6">
//                 Well Loom provides a guide through the many ways in which one can improve their sense of well being, helping you identify what benefits (and doesn't
//                 benefit) you most, and plan for life events that may significantly elevate your experience in this life.
//                 </p>
//             </div>
//             <section className="pb-12 pt-12 pr-6 pl-6 bg-white">
//                 <h2 className="section-title">What is well being?</h2>
//                 <div className="grid gap-6 sm:grid-cols-3">
//                 <div className="horizontal-card">
//                     <span className="material-icons text-red-500 text-4xl mb-2 sm:mb-0 sm:mr-4">favorite</span>
//                     <div>
//                     <h3 className="text-xl font-medium text-gray-700">Physical Well-Being</h3>
//                     <p className="text-gray-600">Nurture your body through exercise, nutrition, and rest so that you can feel at your
//                         best throughout the day.</p>
//                     </div>
//                 </div>
//                 <div className="horizontal-card">
//                     <span className="material-icons text-green-500 text-4xl mb-2 sm:mb-0 sm:mr-4">psychology</span>
//                     <div>
//                     <h3 className="text-xl font-medium text-gray-700">Mental Well-Being</h3>
//                     <p className="text-gray-600">Cope with past wounds, enhance mental resilience, and process the challenges of life
//                         in healthy ways.</p>
//                     </div>
//                 </div>
//                 <div className="horizontal-card">
//                     <span className="material-icons text-orange-500 text-4xl mb-2 sm:mb-0 sm:mr-4">self_improvement</span>
//                     <div>
//                     <h3 className="text-xl font-medium text-gray-700">Spiritual Well-Being</h3>
//                     <p className="text-gray-600">Connect with what lies beyond your sense of self, and gain unconditional love,
//                         acceptance, and meaning.</p>
//                     </div>
//                 </div>
//                 </div>
//             </section>

//             <section className="bg-yellow-50 pb-12 pt-12 pr-6 pl-6">
//                 <h2 className="section-title">Area to Theory to Practice</h2>
//                 <div className="flex flex-col sm:flex-row items-centershadow-md rounded-lg p-6">
//                 <p className="text-gray-600 text-lg text-center">
//                     Each area of well being contains mountains of theories on how one lives a good life through them, with
//                     subsequent practices that can help you grow in said areas.
//                 </p>
//                 </div>
//             </section>

//             <section className="bg-white pb-12 pt-12 pr-6 pl-6">
//                 <h2 className="section-title">This site helps you:</h2>
//                 <ul className="list-none text-gray-700 text-lg">
//                 <li className="p-2">Discover theories on and practical approaches to improving well-being</li>
//                 <li className="p-2">Track what practices seem to help over time</li>
//                 <li className="p-2">Get recommendations on what to try next based on where you are day-to-day</li>
//                 <li className="p-2">Discover, prepare for, and process events that may signficantly improve your well being</li>
//                 </ul>
//             </section>

//             <section className="bg-red-50 pb-12 pt-12 pr-6 pl-6">
//                 <h2 className="section-title">Disclaimer</h2>
//                 <p className="text-gray-600">
//                 The information provided on Well Loom is for educational purposes only and is not a substitute for professional
//                 medical or mental health advice. Always consult a qualified professional for personal concerns.
//                 </p>
//             </section>
//         </div>
//     );
// }