import Spinner from "@/components/ui/Spinner/Spinner";
import styles from "./Button.module.css";

interface ButtonProps  {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${styles.button} ${className ?? ""}`}
    >
      {loading ? <Spinner text={"Loading..."} /> : children}
    </button>
  );
}

export default Button;
