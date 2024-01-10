import styles from '../FeedbackOptions/feedback-options.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonElements = options.map(name => (
    <button
      onClick={() => onLeaveFeedback(name.toLowerCase())}
      key={name}
      className={styles.button}
    >
      {name}
    </button>
  ));

  return <ul className={styles.list}>{buttonElements}</ul>;
};

export default FeedbackOptions;
