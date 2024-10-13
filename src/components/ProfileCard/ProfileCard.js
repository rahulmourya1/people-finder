// src/components/ProfileCard/ProfileCard.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/profile/${profile.id}`);
  };
  const handleShowSummary = () => {
    navigate(`/profile/${profile.id}?summary=true`);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={profile.photo}
        alt={profile.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profile.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profile.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleViewDetails}>View Details</Button>
        <Button size="small" onClick={handleShowSummary}>Summary</Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
