import visa from '../../assets/images/visa.png';
// import master from '../../assets/images/master-card.svg';

import style from './style.module.css';

export function CreditCard(props) {
  let cardImg = '';
  if (props.type === 'Visa') {
    cardImg = visa;
  }
  // if (props.type === 'Master Card') {
  //   cardImg = master;
  // }

  let finalNumber = props.number.slice(12, 16);

  let month = '';
  if (props.expirationMonth < 10) {
    month = `0${props.expirationMonth}`;
  } else {
    month = props.expirationMonth;
  }

  let year = props.expirationYear.toString().slice(2, 4);

  let bgcolor = { backgroundColor: `${props.bgColor}` };
  let textColor = { color: `${props.color}` };

  return (
    <div className={style.container} style={bgcolor}>
      <div className={style.imgDiv}>
        <img className={style.containerImg} src={cardImg} alt="card img" />
      </div>
      <p style={textColor} className={style.cardNumber}>
        .... .... .... {finalNumber}
      </p>
      <div className={style.containerDiv}>
        <p style={textColor} className={style.infosText}>
          Expires {month}/{year}
        </p>
        <p style={textColor} className={style.infosText}>
          {props.bank}
        </p>
      </div>
      <p style={textColor} className={style.infosText}>
        {props.owner}
      </p>
    </div>
  );
}
