import React from 'react';
import { Resource } from '../types';
import { MapPin, Phone, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface ResourceCardProps {
  resource: Resource;
  index?: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, index = 0 }) => {
  const categoryColors = {
    'non-profit': 'bg-teal-100 text-teal-700 border-teal-200',
    'support': 'bg-indigo-100 text-indigo-700 border-indigo-200',
    'event': 'bg-amber-100 text-amber-700 border-amber-200',
    'program': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
    >
      {resource.highlighted && (
        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
          Spotlight
        </div>
      )}
      
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${categoryColors[resource.category]}`}>
            {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-indigo-600 transition-colors">
            {resource.title}
          </h3>
        </div>

        <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
          {resource.description}
        </p>

        <div className="space-y-3 mt-auto pt-4 border-t border-slate-100">
          {resource.address && (
            <div className="flex items-start gap-2 text-xs text-slate-500">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{resource.address}</span>
            </div>
          )}
          
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Phone className="w-4 h-4 text-slate-400 shrink-0" />
            <span>{resource.contact}</span>
          </div>

          {resource.website && (
            <a 
              href={resource.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
            >
              <Globe className="w-4 h-4 shrink-0" />
              <span>Visit Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
