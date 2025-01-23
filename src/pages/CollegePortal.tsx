import React from 'react';
import { BarChart, Users, BookOpen, Award, Briefcase } from 'lucide-react';

const stats = [
  { label: 'Total Students', value: '1,234', icon: Users },
  { label: 'Placement Rate', value: '92%', icon: Award },
  { label: 'Active Courses', value: '45', icon: BookOpen },
  { label: 'Industry Partners', value: '50+', icon: Briefcase },
];

export function CollegePortal() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">College Dashboard</h1>
          <p className="text-xl text-gray-400 mb-8">Monitor and manage your institution's performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 hover-card">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-8 w-8 text-indigo-400" />
                <span className="text-3xl font-bold text-white">{stat.value}</span>
              </div>
              <h3 className="text-lg text-gray-300">{stat.label}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Placements</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((placement) => (
                <div key={placement} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-semibold">Student Name {placement}</h3>
                      <p className="text-gray-400">Company {placement}</p>
                    </div>
                    <span className="text-indigo-400 font-semibold">₹8.5 LPA</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Course Performance</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((course) => (
                <div key={course} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-semibold">Course {course}</h3>
                      <p className="text-gray-400">Department {course}</p>
                    </div>
                    <div className="flex items-center">
                      <BarChart className="h-5 w-5 text-green-400 mr-2" />
                      <span className="text-green-400">92%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}