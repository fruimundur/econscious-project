import { useRouter } from 'next/router';
import styles from '../../styles/Start.module.scss'


export default function Login() {
const router = useRouter();

  return (
    <div className={styles.test}>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is the Login Page.</p>
    </div>
  );
}