const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://jfbfvzaaogafcmjerrkh.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchProjectsByType(type) {
  const { data, error } = await supabase
    .from("Projects")
    .select(
      `
      *,
      Images!inner(*)
    `
    )
    .eq("type", type);

  if (error) throw error;
  return data;
}
module.exports = {
  fetchProjectsByType,
};
