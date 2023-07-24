export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      stories: {
        Row: {
          badges: string[] | null
          bookUrl: string | null
          created_at: string | null
          downloadLink: string | null
          id: number
          image: string | null
          numberOfChapters: number | null
          title: string | null
        }
        Insert: {
          badges?: string[] | null
          bookUrl?: string | null
          created_at?: string | null
          downloadLink?: string | null
          id?: number
          image?: string | null
          numberOfChapters?: number | null
          title?: string | null
        }
        Update: {
          badges?: string[] | null
          bookUrl?: string | null
          created_at?: string | null
          downloadLink?: string | null
          id?: number
          image?: string | null
          numberOfChapters?: number | null
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
