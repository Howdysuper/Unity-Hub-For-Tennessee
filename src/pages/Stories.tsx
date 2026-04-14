import { Link } from 'react-router-dom';
import { Quote, ArrowRight, Calendar, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function Stories() {
  const stories = [
    {
      id: 1,
      title: 'From Food Insecurity to Community Advocate',
      author: 'Marcus Thompson',
      date: 'March 15, 2025',
      excerpt: 'How the Brentwood Food Pantry provided more than just meals—it provided a path to stability and a new career.',
      image: 'https://picsum.photos/seed/story1/800/600',
      category: 'Success Story'
    },
    {
      id: 2,
      title: 'The Garden That Grew a Neighborhood',
      author: 'Elena Rodriguez',
      date: 'February 28, 2025',
      excerpt: 'A vacant lot transformed into a thriving community garden, bringing together residents of all ages.',
      image: 'https://picsum.photos/seed/story2/800/600',
      category: 'Community Impact'
    },
    {
      id: 3,
      title: 'Mentorship: Changing One Life at a Time',
      author: 'David Chen',
      date: 'January 12, 2025',
      excerpt: 'A look into the Brentwood Youth Center’s mentorship program and the lasting bonds formed between mentors and students.',
      image: 'https://picsum.photos/seed/story3/800/600',
      category: 'Youth Programs'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Community Stories</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Real stories from real people. Discover the human impact of the resources 
            and organizations listed on UnityHub across Tennessee.
          </p>
        </div>

        {/* Featured Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl mb-20 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto overflow-hidden">
              <img 
                src="https://picsum.photos/seed/featured/1200/800" 
                alt="Featured success story" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                Featured Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                "UnityHub was the bridge I needed when I felt most alone."
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                After losing her job during the winter, Sarah found the support she needed 
                through the Tennessee Free Clinic and Senior Wheels Tennessee. This is her journey 
                of resilience and the community that stood by her.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <User className="w-4 h-4" />
                  <span>Sarah Jenkins</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>April 2, 2025</span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
                Read Full Story <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stories.map((story, i) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3]">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold uppercase tracking-wider">
                    {story.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 hover:text-indigo-600 transition-colors cursor-pointer">
                {story.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                {story.excerpt}
              </p>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  By <span className="text-slate-600 font-medium">{story.author}</span>
                </div>
                <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-indigo-600 hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Submission CTA */}
        <div className="mt-24 bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Quote className="w-64 h-64 -translate-x-1/4 -translate-y-1/4" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 relative z-10">Have a story to share?</h2>
          <p className="text-indigo-100 text-lg lg:text-xl mb-12 max-w-2xl mx-auto relative z-10">
            We want to hear about your experiences with Tennessee community resources. 
            Your story could be the inspiration someone else needs.
          </p>
          <Link 
            to="/submit"
            className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl relative z-10 inline-block"
          >
            Submit Your Story
          </Link>
        </div>
      </div>
    </div>
  );
}
