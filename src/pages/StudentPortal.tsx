import React from 'react';
import { Briefcase, BookOpen, Users, Award } from 'lucide-react';

const features = [
  {
    title: 'Real-world Projects',
    description: 'Work on industry projects to gain practical experience',
    icon: Briefcase,
  },
  {
    title: 'Learning Resources',
    description: 'Access curated learning materials and courses',
    icon: BookOpen,
  },
  {
    title: 'Mentorship',
    description: 'Connect with industry experts for guidance',
    icon: Users,
  },
  {
    title: 'Certifications',
    description: 'Earn certificates for completed projects',
    icon: Award,
  },
];

export function StudentPortal() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Student Portal</h1>
          <p className="text-xl text-gray-400 mb-8">Access resources and opportunities to boost your career</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-card cursor-pointer"
            >
              <feature.icon className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Available Projects</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Project Title {project}</h3>
                <p className="text-gray-400 mb-4">Description of the project and its requirements...</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}