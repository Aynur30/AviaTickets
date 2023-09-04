import classes from './LoadBar.module.scss';

function LoadBar() {
  return (
    <div className={classes['progress-bar__wrapper']}>
      <div className={classes['progress-bar']}>
        <div className={classes['progress-bar__value']}></div>
      </div>
    </div>
  );
}

export default LoadBar;
