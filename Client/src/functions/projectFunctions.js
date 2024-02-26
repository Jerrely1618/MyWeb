import { supabase } from "../../db";

export async function fetchProjectsByType(type) {
  try {
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
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
