import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we have a session
    const checkSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          navigate('/signup');
          return;
        }

        if (session) {
          // If we have a session, redirect to dashboard
          navigate('/dashboard', { replace: true });
        } else {
          // If no session, redirect to signup
          navigate('/signup', { replace: true });
        }
      } catch (err) {
        console.error('Auth callback error:', err);
        navigate('/signup', { replace: true });
      }
    };

    checkSession();
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