import { forwardRef, type InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, icon, type = "text", placeholder, className = "", ...rest },
    ref,
  ) => {
    return (
      <label className={styles.label}>
        {label && <span className={styles.labelText}>{label}</span>}

        <div className={styles.inputWrapper}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={`${styles.input} ${className}`}
            {...rest}
          />
        </div>
      </label>
    );
  },
);

Input.displayName = "Input";

export default Input;
