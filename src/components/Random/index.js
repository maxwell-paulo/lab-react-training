import style from './style.module.css';

export function Random(props) {
  return (
    <p className={style.randomP}>
      Random value between {props.min} and {props.max} =
      {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}
    </p>
  );
}
