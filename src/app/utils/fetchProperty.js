import { supabase } from './supabaseClient';

export const fetchProperties = async () => {
  const { data, error } = await supabase
    .from('properties')
    .select('*');

  if (error) {
    console.error('Error fetching properties:', error);
    return [];
  }

  return data;
};
