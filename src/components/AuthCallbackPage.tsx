import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // First try to get the session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);
          setError('Failed to get session');
          return;
        }

        if (session) {
          // We have a session, redirect to dashboard
          navigate('/dashboard', { replace: true });
        } else {
          // No session yet, try to exchange the OAuth code
          const { error: authError } = await supabase.auth.getUser();
          if (authError) {
            console.error('Auth error:', authError);
            setError('Authentication failed');
            setTimeout(() => navigate('/signup', { replace: true }), 2000);
            return;
          }
          
          // Check session one more time
          const { data: { session: finalSession } } = await supabase.auth.getSession();
          if (finalSession) {
            navigate('/dashboard', { replace: true });
          } else {
            setError('No session found');
            setTimeout(() => navigate('/signup', { replace: true }), 2000);
          }
        }
      } catch (err) {
        console.error('Callback error:', err);
        setError('An unexpected error occurred');
        setTimeout(() => navigate('/signup', { replace: true }), 2000);
      }
    };

    handleCallback();
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#fbfcff] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1e212b] mb-4">Authentication Error</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <p className="text-[#1e212b]">Redirecting you back...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbfcff] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1e212b] mb-4">Completing sign in...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#06d6a0] mx-auto"></div>
      </div>
    </div>
  );
} 