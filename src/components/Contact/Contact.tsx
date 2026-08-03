import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Github, MapPin, CheckCircle2, Send, AlertCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xgopbaod");

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Let's build something <span className="text-blue-400">extraordinary</span> together.
            </h2>
            <p className="text-slate-400 text-lg mb-12">
              Whether you have a question about infrastructure, a development project, 
              or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Email</p>
                  <p className="text-lg font-medium">rolansaad@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-lg font-medium">Manggahan Pasig, PH</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-12">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/rolan-s-68628239" },
                { Icon: Github, href: "https://github.com/rolan1018" }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <input 
                        id="name"
                        required
                        name="name"
                        type="text" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                        placeholder="Your name here"
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input 
                        id="email"
                        required
                        name="email"
                        type="email" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                        placeholder="provide valid email"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <input 
                      id="subject"
                      required
                      name="subject"
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                      placeholder="Let me know your inquiry"
                    />
                    <ValidationError 
                      prefix="Subject" 
                      field="subject"
                      errors={state.errors}
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                      id="message"
                      required
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 resize-none"
                      placeholder="How can I help you?"
                    ></textarea>
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  
                  {state.errors && (
                    <div className="flex items-center space-x-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="w-4 h-4" />
                      <span>Something went wrong. Please check the fields above.</span>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} RAS Portfolio. All rights reserved.
        </div>
      </div>
    </section>
  );
}
