import { Json } from "./schema";

// type IBook = Database["public"]["Tables"]["stories"]["Row"];

// export default IBook;
export default interface IBook {
  badges?: string[] | null;
  bookUrl?: string | null;
  chapters: Json;
  created_at?: string | null;
  downloadLink?: string | null;
  id?: number;
  image?: string | null;
  numberOfChapters: number | null;
  title: string | null;
  user_id: string | null;
}

// export type Story = Database["public"]["Tables"]["stories"]["Row"];
