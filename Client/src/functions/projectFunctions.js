import { supabase } from "../../db";

export async function fetchProjectsByType(type) {
  try {
    console.log(type);
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
    console.log("Fetched projects:", data);
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
