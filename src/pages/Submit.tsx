import React from 'react';
import { Send, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Submit() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Add a Resource</h1>
          <p className="text-slate-600">
            Help us expand the UnityHub directory. If you know of a local organization, 
            service, or program that benefits Brentwood or Tennessee, please submit the details below.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
            >
              <div className="bg-indigo-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Info className="w-6 h-6 opacity-80" />
                  <h2 className="text-lg font-bold">Submission Guidelines</h2>
                </div>
                <p className="text-indigo-100 text-sm mt-2">
                  All submissions are reviewed by our team for accuracy and community relevance 
                  before being published to the public directory.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-bold text-slate-700">Organization Name *</label>
                    <input
                      required
                      type="text"
                      id="title"
                      placeholder="e.g. Brentwood Youth Center"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-bold text-slate-700">Category *</label>
                    <select
                      required
                      id="category"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    >
                      <option value="">Select a category</option>
                      <option value="non-profit">Non-Profit</option>
                      <option value="support">Support Service</option>
                      <option value="event">Community Event</option>
                      <option value="program">Community Program</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-bold text-slate-700">Description *</label>
                  <textarea
                    required
                    id="description"
                    rows={4}
                    placeholder="Briefly describe the services or mission of this resource..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact" className="text-sm font-bold text-slate-700">Contact Info *</label>
                    <input
                      required
                      type="text"
                      id="contact"
                      placeholder="Phone or Email"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-bold text-slate-700">Website (Optional)</label>
                    <input
                      type="url"
                      id="website"
                      placeholder="https://example.org"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-bold text-slate-700">Physical Address (Optional)</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="123 Community Way, Brentwood, TN"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="pt-4">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full btn-primary py-4 rounded-xl text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit for Review <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-xl p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Submission Received!</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Thank you for contributing to the Tennessee Community Resource Hub. 
                Our team will review the details and add it to the directory shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Submit another resource
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex items-start gap-4 p-4 bg-amber-50 border border-amber-100 rounded-xl">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Privacy Note:</strong> Your contact information used for this submission will only be used 
            if we need to clarify details about the resource. It will not be shared publicly.
          </p>
        </div>
      </div>
    </div>
  );
}
