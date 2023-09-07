import { User } from "@supabase/supabase-js";
import { useQueryClient } from "react-query";

export default function useUser() {
  const data = useQueryClient().getQueryData(["user"]) as User;

  return data;
}
