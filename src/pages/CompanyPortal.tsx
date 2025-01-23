import React from 'react';
import { Users, Search, FileCheck, Briefcase } from 'lucide-react';

const candidates = [
  { name: 'John Doe', skills: ['React', 'Node.js', 'Python'], experience: '2 years' },
  { name: 'Jane Smith', skills: ['Java', 'Spring Boot', 'MySQL'], experience: '3 years' },
  { name: 'Mike Johnson', skills: ['Angular', 'TypeScript', 'MongoDB'], experience: '1 year' },
];

export function CompanyPortal() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Company Portal</h1>
          <p className="text-xl text-gray-400 mb-8">Find and hire the best talent for your team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 hover-card">
            <Search className="h-8 w-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Talent Search</h3>
            <p className="text-gray-400">Find candidates based on skills and experience</p>
          </div>
          <div className="glass-card p-6 hover-card">
            <FileCheck className="h-8 w-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Assessment Tools</h3>
            <p className="text-gray-400">Evaluate candidates with custom assessments</p>
          </div>
          <div className="glass-card p-6 hover-card">
            <Briefcase className="h-8 w-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Job Postings</h3>
            <p className="text-gray-400">Post and manage job opportunities</p>
          </div>
        </div>

        <div className="glass-card p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Candidate Pool</h2>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
              Post New Job
            </button>
          </div>
          
          <div className="space-y-4">
            {candidates.map((candidate, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{candidate.name}</h3>
                    <p className="text-gray-400 mb-2">Experience: {candidate.experience}</p>
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}