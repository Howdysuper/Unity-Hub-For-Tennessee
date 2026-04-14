import { Users, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">UnityHub</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Empowering the Tennessee community by connecting residents with essential resources, 
              support services, and local programs across Brentwood and beyond.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="/directory" className="hover:text-indigo-400 transition-colors">Resource Directory</a></li>
              <li><a href="/submit" className="hover:text-indigo-400 transition-colors">Submit a Resource</a></li>
              <li><a href="/references" className="hover:text-indigo-400 transition-colors">References</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@unityhub-tn.org</span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-indigo-400 transition-colors"><Github className="w-5 h-5" /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tennessee UnityHub. TSA Webmaster Competition Entry.</p>
          <p className="mt-2">Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
