import styles from '../FeedbackOptions/feedback-options.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.firstContainer}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
