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
    <div className={style.container}>
      <img src={cardImg} alt="card img" />
      <p>.... .... .... {finalNumber}</p>
      <div>
        <p>
          {month}/{year}
        </p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}
