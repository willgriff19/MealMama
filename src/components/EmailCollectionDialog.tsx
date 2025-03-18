import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { supabase } from "../lib/supabase";

interface EmailCollectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailCollectionDialog({
  isOpen,
  onClose,
}: EmailCollectionDialogProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (supabaseError) throw supabaseError;
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting email:', err);
      setError('Failed to submit email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#fbfcff] border-4 border-[#1e212b] rounded-[42px] p-8 sm:p-10 max-w-[500px] mx-4">
        <DialogHeader>
          <DialogTitle className="font-display font-bold text-[#1e212b] text-2xl sm:text-3xl md:text-4xl text-center mb-6">
            {isSubmitted ? "Thanks for your interest!" : "Coming Soon!"}
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center space-y-4">
            <p className="font-sans text-[#1e212b] text-lg sm:text-xl">
              We'll notify you as soon as MealMama is ready!
            </p>
          </div>
        ) : (
          <>
            <p className="font-sans text-[#1e212b] text-lg sm:text-xl text-center mb-8">
              MealMama is still cooking! Enter your email to be notified when we launch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border-2 border-[#1e212b] rounded-[4.99px] font-sans text-lg focus:outline-none focus:border-[#06d6a0]"
              />

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#06d6a0] hover:bg-[#06d6a0] text-[#1e212b] border-2 border-[#1e212b] rounded-[4.99px] font-medium text-lg sm:text-xl py-3 transition-transform duration-200 hover:scale-105 active:scale-100"
              >
                {isSubmitting ? "Submitting..." : "Notify Me"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
} 