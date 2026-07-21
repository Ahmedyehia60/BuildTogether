import styles from "./Spinner.module.css";

interface SpinnerProps {
  text: string;
  variant?: "wave" | "text";
  fullScreen?: boolean;
}

function Spinner({ text, variant = "text", fullScreen }: SpinnerProps) {
    const spinnerClass = `${styles.spinner} ${
      fullScreen ? styles.fullScreen : ""
    }`;

  if (variant === "text") {
    return (
      <div className={spinnerClass}>
        <span className={styles.text}>{text}</span>
      </div>
    );
  }
  return (
    <div className={spinnerClass}>
      <div className={styles.wave}>
        {text.split("").map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Spinner;
