import styles from "./Feedback.module.css";

export const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <h2 className={styles.optTitle}>Feedback</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};
