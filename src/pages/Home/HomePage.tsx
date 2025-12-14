import { Box, Container, Typography, Card, CardContent, Stack } from '@mui/material';
import { Shield, Zap, Users } from 'lucide-react';
import Button from '../../components/common/Button';
import './Home.scss';
import GlobalConstants from '../../constants/GlobalConstants';

const HomePage = () => {
  const features = [
    {
      icon: <Shield size={32} />,
      title: 'Trusted Vendors',
      description:
        'Handpicked and rigorously reviewed vendors, guaranteeing only the best for your wedding day.',
      path: '/vendors',
    },
    {
      icon: <Zap size={32} />,
      title: 'Easy Planning',
      description:
        'Use our integrated tools to manage bookings, track budgets, and share schedules effortlessly.',
      path: '/plan-wedding',
    },
    {
      icon: <Users size={32} />,
      title: 'Community Feedback',
      description: `Make your final choice confidently by reading verified reviews and seeing real-life results from past ${GlobalConstants.APP_NAME} couples.`,
      path: '/favorites',
    },
  ];

  return (
    <Box className="home-page">
      <Container maxWidth="lg" className="home-hero__container">
        <Box className="home-hero__content">
          <Typography variant="h1" className="home-hero__title" component="h1">
            Your Dream Wedding
            <br />
            <span className="home-hero__title-accent">Starts Here</span>
          </Typography>

          <Typography variant="h5" className="home-hero__subtitle" component="p">
            Discover Sri Lanka's finest wedding vendors and plan your perfect celebration with{' '}
            {GlobalConstants.APP_NAME}. <br /> Where tradition meets modern elegance.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className="home-hero__actions">
            <Button variant="primary" size="large" to="/vendors">
              Explore Vendors
            </Button>
            <Button variant="secondary" size="large" to="/plan-wedding">
              Start Planning
            </Button>
          </Stack>
        </Box>
        <Box className="home-features__grid">
          {features.map((feature, index) => (
            <Box key={index} className="home-feature-card-wrapper">
              <Card
                className="home-feature-card"
                sx={{
                  height: '100%',
                }}
              >
                <CardContent className="home-feature-card__content">
                  <Box className="home-feature-card__icon">{feature.icon}</Box>
                  <Typography variant="h5" className="home-feature-card__title" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" className="home-feature-card__description">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
