import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/schema";

const supabaseUrl = "https://ftwrxnjzqgqzvrkodecs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0d3J4bmp6cWdxenZya29kZWNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxNzYwOTQsImV4cCI6MjAwNTc1MjA5NH0.JbC6baoi_I4256PpNK95Lq0KqSjy6xRs92kfzLF3a2k";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
