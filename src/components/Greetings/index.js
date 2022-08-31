import style from './style.module.css';

export function Greetings(props) {
  if (props.lang === 'de') {
    return <p className={style.greetingsP}>Hallo {props.children}</p>;
  }
  if (props.lang === 'fr') {
    return <p className={style.greetingsP}>Bonjour {props.children}</p>;
  }
  if (props.lang === 'en') {
    return <p className={style.greetingsP}>Hello {props.children}</p>;
  }
  if (props.lang === 'es') {
    return <p className={style.greetingsP}>Hola {props.children}</p>;
  }
}
