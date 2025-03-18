import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/dashboard');
      } else {
        navigate('/signup');
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#fbfcff] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1e212b] mb-4">Signing you in...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#06d6a0] mx-auto"></div>
      </div>
    </div>
  );
} 