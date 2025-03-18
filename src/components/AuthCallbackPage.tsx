import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle the OAuth callback
    const handleAuthCallback = async () => {
      try {
        // Get the session from URL if available
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          navigate('/signup');
          return;
        }

        if (session) {
          // Successfully authenticated
          navigate('/dashboard');
        } else {
          // No session found
          navigate('/signup');
        }
      } catch (err) {
        console.error('Auth callback error:', err);
        navigate('/signup');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#fbfcff] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1e212b] mb-4">Completing sign in...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#06d6a0] mx-auto"></div>
      </div>
    </div>
  );
} 