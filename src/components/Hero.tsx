import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white">
      <div className="absolute inset-0 gradient-bg opacity-50"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <span className="px-4 py-2 rounded-full glass-effect text-sm font-medium flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Transforming Education & Industry
                </span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block mb-2">Bridge the gap between</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  education and industry
                </span>
              </h1>
              <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Connect students, colleges, and companies on one unified platform. Enhance employability,
                align curricula with industry needs, and find the perfect talent match.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                    <ArrowRight className="ml-2 h-5 w-5 animate-float" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md glass-effect hover:bg-white/20 transition-all duration-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full transform hover:scale-105 transition-all duration-500 rounded-lg shadow-2xl"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="Team collaboration"
        />
      </div>
    </div>
  );
}