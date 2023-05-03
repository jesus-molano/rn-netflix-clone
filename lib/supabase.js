import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://almzaiymjejdzfutrqwz.supabase.co'
const SUPABASE_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsbXphaXltamVqZHpmdXRycXd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwMTIyNzMsImV4cCI6MTk5ODU4ODI3M30.XfHfN-S0fTvMLcOf3YTGGHSXDJcckShLbZI3zpk7cz4'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)