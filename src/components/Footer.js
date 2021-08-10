import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
  footer: {
     backgroundColor: '#E8E8E8',
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  link: {
    marginRight: '5px',
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" align="center">
        <Link variant="body1" color="textSecondary" href="https://github.com/Rajiv5055">
          <GitHubIcon className={classes.link} />
        </Link>
        <Link variant="body1" color="textSecondary" href="https://www.instagram.com/rajeev__nayan/?hl=en">
         <InstagramIcon className={classes.link} />
        </Link>
        <Link variant="body1" color="textSecondary" href="https://www.facebook.com/profile.php?id=100008857086332">
          <FacebookIcon className={classes.link} />
        </Link>
        <Link variant="body1" color="textSecondary" href="https://www.linkedin.com/in/rajiv-nayan-62a791146/">
          <LinkedInIcon className={classes.link} />
        </Link>
      </Container>
    </footer>
  );
}