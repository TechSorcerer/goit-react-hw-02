import styles from "./Description.module.css";

export const Description = () => {
  return (
    <>
      <h1 className={styles.descTitle}>Sip Happens Café</h1>
      <p className={styles.descText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};
