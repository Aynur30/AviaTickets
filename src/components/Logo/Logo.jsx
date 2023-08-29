import logo from '../../assets/images/logo.svg';
import classes from './Logo.module.scss';

function Logo() {
  return <img src={logo} alt="company logo" className={classes.logo} />;
}

export default Logo;
