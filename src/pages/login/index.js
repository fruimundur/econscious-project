import { Auth } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Tasks from '../tasks/index'
import { supabase } from '../../lib/supabaseClient';
import styles from '../../styles/login.module.scss'
import About from '../about';


// export async function getServerSideProps() {
//   let { data } = await supabase.from('tasks').select()

//   return {
//     props: {
//       tasks: data
//     },
//   }
// }

const Login = ({tasks}) => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div>
      {!session ? (
        <Auth supabaseClient={supabase} 
          appearance={{
            style: {
              container: { background: '#daf7eb', marginLeft: '5%', marginRight: '5%', borderRadius: '15px', height: '429px' },
              anchor: { textDecoration: 'none', background: '#FFFFFF', marginLeft: '5%', marginRight: '5%', borderRadius: '15px',  padding: '8px', width: '250px', fontFamily: 'Comfortaa', fontSize: '12px' },
              button: { background: '#79E79A', border: 'none', padding: '8px', borderRadius: '15px',  width: '260px', marginLeft: '10%', marginRight: '5%', fontFamily: 'Comfortaa' },
              divider:{ background: 'black'},
              label:{ color: '#daf7eb', fontFamily: 'Comfortaa' },
              input:{border: 'none', borderBottom: 'solid', borderBottomColor: '#005668', borderBottomWidth: '2px', paddingBottom: '10px', fontFamily: 'Comfortaa' },
              loader:{ background: '#005668'},
              message: { color: '#005668', fontFamily: 'Comfortaa'},

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
