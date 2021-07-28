import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewsCard from './NewsCard';

const useStyles = makeStyles({
  container: { width: '100vw', display: 'flex' },
  cardsContainer: { margin: '2em' },
  card: { minWidth: 275 }
});

export default function NewsGrid({ arr }) {
  const classes = useStyles();

  const commands = ['Open article number [4]', 'Go back'];

  const renderCard = text => (
    <Card className={classes.root}>
      <CardContent>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <Typography variant='h6'>Try saying:</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6'>{text}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Grid container justifyContent='center' className={classes.container}>
        {commands.map((text, i) => (
          <Grid item className={classes.cardsContainer}>
            {renderCard(text)}
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent='center' className={classes.container}>
        {arr.map((e, i) => (
          <Grid item key={i} className={classes.cardsContainer}>
            <NewsCard {...e} index={i} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
