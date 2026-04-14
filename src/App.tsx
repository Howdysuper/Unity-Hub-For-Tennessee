/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResourceAssistant from './components/ResourceAssistant';
import Home from './pages/Home';
import Directory from './pages/Directory';
import Submit from './pages/Submit';
import References from './pages/References';
import FAQ from './pages/FAQ';
import Impact from './pages/Impact';
import Volunteer from './pages/Volunteer';
import Stories from './pages/Stories';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/references" element={<References />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
        </main>
        <Footer />
        <ResourceAssistant />
      </div>
    </Router>
  );
}

