import styles from './feedbackCard.module.scss';

interface FeedbackCardProps {
  name: string;
  message: string,
  photo: string;
  onClick: () => void;
}

function FeedbackCard({ name, message, photo, onClick }: FeedbackCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.card__top}>
        <div className={styles.card__image}><img src={photo} alt={name}/></div>
        <h4 className={styles.card__title}>{name}</h4>
      </div>
      <p className={styles.card__text}>{message}</p>
    </div>
  );
}

export default FeedbackCard;
