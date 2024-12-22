import classes from './Title.module.css';

function Title() {
  return (
    <div className={`${classes['title-container']}`}>
      <h1 >
        Climate monitor
      </h1>
    </div>
  );
}

export default Title;