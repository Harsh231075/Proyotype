import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Clock, Star, Award } from 'lucide-react';

export function Learning() {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      description: 'Learn the fundamentals of machine learning algorithms and applications.',
      progress: 65,
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.8,
      enrolled: 1234,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=225&q=80',
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and MongoDB.',
      progress: 30,
      duration: '12 weeks',
      level: 'Advanced',
      rating: 4.9,
      enrolled: 2345,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=400& <boltAction type="file" filePath="src/pages/Learning.tsx">h=225&q=80',
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      description: 'Learn statistical analysis, Python, and data visualization.',
      progress: 0,
      duration: '10 weeks',
      level: 'Beginner',
      rating: 4.7,
      enrolled: 1876,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=225&q=80',
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
          <h1 className="text-3xl font-bold text-gray-900">My Learning Path</h1>
          <p className="mt-2 text-gray-600">Track your progress and continue learning</p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {course.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                    <div
                      className="h-full bg-green-500"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {course.level}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{course.rating}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {course.enrolled.toLocaleString()} students
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-indigo-700 transition-colors"
                >
                  <Play className="h-4 w-4 mr-2" />
                  {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Award, title: 'Quick Learner', description: 'Completed 5 courses in 30 days' },
              { icon: Star, title: 'Top Performer', description: 'Achieved 95% average score' },
              { icon: Award, title: 'Dedication', description: '30-day study streak' },
              { icon: Star, title: 'Peer Leader', description: 'Helped 50+ students' },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <achievement.icon className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}