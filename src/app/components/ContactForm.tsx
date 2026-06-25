"use client";

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  darkMode: boolean;
  themeClasses: {
    card: string;
    border: string;
    secondaryText: string;
    text: string;
  };
}

const ContactForm: React.FC<ContactFormProps> = ({ darkMode, themeClasses }) => {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const inputClasses = `w-full px-4 py-2.5 rounded-lg border ${themeClasses.border} ${
    darkMode ? 'bg-gray-900' : 'bg-white'
  } ${themeClasses.text} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formId) return;

    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!formId) {
    return (
      <p className={`text-sm ${themeClasses.secondaryText}`}>
        Connect with me on{' '}
        <a
          href="https://www.linkedin.com/in/noam-gal/"
          className="text-blue-500 hover:text-blue-400 font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        to get in touch.
      </p>
    );
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 text-green-500">
        <CheckCircle size={20} />
        <p className="text-sm font-medium">Thanks for reaching out — I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="name" className={`block text-sm font-medium mb-1.5 ${themeClasses.text}`}>
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="email" className={`block text-sm font-medium mb-1.5 ${themeClasses.text}`}>
          Your email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="message" className={`block text-sm font-medium mb-1.5 ${themeClasses.text}`}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${inputClasses} resize-y`}
        />
      </div>
      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle size={16} />
          <span>Something went wrong. Please try again or reach out on LinkedIn.</span>
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm font-medium"
      >
        <Send size={16} />
        {status === 'submitting' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
};

export default ContactForm;
