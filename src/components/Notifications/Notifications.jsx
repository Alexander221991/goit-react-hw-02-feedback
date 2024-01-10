import styles from '../FeedbackOptions/feedback-options.module.css';

export const Notification = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};
