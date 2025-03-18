import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('Starting auth callback...');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        setDebugInfo('Checking initial session...');
        // Add a small delay to ensure Supabase has time to set up the session
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // First try to get the session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);
          setDebugInfo(`Session error: ${sessionError.message}`);
          setError('Failed to get session');
          return;
        }

        if (session) {
          setDebugInfo('Session found, redirecting to dashboard...');
          console.log('Session:', session);
          // Add a small delay before redirecting
          await new Promise(resolve => setTimeout(resolve, 500));
          navigate('/dashboard', { replace: true });
        } else {
          setDebugInfo('No session found, checking user...');
          // No session yet, try to exchange the OAuth code
          const { data: { user }, error: authError } = await supabase.auth.getUser();
          
          if (authError) {
            console.error('Auth error:', authError);
            setDebugInfo(`Auth error: ${authError.message}`);
            setError('Authentication failed');
            setTimeout(() => navigate('/signup', { replace: true }), 2000);
            return;
          }

          if (user) {
            setDebugInfo('User found, checking final session...');
            // Check session one more time after a small delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            const { data: { session: finalSession } } = await supabase.auth.getSession();
            if (finalSession) {
              setDebugInfo('Final session found, redirecting to dashboard...');
              await new Promise(resolve => setTimeout(resolve, 500));
              navigate('/dashboard', { replace: true });
            } else {
              setDebugInfo('No final session found');
              setError('No session found');
              setTimeout(() => navigate('/signup', { replace: true }), 2000);
            }
          } else {
            setDebugInfo('No user found');
            setError('Authentication failed - no user found');
            setTimeout(() => navigate('/signup', { replace: true }), 2000);
          }
        }
      } catch (err) {
        console.error('Callback error:', err);
        setDebugInfo(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`);
        setError('An unexpected error occurred');
        setTimeout(() => navigate('/signup', { replace: true }), 2000);
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#fbfcff] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#1e212b] mb-4">
          {error ? 'Authentication Error' : 'Completing sign in...'}
        </h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <p className="text-[#1e212b] mb-4">{debugInfo}</p>
        {!error && (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#06d6a0] mx-auto"></div>
        )}
        {error && <p className="text-[#1e212b]">Redirecting you back...</p>}
      </div>
    </div>
  );
} 