import AuthLayout from "@/components/layouts/AuthLayouts/AuthLayout";
import login_photo from "@/assets/images/login_photo.png";
import styles from "./Login.module.css";
import Input from "@/components/ui/Input/Input";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button/Button";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { Link } from "react-router-dom";

type LoginFormData = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <AuthLayout
      title="Find Your Team Build Your Dream."
      description="Great ideas need great hands. Connect with passionate founders and talented creators who share your drive to build the future, one pixel and line of code at a time."
      image={login_photo}
    >
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h1 className={styles.formTitle}>Welcome Back</h1>

          <p className={styles.formDescription}>
            Enter your details to access your workspace and connect with your
            team.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              icon={<HiOutlineMail size={20} />}
              placeholder="Email"
              type="email"
            />

            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <Input
              {...register("password", {
                required: "Password is required",
              })}
              icon={<HiOutlineLockClosed size={20} />}
              type="password"
              placeholder="Password"
            />

            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          <div className={styles.formOptions}>
            <div className={styles.rememberMe}>
              Remember me
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className={styles.forgotPasswordContainer}>
              <span className={styles.forgotPassword}>Forgot Password?</span>
            </div>
          </div>
          <Button type="submit" className={styles.formButton}>
            Login
          </Button>
          <div className={styles.divider}>Or</div>
          <Button type="button" className={styles.ButtonGitHub}>
            <FaGithub size={20} />
            GitHub
          </Button>
        </form>

        <div className={styles.formFooter}>
          <p className={styles.footerText}>
            Don't have an account?
            <Link to="/register" className={styles.footerLink}>
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;
