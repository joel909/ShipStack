// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// console.log('Supabase URL:', supabaseUrl);
// console.log('Supabase Anon Key:', supabaseAnonKey ? 'Loaded' : 'Not Loaded');

export const supabase = createClient(supabaseUrl, supabaseServiceKey);
export const supabaseAuth = supabase.auth
export const usersTable = supabase.from('users');
