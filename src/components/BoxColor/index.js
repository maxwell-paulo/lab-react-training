import style from './style.module.css';

export function BoxColor(props) {
  let color = { backgroundColor: `rgb(${props.r},${props.g},${props.b})` };
  return (
    <div style={color} className={style.boxColorDiv}>
      rgb({props.r},{props.g},{props.b})
    </div>
  );
}
