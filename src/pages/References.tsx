import { FileText, ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function References() {
  const citations = [
    {
      title: 'Hero Background Image',
      source: 'Unsplash',
      author: 'Community Gathering',
      url: 'https://unsplash.com/photos/1517486808906-6ca8b3f04846',
      note: 'Free to use under Unsplash License.',
    },
    {
      title: 'Typography',
      source: 'System Fonts',
      author: 'Apple/Microsoft',
      note: 'Using standard web-safe system fonts for performance and accessibility.',
    },
    {
      title: 'Icons',
      source: 'Lucide React',
      author: 'Lucide Contributors',
      url: 'https://lucide.dev',
      note: 'Open-source icon library.',
    },
    {
      title: 'Content & Data',
      source: 'Original Work',
      author: 'Student Team',
      note: 'All fictional organization data and text content generated originally for this competition.',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">References & Documentation</h1>
          <p className="text-slate-600 max-w-2xl">
            Official documentation and source citations required for the 2025-26 TSA Webmaster competition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Required PDF Links */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <FileText className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">Required Logs</h2>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="/copyright.pdf" 
                  target="_blank"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-300 hover:bg-indigo-50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
                    <span className="text-sm font-bold text-slate-700">Copyright Checklist</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-indigo-400" />
                </a>

                <a 
                  href="/worklog.pdf" 
                  target="_blank"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-300 hover:bg-indigo-50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
                    <span className="text-sm font-bold text-slate-700">Student Work Log</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-indigo-400" />
                </a>
              </div>

              <div className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-xs text-indigo-800 leading-relaxed">
                  <strong>Technical Prototype Note:</strong> The AI Assistant is included as a <em>Technical Prototype</em> to demonstrate advanced API integration and natural language processing capabilities. It is not a core requirement of the site but serves as a proof-of-concept for future community support scaling.
                </p>
              </div>

              <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Affirmation:</strong> This website was built entirely from scratch using custom React components and Tailwind CSS. No pre-built templates or themes were used.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Source Citations */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-lg font-bold text-slate-900">Source Citations</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {citations.map((cite, i) => (
                  <div key={cite.title} className="p-6 hover:bg-slate-50/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-slate-900">{cite.title}</h3>
                        <p className="text-sm text-slate-500 mt-1">
                          Source: <span className="text-slate-700 font-medium">{cite.source}</span> • Author: {cite.author}
                        </p>
                        <p className="text-xs text-slate-400 mt-2 italic">{cite.note}</p>
                      </div>
                      {cite.url && (
                        <a 
                          href={cite.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:underline"
                        >
                          View Source <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
