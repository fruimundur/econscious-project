import { Auth } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Tasks from '../tasks/index'
import { supabase } from '../../lib/supabaseClient';
import styles from '../../styles/login.module.scss'
import About from '../about';


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
        <Auth supabaseClient={supabase} 
          appearance={{
            style: {
              container: { background: '#CBEFDF', margin: '20px', borderRadius: '15px' },
              button: { background: '#79E79A', border: 'none', padding: '20p'},
              anchor: { background: '#FFFFFF', marginLeft: '39px', marginRight: '39px', borderRadius: '15px',  padding: '8px', },
              button: { background: '#79E79A', border: 'none', padding: '8px', borderRadius: '15px'},
              divider:{ background: 'black'},
              label:{ color: '#CBEFDF' },
              input:{border: 'none', fontStyle: 'italic'},
              loader:{ background: 'yellow'},
              message: { background: 'green'},

              // ..
             },
          }}
    />
  ) : (
        // <Tasks tasks={tasks} />
        <About/>
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
