import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Link } from 'react-router-dom'
import Chip from '@material-ui/core/Chip';
//import image from './Date_Masamune.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    width: 270,
    margin:10

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],

  },
  isFavorite: {
      color:'red'
  },
  noFavorite: {
      color:'grey'
  }
}));
const JobCard = ({lord, searchVal, search}) => {
    const [image,setImage] = React.useState(null)
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    React.useEffect(() => {
        setImage(require('../../assets/lords-photo/'+lord.img))
    },[])
  
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              JV
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={lord.name}
          subheader={lord.status}
        />
       {image ? <img src={image.default} style={{
            width:80,
            height:80,
            marginLeft:15,
            objectFit:"cover"

        }}/>: ""}
 
        <CardContent>
            <Typography variant="h5" component="h2">
            seeks: {lord.seeks}
            </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            province :{lord.city}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton   aria-label="add to favorites">
            <PlaylistAddIcon/>
          </IconButton>
        </CardActions>
      </Card>
    );
}

export default JobCard