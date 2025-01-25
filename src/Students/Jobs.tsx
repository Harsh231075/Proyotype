import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, DollarSign, Clock, Building2, Search } from 'lucide-react';

export function Jobs() {
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      type: 'Internship',
      salary: '$40-50/hr',
      posted: '2 days ago',
      logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'AI Solutions Inc',
      location: 'Remote',
      type: 'Internship',
      salary: '$35-45/hr',
      posted: '1 week ago',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    },
    {
      id: 3,
      title: 'Product Design Intern',
      company: 'Design Studio',
      location: 'New York, NY',
      type: 'Internship',
      salary: '$30-40/hr',
      posted: '3 days ago',
      logo: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Find Your Next Opportunity</h1>
          <p className="mt-2 text-gray-600">Discover internships and entry-level positions</p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <select className="w-full py-2 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">All Job Types</option>
                <option value="internship">Internship</option>
                <option value="entry">Entry Level</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center text-gray-600">
                      <Building2 className="h-5 w-5 mr-2 text-gray-400" />
                      {job.company}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-5 w-5 mr-2 text-gray-400" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-gray-400" />
                      {job.posted}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Job Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Briefcase, title: 'Software Development', count: 234 },
              { icon: Briefcase, title: 'Data Science', count: 156 },
              { icon: Briefcase, title: 'Design', count: 98 },
              { icon: Briefcase, title: 'Marketing', count: 167 },
            ].map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              >
                <category.icon className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.count} positions</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}