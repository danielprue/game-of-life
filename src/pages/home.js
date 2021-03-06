import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core';
import Footer from '../components/Footer';

const useStyles = makeStyles({
  container: {
    margin: '0 auto',
    maxWidth: '1024px',
    height: '55vh',
  },
  title1: {
    fontSize: '36px',
    display: 'block',
    paddingTop: '20%',
  },
  title2: {
    fontSize: '128px',
  },
  link: {
    textDecoration: 'none',
  },
  homeButton: {
    fontSize: '48px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '4% 20%',
  },
});

const Home = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='static'>
        <div className={classes.container}>
          <p1 className={classes.title1}>John Conway's</p1>
          <p2 className={classes.title2}>Game of Life</p2>
        </div>
      </AppBar>
      <div className={classes.buttonContainer}>
        <Link to='/game' className={classes.link}>
          <Button
            variant='contained'
            color='primary'
            className={classes.homeButton}
          >
            Start
          </Button>
        </Link>
        <Link to='/about' className={classes.link}>
          <Button
            variant='contained'
            color='primary'
            className={classes.homeButton}
          >
            About
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
