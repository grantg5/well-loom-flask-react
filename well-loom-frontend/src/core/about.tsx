import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText
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
        <Typography variant="h6" color="text.secondary" >
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