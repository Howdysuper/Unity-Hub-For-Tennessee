import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, Heart, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { IMPACT_DATA } from '../constants';

export default function Impact() {
  const stats = [
    { label: 'Total Connections', value: '4,450', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { label: 'Active Volunteers', value: '1,205', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Families Supported', value: '890', icon: Heart, color: 'text-rose-600', bg: 'bg-rose-100' },
    { label: 'Community Awards', value: '12', icon: Award, color: 'text-amber-600', bg: 'bg-amber-100' },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Community Impact</h1>
          <p className="text-slate-600 max-w-2xl">
            UnityHub is more than just a directory. We track our collective progress to ensure 
            Tennessee remains a vibrant, supportive community for everyone.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className={`p-3 rounded-xl w-fit mb-4 ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Connections Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Resource Connections</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={IMPACT_DATA}>
                  <defs>
                    <linearGradient id="colorConnections" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="connections" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorConnections)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-6 text-sm text-slate-500 italic">
              * Data represents the number of successful hand-offs between residents and organizations.
            </p>
          </motion.div>

          {/* Volunteer Growth Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Volunteer Engagement</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={IMPACT_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="volunteers" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-6 text-sm text-slate-500 italic">
              * Monthly active volunteers across all registered Tennessee non-profits.
            </p>
          </motion.div>
        </div>

        {/* Qualitative Impact */}
        <div className="bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our 2030 Vision</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                By 2030, we aim to have 100% of Tennessee residents within a 15-minute walk of essential 
                community support. We're building a digital infrastructure that translates into real-world 
                resilience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span className="text-slate-300">Expand to 500+ verified resources</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span className="text-slate-300">Launch mobile-first crisis response integration</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span className="text-slate-300">Establish a community-led governance board</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <blockquote className="text-xl italic text-slate-200 mb-6">
                "UnityHub changed how we operate. Instead of spending hours searching for partners, 
                we can now connect our clients to the right help in seconds. It's a game-changer for Tennessee."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-lg">
                  JD
                </div>
                <div>
                  <div className="font-bold">Jane Doe</div>
                  <div className="text-sm text-slate-400 text-indigo-400">Director, Brentwood Food Pantry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
