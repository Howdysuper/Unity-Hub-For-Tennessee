import { Link } from 'react-router-dom';
import { ArrowRight, Search, PlusCircle, FileText, Heart, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { INITIAL_RESOURCES } from '../constants';
import ResourceCard from '../components/ResourceCard';

export default function Home() {
  const highlightedResources = INITIAL_RESOURCES.filter(r => r.highlighted).slice(0, 3);

  const stats = [
    { label: 'Verified Resources', value: '120+', icon: ShieldCheck },
    { label: 'Monthly Visitors', value: '5k+', icon: Zap },
    { label: 'Community Partners', value: '45', icon: Heart },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/5 skew-x-12 transform translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-teal-500/5 -skew-x-12 transform -translate-x-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
                2025-26 Community Initiative
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Empowering <span className="text-indigo-600">Tennessee</span> Through Connection.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                UnityHub is your central gateway to Brentwood and Tennessee non-profits, support services, and community programs. 
                Find what you need, when you need it.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/directory" className="btn-primary px-8 py-4 rounded-xl text-lg flex items-center gap-2">
                  Explore Directory <Search className="w-5 h-5" />
                </Link>
                <Link to="/submit" className="bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center gap-2">
                  Add Resource <PlusCircle className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://picsum.photos/seed/community/800/600" 
                  alt="Community Hub" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="font-bold text-slate-900">Local Support</span>
                </div>
                <p className="text-xs text-slate-500">Connecting over 5,000 residents to essential services monthly.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Community Spotlights</h2>
              <p className="text-slate-600">
                Discover local organizations making a significant impact in Brentwood and Tennessee this month. 
                These resources are vetted and highly recommended by our community partners.
              </p>
            </div>
            <Link to="/directory" className="text-indigo-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All Resources <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedResources.map((resource, i) => (
              <ResourceCard key={resource.id} resource={resource} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Preview Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Measuring Our Impact</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe in transparency and data-driven community support. 
                Our platform tracks thousands of connections every month to ensure 
                no resident is left behind.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">4.4k+</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Connections</div>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">1.2k+</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Volunteers</div>
                </div>
              </div>
              <Link to="/impact" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Explore Our Impact Data <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 rotate-2">
              <div className="flex items-center justify-between mb-8">
                <h4 className="font-bold text-slate-900">Growth Trend</h4>
                <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase">
                  +24% vs Last Month
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Food Security', val: 85, color: 'bg-indigo-500' },
                  { label: 'Youth Programs', val: 65, color: 'bg-teal-500' },
                  { label: 'Senior Support', val: 45, color: 'bg-amber-500' },
                ].map(item => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-600">{item.label}</span>
                      <span className="font-bold text-slate-900">{item.val}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${item.color}`} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Voices of Tennessee</h2>
            <p className="text-slate-600">
              Behind every resource is a story of resilience and community. 
              Read how local organizations are changing lives every day across Brentwood and Tennessee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl cursor-pointer"
            >
              <img 
                src="https://picsum.photos/seed/story1/800/500" 
                alt="Community Story" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">Success Story</span>
                <h3 className="text-2xl font-bold text-white mb-4">"The Food Pantry saved my family during the winter."</h3>
                <Link to="/stories" className="text-white/80 text-sm font-medium flex items-center gap-2 group-hover:text-white transition-colors">
                  Read Sarah's Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl cursor-pointer"
            >
              <img 
                src="https://picsum.photos/seed/story2/800/500" 
                alt="Community Story" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8 flex flex-col justify-end">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-2">Community Impact</span>
                <h3 className="text-2xl font-bold text-white mb-4">How Green Space is reclaiming local parks.</h3>
                <Link to="/stories" className="text-white/80 text-sm font-medium flex items-center gap-2 group-hover:text-white transition-colors">
                  Read the Full Report <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Missing a Resource?</h2>
          <p className="text-indigo-100 text-lg mb-10">
            Our hub grows through community contribution. If you know of a non-profit, 
            support service, or event that should be listed, let us know!
          </p>
          <Link to="/submit" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg">
            Submit a New Resource <PlusCircle className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
