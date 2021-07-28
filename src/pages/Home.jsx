import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CategoryCardContainer from '../containers/CategoryCardContainer';

const categories = [
  {
    params: 'latest-news',
    title: 'Latest News',
    terms: ['Latest News'],
    command: 'Give me the latest news'
  },
  {
    params: 'categories',
    title: 'News by Categories',
    terms: [
      'Business',
      'Entertainment',
      'General',
      'Health',
      'Science',
      'Sports',
      'Technology'
    ],
    command: 'Give the latest Technology news'
  },
  {
    params: 'terms',
    title: 'News by Terms',
    terms: ['BitCoin', 'Smartphones', 'Apple', 'Samsung'],
    command: 'Search for BitCoin'
  },
  {
    params: 'sources',
    title: 'News by Source',
    terms: ['ABC News', 'Wired', 'BBC News', 'Time', 'IGN', 'Buzzfeed', 'CNN'],
    command: 'Give me the news from BBC News'
  }
];

const useStyles = makeStyles({
  container: { width: '100vw', height: '75vh' },
  cardContainer: {
    margin: '2em'
  }
});

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      alignItems={matchesMD ? undefined : 'center'}
      justifyContent='center'
      className={classes.container}
    >
      {categories.map((c, i) => (
        <Grid item key={i} className={classes.cardContainer}>
          <CategoryCardContainer {...c} />
        </Grid>
      ))}
    </Grid>
  );
}
