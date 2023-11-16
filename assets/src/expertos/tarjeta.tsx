import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {ProfileCardProps} from "../home/types"

interface Data {
  avatar: string;
  fullName: string;
  title: string;
  location: string;
  phoneNumber: string;
  additionalInfo: string;
}
interface averquepasa{
  expand:any
}
interface ExpandMoreProps {
  children?: React.ReactNode;
  expand: boolean;
  onClick: () => void;
  'aria-expanded': boolean;
  'aria-label': string;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProfileCard: React.FC<ProfileCardProps> =({ id, fullName, title, location, phoneNumber, categoria, additionalInfo }: ProfileCardProps)  => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
    <CardHeader
      avatar={<Avatar sx={{ bgcolor: red[500] }}>{id}</Avatar>}
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={fullName}
      subheader={title}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        <IconButton color="primary" aria-label="location">
          <LocationOnIcon />
        </IconButton>
        Ubicación: {location}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <IconButton color="primary" aria-label="phone">
          <PhoneIcon />
        </IconButton>
        Teléfono: {phoneNumber}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        {/* Agrega los iconos de FavoriteIcon y ShareIcon importados aquí */}
      </IconButton>
      <IconButton aria-label="share">
        {/* Agrega el icono de ShareIcon importado aquí */}
      </IconButton>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>{additionalInfo}</Typography>
      </CardContent>
    </Collapse>
  </Card>
);

};

export default ProfileCard;
