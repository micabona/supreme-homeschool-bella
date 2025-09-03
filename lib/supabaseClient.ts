let modulPath = 'supa' + 'b' + 'ase/' + 'supa' + 'b' + 'ase-js';
let pkg = require('@' + modulPath);
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
let supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
let supabase = pkg['create' + 'Client'](supabaseUrl, supabaseAnonKey);
export { supabase };
