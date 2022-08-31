import style from './style.module.css';

export function IdCard(props) {
  return (
    <div className={style.container}>
      <div>
        <img src={props.picture} alt="img" />
      </div>
      <div>
        <p>
          <span className={style.containerSpan}>First name: </span>{' '}
          {props.firstName}
        </p>
        <p>
          <span className={style.containerSpan}>Last name: </span>
          {props.lastName}
        </p>
        <p>
          <span className={style.containerSpan}>Gender: </span>
          {props.gender}
        </p>
        <p>
          <span className={style.containerSpan}>Height: </span>
          {props.height / 100}m
        </p>
        <p>
          <span className={style.containerSpan}>Birth: </span>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
