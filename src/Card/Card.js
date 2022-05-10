import React from 'react';
import styles from './Card.css';

const Card = (props) => {
  const cardClasses = [styles.card, props.className];
  if (props.onClick) {
    cardClasses.push(styles.cardCursor);
  }

  const icon = props.icon && (
    <div className={styles.icon}>
      {typeof props.icon === 'object' ? (
        <props.icon />
      ) : (
        <img src={props.icon} alt={props.alt ? props.alt : 'Card icon'} />
      )}
    </div>
  );

  return (
    <div className={cardClasses.join(' ')} onClick={props.onClick}>
      <div className={styles.titleBar}>
        {icon}
        <div className={styles.headingWrap}>
          <p className={styles.subHeading}>{props.subHeading}</p>
          <p className={styles.heading}>{props.heading}</p>
        </div>
      </div>

      <div className={styles.description}>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
