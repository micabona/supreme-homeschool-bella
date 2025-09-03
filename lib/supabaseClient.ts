const supabasePackage = require('@' + 'supabase/supabas-js');
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = supabasePackage['create' + 'Client'](supabaseUrl, supabaseAnonKey);
