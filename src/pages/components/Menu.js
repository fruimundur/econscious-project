import {
    Button,
    Divider,
    Dropdown,
    IconClipboard,
    IconCopy,
    IconTrash,
    Typography,
  } from '@supabase/ui'
  import { useRouter } from 'next/router';
  import { useSupabaseClient } from '@supabase/auth-helpers-react'

  
  export default function DropdownBasic() {

    const supabaseClient = useSupabaseClient()
    const router = useRouter();

    const handleSignOut = async () => {
      await supabaseClient.auth.signOut();
      router.push('/');
    };

    const aboutPage = async () => {
      router.push('/about');
    };
  

    const Overlay = () => (    
      <>
        <Dropdown.Item onClick={aboutPage}>
          <Typography.Text>About</Typography.Text>
        </Dropdown.Item>

        <Dropdown.Item onClick={handleSignOut}>
          <Typography.Text>Sign out</Typography.Text>
        </Dropdown.Item>
      </>
    )
  
    return (
      <>
        <Dropdown side="bottom" align="center" overlay={<Overlay />}>
        Menu
        </Dropdown>
      </>
    )
  }