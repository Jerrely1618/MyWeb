const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://jfbfvzaaogafcmjerrkh.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchImagesByID() {
  const { data, error } = await supabase.from("Images").select("*");

  if (error) throw error;
  return data;
}
async function fetchProjectsByType(type) {
  console.log("Called");
  const { data, error } = await supabase
    .from("Projects")
    .select("*")
    .eq("type", type);

  if (error) throw error;
  return data;
}
module.exports = {
  fetchImagesByID,
  fetchProjectsByType,
};
