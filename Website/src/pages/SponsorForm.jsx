import React, { useState } from 'react';
import { Send, Users, Building, Mail, Phone, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          to_email: 'ecell@iiitdm.ac.in',
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  return (
    <div className="min-h-screen bg-black font-poppins flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Dots */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-100"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-10 right-10 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-700"></div>

      {/* Main Form */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mb-4 animate-spin-slow">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg">Join our entrepreneurship journey and make an impact</p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-2xl animate-slide-up">
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                placeholder="Full Name"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 outline-none focus:border-blue-500"
              />
              <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            </div>

            {/* Phone */}
            <div className="relative group">
              <input
                type="tel"
                name="phone"
                pattern="^\d+$"
                maxLength={15}
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                placeholder="Phone Number"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 outline-none focus:border-orange-500"
              />
              <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                placeholder="Email Address"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 outline-none focus:border-blue-500"
              />
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            </div>

            {/* Company */}
            <div className="relative group">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => handleFocus('company')}
                onBlur={handleBlur}
                placeholder="Company Name"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 outline-none focus:border-orange-500"
              />
              <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Message */}
          <div className="relative group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              placeholder="Tell us about your sponsorship ideas and how you'd like to partner with us..."
              rows="4"
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 outline-none focus:border-blue-500 resize-none"
            />
            <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`relative group px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-lg
                transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                disabled:opacity-70 disabled:cursor-not-allowed
                focus:outline-none focus:ring-4 focus:ring-blue-500/30
                ${isSubmitting ? 'animate-pulse' : 'hover:shadow-blue-500/25'}
              `}
            >
              <div className="relative flex items-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit</span>
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Status */}
          {submitStatus === 'success' && (
            <div className="flex items-center justify-center space-x-2 p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-400 animate-fade-in">
              <CheckCircle className="w-5 h-5" />
              <span>Sponsorship request sent successfully!</span>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="flex items-center justify-center space-x-2 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400 animate-fade-in">
              <AlertCircle className="w-5 h-5" />
              <span>Failed to send request. Try again.</span>
            </div>
          )}
        </form>
        <p className="text-center mt-8 text-gray-400 animate-fade-in-delayed">We’ll get back to you within 24 hours</p>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(20px); }
          50% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 1s ease-out forwards; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-fade-in-delayed { animation: fade-in-delayed 2s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default SponsorForm;
