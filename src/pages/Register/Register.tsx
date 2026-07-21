import AuthLayout from "@/components/layouts/AuthLayouts/AuthLayout";
import SignUp_photo from "@/assets/images/signup_photo.png";
import styles from "./Register.module.css";
import Input from "@/components/ui/Input/Input";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button/Button";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { registerSchema } from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type SignUpFormData = z.infer<typeof registerSchema>;

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };
  return (
    <AuthLayout
      title="Join the Builders Your Journey Starts Here."
      description="Create your account today and connect with passionate minds ready to turn great ideas into reality."
      image={SignUp_photo}
    >
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h1 className={styles.formTitle}>Create Your Account</h1>

          <p className={styles.formDescription}>
            Join BuildTogether to connect with creators and start building your
            future.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <Input
              {...register("name")}
              icon={<HiOutlineUser size={20} />}
              placeholder="Name"
              type="text"
            />

            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <Input
              {...register("email")}
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
              {...register("password")}
              icon={<HiOutlineLockClosed size={20} />}
              type="password"
              placeholder="Password"
            />

            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          <div className={styles.terms}>
            <input type="checkbox" className={styles.checkbox} />
            <p className={styles.termsTitle}>
              I agree to
              <Link className={styles.termsLink} to={""}>
                Terms&Conditions
              </Link>
            </p>
          </div>
          <Button type="submit" className={styles.formButton}>
            Create Account
          </Button>
          <div className={styles.divider}>Or</div>
          <Button type="button" className={styles.ButtonGitHub}>
            <FaGithub size={20} />
            Sign up with GitHub
          </Button>
        </form>

        <div className={styles.formFooter}>
          <p className={styles.footerText}>
            Already have an account?
            <Link to="/login" className={styles.footerLink}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Register;
