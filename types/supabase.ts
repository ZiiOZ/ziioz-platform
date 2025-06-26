export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          content: string;
          created_at: string;
          image_url: string | null;
          user_id: string;
        };
        Insert: {
          id?: string;
          content: string;
          created_at?: string;
          image_url?: string | null;
          user_id: string;
        };
        Update: {
          content?: string;
          image_url?: string | null;
          user_id?: string;
        };
      };
      // Add your other tables here, e.g. comments, boosts, etc.
    };
    Views: {};
    Functions: {};
  };
};
