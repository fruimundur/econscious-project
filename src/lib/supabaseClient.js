import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://uacyvtcygmdnzwicfuvv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhY3l2dGN5Z21kbnp3aWNmdXZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyNjcyNzUsImV4cCI6MTk5Mzg0MzI3NX0.mbgonV8CIfKeQSQVdKO_x2zWVxvcm1cGyHfECQPFzds')