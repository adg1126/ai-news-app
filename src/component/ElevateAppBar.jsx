import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import history from '../history';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1
  },
  toolbar: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '4em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2em'
    }
  },
  logo: { marginLeft: '1em', cursor: 'pointer' }
}));

export default function ElevateAppBar({ setArticles }) {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar
          style={{ width: '100vw', left: 0 }}
          position='fixed'
          className={classes.appBar}
        >
          <Toolbar style={{ width: '100vw' }} disableGutters>
            <Typography
              variant='h6'
              className={classes.logo}
              onClick={() => {
                history.push('/');
                setArticles([]);
              }}
            >
              AI News Reader
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbar} />
    </>
  );
}
