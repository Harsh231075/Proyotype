
import { GraduationCap, Building2, Briefcase, Users, BookOpen, BarChart } from 'lucide-react';

const features = [
  {
    name: 'For Students',
    description: 'Access real-world projects and connect with industry mentors to develop job-ready skills.',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'For Colleges',
    description: 'Align curricula with industry needs and track student progress through comprehensive dashboards.',
    icon: Building2,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'For Companies',
    description: 'Post job openings and evaluate potential hires through project-based assessments.',
    icon: Briefcase,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Mentorship',
    description: 'Get guidance from industry experts and track your progress with detailed feedback.',
    icon: Users,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    name: 'Curriculum Alignment',
    description: 'Stay updated with industry-relevant course content and practical learning materials.',
    icon: BookOpen,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Analytics',
    description: 'Track performance metrics and get insights into skill development progress.',
    icon: BarChart,
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export function Features() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            QUASAR 2.0 provides a comprehensive suite of tools and features to connect students,
            colleges, and companies.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} shadow-lg`}>
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white group-hover:text-indigo-300 transition-colors duration-300">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}