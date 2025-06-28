import { useState, useEffect } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

import PageHeader from '../components/layout/PageHeader';
import ContentContainer from '../components/layout/ContentContainer';

const contactMethods = [
  {
    icon: <Mail className="text-purple-600" size={24} />,
    title: 'Email Us',
    description:
      'Got a resource suggestion or feedback? We read every message and try to respond within 24 hours.'
  },
  {
    icon: <MessageSquare className="text-purple-600" size={24} />,
    title: 'Join the Community',
    description:
      'Connect with fellow young innovators, showcase your projects, exchange ideas, and explore opportunities to collaborate and grow together.'
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Check if Supabase is configured
  const supabaseConfigured = isSupabaseConfigured();

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate form fields
  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Message is required');
      return false;
    }
    return true;
  };

  // Submit to FormSubmit as fallback
  const submitToFormSubmit = async () => {
    try {
      const formSubmitData = new FormData();
      formSubmitData.append('name', formData.name.trim());
      formSubmitData.append('email', formData.email.trim());
      formSubmitData.append('message', formData.message.trim());
      formSubmitData.append('_subject', 'New message from IgniteHub!');
      formSubmitData.append('_captcha', 'false');
      formSubmitData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/dharshansondi.dev@gmail.com', {
        method: 'POST',
        body: formSubmitData,
        mode: 'no-cors' // This prevents CORS issues
      });

      // With no-cors mode, we can't check response status, so assume success
      console.log('Message sent via FormSubmit fallback service');
      return true;
    } catch (error) {
      console.error('FormSubmit submission failed:', error);
      throw error;
    }
  };

  // Submit to Supabase
  const submitToSupabase = async () => {
    if (!supabaseConfigured) {
      throw new Error('Supabase not configured');
    }

    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }
      ]);

    if (error) {
      console.error('Supabase submission error:', error);
      throw error;
    }

    console.log('Message sent via Supabase');
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setSubmitStatus('idle');
    setErrorMessage('');

    // Validate form
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Try Supabase first if configured
      if (supabaseConfigured) {
        try {
          await submitToSupabase();
          // Success - reset form and show success message
          setFormData({ name: '', email: '', message: '' });
          setSubmitStatus('success');
          return;
        } catch (supabaseError) {
          console.warn('Supabase submission failed, falling back to FormSubmit:', supabaseError);
          // Continue to FormSubmit fallback
        }
      }

      // Use FormSubmit as fallback (or primary if Supabase not configured)
      try {
        await submitToFormSubmit();
        // Success - reset form and show success message
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('success');
      } catch (formSubmitError) {
        console.error('FormSubmit submission also failed:', formSubmitError);
        throw new Error('Unable to send message at this time. Please try again later or contact us directly at dharshansondi.dev@gmail.com');
      }
      
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      setErrorMessage(error.message || 'Failed to send message. Please try again or contact us directly at dharshansondi.dev@gmail.com');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear status messages after 5 seconds
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Check for success parameter in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setSubmitStatus('success');
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Get in Touch"
        subtitle="Have a suggestion, question, or want to contribute? We'd love to hear from you!"
        gradient="from-purple-600 to-pink-600"
      />

      <ContentContainer className="max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">{method.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Want to Contribute?
              </h3>
              <p className="text-gray-700">
                IgniteHub is always growing! If you know of amazing resources that should be featured,
                or if you'd like to help curate content, let us know. We're building this together.
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-3" size={20} />
                <div>
                  <p className="text-blue-800 font-medium">Direct Email</p>
                  <p className="text-blue-700 text-sm">
                    You can also reach us directly at: <strong>dharshansondi.dev@gmail.com</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Configuration Info */}
            {!supabaseConfigured && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="text-yellow-600 mr-3" size={20} />
                  <div>
                    <p className="text-yellow-800 font-medium">Using Fallback Service</p>
                    <p className="text-yellow-700 text-sm">
                      Contact form will use FormSubmit service. Messages will be sent directly to email.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={20} />
                    <p className="text-green-700 font-medium">
                      Thanks for reaching out! We'll be in touch soon.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="text-red-600 mr-3" size={20} />
                    <div>
                      <p className="text-red-700 font-medium">
                        {errorMessage || 'Something went wrong. Please try again.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tell us about your idea, suggestion, or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      🚀 Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default ContactPage;