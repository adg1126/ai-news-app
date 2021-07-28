import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: 295
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  term: {
    padding: '0 0.5em',
    cursor: 'pointer',
    '& :hover': {
      color: theme.palette.primary.main
    }
  }
}));

export default function CategoryCard({
  params,
  title,
  terms,
  command,
  fetchArticlesStart
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container direction='column' spacing={6}>
          <Grid item>
            <Typography variant='h5' component='h2'>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <>
              <Typography className={classes.pos} variant='h6'>
                Terms:
              </Typography>
              <Grid container>
                {terms.map(t => (
                  <Grid
                    item
                    key={t}
                    className={classes.term}
                    onClick={() => {
                      fetchArticlesStart(params, t);
                    }}
                  >
                    <Typography
                      variant='body1'
                      color='textSecondary'
                      component='p'
                    >
                      {t}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </>
          </Grid>
          <Grid item container direction='column'>
            <Grid item>
              <Typography className={classes.pos} variant='h6'>
                Try saying:
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' color='textSecondary' component='p'>
                {command}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
