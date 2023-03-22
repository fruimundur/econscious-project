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
        <div className={styles.mainContainer}>
          <div className={styles.container}>
          <h1 className={styles.header}>Login</h1>
        <Auth 
          supabaseClient={supabase} 
          providers={false}
          appearance={{
            style: {
              container: { borderRadius: '15px', height: '420px' },
              anchor: { textDecoration: 'none', background: '#FFFFFF', borderRadius: '15px',  padding: '8px', width: '250px', fontFamily: 'Comfortaa', fontSize: '12px' },
              button: { background: '#3deb80', border: 'none', padding: '8px', borderRadius: '15px',  width: '260px', alignContent: 'center', fontFamily: 'Comfortaa'},
              label:{ color: '#daf7eb', fontFamily: 'Comfortaa' },
              input:{border: 'none', borderBottom: 'solid', borderBottomColor: '#005668', borderBottomWidth: '2px', paddingBottom: '10px', fontFamily: 'Comfortaa', color: '#005668', marginTop: '10px' },
              loader:{ background: '#005668'},
              message: { color: '#005668', fontFamily: 'Comfortaa'},

              // ..
             },
             
          }}
          localization={{
            variables: {
              sign_in: {
                email_input_placeholder: 'Email',
                password_input_placeholder: 'Password',
                button_label: 'Login',
                link_text: 'Aldready have an account? Login',
              },
              sign_up: {
                email_input_placeholder: 'Email',
                password_input_placeholder: 'Password',
                button_label: 'Sign up',
                link_text: 'Sign up',
              },
            },
          }}
    />  
        </div>
        <img className={styles.steps} src="https://uacyvtcygmdnzwicfuvv.supabase.co/storage/v1/object/public/tasks/icons/steps.png" alt="steps" />
    </div>
  ) : (
        // <Tasks tasks={tasks} />
        <About/>
        //<Account session={session} />
      )}
    </div>
  )
}

export default Login