// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

// console.log('Supabase URL:', supabaseUrl);
// console.log('Supabase Anon Key:', supabaseAnonKey ? 'Loaded' : 'Not Loaded');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const supabaseAuth = supabase.auth
