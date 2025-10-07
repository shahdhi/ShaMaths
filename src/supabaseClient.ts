import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://arlqwkkmjpvzchwksvyq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybHF3a2ttanB2emNod2tzdnlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4MjkwMTQsImV4cCI6MjA3NTQwNTAxNH0.1k4tc-I9rqkG7aCS5VijyJ_JAUDs48LvdR_mffsrmlo';

export const supabase = createClient(supabaseUrl, supabaseKey);
