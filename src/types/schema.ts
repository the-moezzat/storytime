export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      stories: {
        Row: {
          badges: string[] | null;
          bookUrl: string | null;
          chapters: Json | null;
          created_at: string | null;
          downloadLink: string | null;
          id: number;
          image: string | null;
          numberOfChapters: number | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          badges?: string[] | null;
          bookUrl?: string | null;
          chapters?: Json | null;
          created_at?: string | null;
          downloadLink?: string | null;
          id?: number;
          image?: string | null;
          numberOfChapters?: number | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          badges?: string[] | null;
          bookUrl?: string | null;
          chapters?: Json | null;
          created_at?: string | null;
          downloadLink?: string | null;
          id?: number;
          image?: string | null;
          numberOfChapters?: number | null;
          title?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "stories_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
