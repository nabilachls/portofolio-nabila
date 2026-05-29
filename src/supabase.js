import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase;

if (!supabaseUrl || !supabaseKey) {
  // Fallback: don't throw so the site can run in static/preview mode.
  // Provide a minimal stub that matches the subset of the Supabase client used
  // in this project (mainly `from(...).select()`, `.eq()`, `.order()`, and `channel`).
  console.warn("Supabase env vars not found — running in static preview mode.");

  const emptyResponse = async () => ({ data: [], error: null });
  
  // Create a chainable query builder stub
  const createQueryBuilder = () => ({
    select: () => createQueryBuilder(),
    eq: () => createQueryBuilder(),
    order: () => createQueryBuilder(),
    single: emptyResponse,
    then: (onSuccess, onError) => emptyResponse().then(onSuccess, onError),
  });
  
  // Create subscription stub
  const createSubscription = () => ({
    unsubscribe: () => Promise.resolve(),
  });

  supabase = {
    from: () => createQueryBuilder(),
    channel: () => ({ 
      on: () => ({ 
        subscribe: () => createSubscription() 
      }) 
    }),
    storage: {
      from: () => ({
        upload: async () => ({ error: null })
      })
    }
  };
} else {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export { supabase };