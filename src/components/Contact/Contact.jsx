import React, { useState } from 'react';
import { Mail, Instagram, Send, Loader2 } from 'lucide-react';
import { InputField } from './FormFields';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Collect data from the form fields
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      // Pointing to your Node.js backend URL
      const response = await fetch('http://localhost:5000/api/contact/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset(); // Clear form on success
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form Error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative z-20 py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Details */}
          <div className="flex flex-col justify-center">
            <span className="text-cyan-500 font-mono text-xs tracking-[0.5em] uppercase mb-4">Get in Touch</span>
            <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-8">
              Let's Crack <br /> Your <span className="text-cyan-500">Code.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400">
               <div className="flex items-center gap-4">
                  <Mail className="text-cyan-500" /> <span>contact@techcrack.com</span>
               </div>
               <div className="flex items-center gap-4">
                  <Instagram className="text-cyan-500" /> <span>@techcrack_official</span>
               </div>
            </div>
          </div>

          {/* Right Side: Lead Form */}
          <div className="bg-white/3 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
            <form onSubmit={handleSubmit}>
              <InputField label="Full Name" name="name" placeholder="John Doe" required />
              <InputField label="Email Address" type="email" name="email" placeholder="john@example.com" required />
              <InputField label="Mobile / WhatsApp" type="tel" name="phone" placeholder="+91 1234567890" required />
              
              <div className="flex flex-col gap-2 mb-8">
                <label className="text-xs font-black uppercase tracking-widest text-cyan-500/80">Project Details</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required
                  placeholder="Tell us about your project..."
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>Sending... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>Send Request <Send size={18} /></>
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="mt-4 text-green-400 text-center font-bold">Message sent! We'll contact you shortly.</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-400 text-center font-bold">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;