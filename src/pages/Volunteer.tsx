import { Heart, Calendar, MapPin, ArrowRight, Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Volunteer() {
  const opportunities = [
    {
      id: 1,
      title: 'Food Pantry Assistant',
      org: 'Brentwood Food Pantry',
      time: 'Tues/Thurs, 9am - 1pm',
      location: '101 Main St, Brentwood',
      description: 'Help sort donations and distribute groceries to community members across Tennessee.',
      tags: ['Urgent', 'Physical'],
      color: 'bg-rose-100 text-rose-700'
    },
    {
      id: 2,
      title: 'After-School Tutor',
      org: 'Downtown Youth Center',
      time: 'Mon-Fri, 3pm - 6pm',
      location: '400 Oak Ave',
      description: 'Provide academic support to middle and high school students in math and science.',
      tags: ['Education', 'Weekly'],
      color: 'bg-indigo-100 text-indigo-700'
    },
    {
      id: 3,
      title: 'Park Cleanup Crew',
      org: 'Tennessee Green Space Initiative',
      time: 'Saturday, 8am - 12pm',
      location: 'Brentwood Central Park',
      description: 'Join us for our monthly park restoration and planting event in Tennessee.',
      tags: ['Outdoor', 'Monthly'],
      color: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 4,
      title: 'Senior Companion',
      org: 'Senior Wheels Tennessee',
      time: 'Flexible Hours',
      location: 'Brentwood Area',
      description: 'Visit with local Tennessee seniors or help them with light errands and grocery shopping.',
      tags: ['Social', 'Flexible'],
      color: 'bg-amber-100 text-amber-700'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Make a Difference in <span className="text-indigo-600">Tennessee</span>.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Your time is the most valuable resource you can give. Connect with local organizations 
              that need your skills and passion to drive change across Brentwood and Tennessee.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-600 shadow-sm">
                <Users className="w-4 h-4 text-indigo-500" />
                <span>1,200+ Active Volunteers</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-600 shadow-sm">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>45+ Partner Organizations</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/volunteer/800/500" 
                alt="Volunteers working together" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Open Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opp, i) => (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                      {opp.title}
                    </h3>
                    <p className="text-indigo-600 font-semibold text-sm">{opp.org}</p>
                  </div>
                  <div className="flex gap-2">
                    {opp.tags.map(tag => (
                      <span key={tag} className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${opp.color}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed">
                  {opp.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{opp.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{opp.location}</span>
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                  Apply to Volunteer <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Can't find the right fit?</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Tell us about your skills and interests, and we'll match you with an organization 
            that needs exactly what you have to offer.
          </p>
          <Link to="/submit" className="btn-primary px-10 py-4 rounded-xl text-lg inline-flex items-center gap-2">
            Register as a Volunteer <Users className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
