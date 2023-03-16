import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
//import Account from '../components/Account'
import Tasks from '../tasks/index'
import { supabase } from '../../lib/supabaseClient';
import styles from '../../styles/login.module.scss'


export async function getServerSideProps() {
  let { data } = await supabase.from('tasks').select()

  return {
    props: {
      tasks: data
    },
  }
}

const Login = ({tasks}) => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className={styles.container}>
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (
        <Tasks tasks={tasks} />
        //<Account session={session} />
      )}
    </div>
  )
}

export default Login

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
