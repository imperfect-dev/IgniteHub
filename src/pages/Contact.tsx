import { useState, useEffect } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

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
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setIsFormSubmitted(true);
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
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {isFormSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={20} />
                    <p className="text-green-700 font-medium">
                      Thanks for reaching out! We'll be in touch soon.
                    </p>
                  </div>
                </div>
              )}

              <form
                action="https://formsubmit.co/dharshansondi.dev@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your idea, suggestion, or how we can help..."
                  />
                </div>

                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value={`${window.location.origin}/contact?success=true`}
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New message from IgniteHub!"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2" size={18} />
                  🚀 Send Message
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
