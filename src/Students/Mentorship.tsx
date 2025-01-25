import { motion } from 'framer-motion';
import { Users, MessageSquare, Calendar, Star, Award, Briefcase } from 'lucide-react';

export function Mentorship() {
  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Software Engineer',
      company: 'Google',
      expertise: ['Web Development', 'System Design', 'Career Growth'],
      rating: 4.9,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Microsoft',
      expertise: ['Product Strategy', 'UX Design', 'Agile'],
      rating: 4.8,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Data Scientist',
      company: 'Netflix',
      expertise: ['Machine Learning', 'Python', 'Data Analysis'],
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
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
          <h1 className="text-3xl font-bold text-gray-900">Find Your Mentor</h1>
          <p className="mt-2 text-gray-600">Connect with industry experts and accelerate your career</p>
        </motion.div>

        {/* Featured Mentors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.role}</p>
                    <div className="flex items-center mt-1">
                      <Briefcase className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">{mentor.company}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-2 text-gray-900 font-medium">{mentor.rating}</span>
                    <span className="ml-1 text-gray-500">({mentor.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Call
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentorship Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Find a Mentor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Expert Guidance',
                description: 'Learn from professionals with years of industry experience',
              },
              {
                icon: Award,
                title: 'Career Growth',
                description: 'Get personalized advice to accelerate your career progression',
              },
              {
                icon: MessageSquare,
                title: 'Network Building',
                description: 'Connect with industry leaders and expand your professional network',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <benefit.icon className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}