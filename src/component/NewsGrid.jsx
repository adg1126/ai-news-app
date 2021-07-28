import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewsCard from './NewsCard';

const useStyles = makeStyles({
  container: { width: '100vw', display: 'flex' },
  cardContainer: { margin: '2em' }
});

export default function NewsGrid({ arr }) {
  const classes = useStyles();

  return (
    <Grid container justifyContent='center' className={classes.container}>
      {arr.map((e, i) => (
        <Grid item key={i} className={classes.cardContainer}>
          <NewsCard {...e} index={i} />
        </Grid>
      ))}
    </Grid>
  );
}
