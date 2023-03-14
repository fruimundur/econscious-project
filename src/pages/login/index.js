import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (
        <Account session={session} />
      )}
    </div>
  )
}

export default Home

/*
import { useRouter } from 'next/router';
import styles from '../../styles/start.module.scss'


export default function Login() {
const router = useRouter();

  return (
    <div className={styles.test}>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is the Login Page.</p>
    </div>
  );
}
*/