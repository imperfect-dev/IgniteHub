import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Database types
export interface ResourceView {
  id: string;
  resource_id: string;
  category_id: string;
  user_id?: string;
  session_id: string;
  ip_address?: string;
  user_agent?: string;
  referrer?: string;
  viewed_at: string;
  duration_seconds: number;
}

export interface SearchAnalytics {
  id: string;
  search_term: string;
  category_id?: string;
  results_count: number;
  user_id?: string;
  session_id: string;
  filters_applied: Record<string, any>;
  searched_at: string;
}

export interface UserProfile {
  id: string;
  display_name?: string;
  bio?: string;
  avatar_url?: string;
  website_url?: string;
  location?: string;
  points: number;
  reviews_count: number;
  helpful_votes_received: number;
  created_at: string;
  updated_at: string;
}

export interface ResourceReview {
  id: string;
  resource_id: string;
  category_id: string;
  user_id: string;
  rating: number;
  title?: string;
  review_text?: string;
  pros?: string[];
  cons?: string[];
  helpful_count: number;
  unhelpful_count: number;
  is_verified: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  user_profiles?: UserProfile;
}

export interface UserCollection {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  is_public: boolean;
  color: string;
  icon: string;
  items_count: number;
  created_at: string;
  updated_at: string;
}

export interface CollectionItem {
  id: string;
  collection_id: string;
  resource_id: string;
  category_id: string;
  notes?: string;
  added_at: string;
}

export interface UserNotification {
  id: string;
  user_id: string;
  type: string;
  title: string;
  message: string;
  data: Record<string, any>;
  is_read: boolean;
  created_at: string;
}