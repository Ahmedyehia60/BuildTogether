import styles from "./AuthLayout.module.css";
import Logo from "@/components/ui/Logo/Logo";

interface AuthLayoutProps {
  title: string;
  description: string;
  image: string;
  children: React.ReactNode;
}

function AuthLayout({ title, description, image, children }: AuthLayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Logo />
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <div className={styles.rightSide}>{children}</div>
    </div>
  );
}

export default AuthLayout;
