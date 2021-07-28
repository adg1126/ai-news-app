import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: { maxWidth: 345 },
  media: { height: 140 },
  cardActions: {
    padding: '0 20px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  activeCard: {
    borderBottom: '10px solid #22289a'
  }
});

export default function NewsCard({
  activeArticle,
  index,
  description,
  publishedAt,
  source: { name },
  title,
  url,
  urlToImage
}) {
  const classes = useStyles();

  return (
    <Card
      className={classNames(
        classes.root,
        activeArticle === index ? classes.activeArticle : null
      )}
    >
      <CardMedia
        className={classes.media}
        component='img'
        src={
          urlToImage ||
          'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
        }
        title={title}
      />
      <Grid
        container
        justifyContent='space-between'
        style={{ padding: '1em 1em' }}
      >
        <Grid item>
          <Typography variant='body2' color='textSecondary'>
            {new Date(publishedAt).toDateString()}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body2' color='textSecondary'>
            {name}
          </Typography>
        </Grid>
      </Grid>
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' href={url} target='_blank'>
          Learn More
        </Button>
        <Typography variant='body2'>{index}</Typography>
      </CardActions>
    </Card>
  );
}
