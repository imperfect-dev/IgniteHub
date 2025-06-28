import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { toast } from 'sonner';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    if (!isSupabaseConfigured()) {
      toast.error('Newsletter signup requires Supabase configuration');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: email.trim() }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast.error('This email is already subscribed!');
        } else {
          throw error;
        }
      } else {
        setIsSubscribed(true);
        setEmail('');
        toast.success('Successfully subscribed to newsletter!');
      }
    } catch (error: any) {
      console.error('Newsletter signup error:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center">
          <CheckCircle className="text-green-600 mr-3" size={20} />
          <div>
            <p className="text-green-800 font-medium">Thanks for subscribing!</p>
            <p className="text-green-700 text-sm">You'll receive updates about new resources and features.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Mail className="text-purple-600 mr-3" size={24} />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Stay Updated</h3>
          <p className="text-gray-600 text-sm">Get notified about new resources and features</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-3">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={isSubmitting}
          className="flex-1"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting || !isSupabaseConfigured()}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      
      {!isSupabaseConfigured() && (
        <div className="mt-3 flex items-center text-yellow-600">
          <AlertCircle size={16} className="mr-2" />
          <span className="text-sm">Newsletter requires Supabase configuration</span>
        </div>
      )}
    </div>
  );
};

export default NewsletterSignup;