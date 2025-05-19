import { createClient } from '@supabase/supabase-js'

// Reemplaza con tus propias credenciales
const supabaseUrl = 'https://vnorjoymjgaclwczzzwv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZub3Jqb3ltamdhY2x3Y3p6end2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2Nzg5MTEsImV4cCI6MjA2MzI1NDkxMX0.Voe6PjapxujWvBNBKPJx4cndY6gghVOizvk0jTI3Gsc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
