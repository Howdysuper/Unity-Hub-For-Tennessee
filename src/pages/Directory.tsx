import React from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_RESOURCES } from '../constants';
import { ResourceCategory } from '../types';
import ResourceCard from '../components/ResourceCard';

export default function Directory() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState<ResourceCategory>('all');

  const categories: { label: string; value: ResourceCategory }[] = [
    { label: 'All Resources', value: 'all' },
    { label: 'Non-Profits', value: 'non-profit' },
    { label: 'Support Services', value: 'support' },
    { label: 'Events', value: 'event' },
    { label: 'Programs', value: 'program' },
  ];

  const filteredResources = INITIAL_RESOURCES.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Resource Directory</h1>
          <p className="text-slate-600 max-w-2xl">
            Browse our comprehensive list of community resources. Use the search bar and filters 
            to find specific services available in Brentwood and across Tennessee.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name or description..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              <div className="flex items-center gap-2 text-slate-500 mr-2 shrink-0">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat.value
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-slate-500">
            Showing <span className="font-bold text-slate-900">{filteredResources.length}</span> resources
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <SlidersHorizontal className="w-3 h-3" />
            <span>Sorted by relevance</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource, i) => (
                <ResourceCard key={resource.id} resource={resource} index={i} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No resources found</h3>
                <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-6 text-indigo-600 font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
