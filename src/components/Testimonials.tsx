import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "QUASAR 2.0 helped me land my dream job by connecting me with real industry projects.",
    author: "Sarah Chen",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "As a college, we've seen a significant improvement in our placement rates since implementing QUASAR 2.0.",
    author: "Dr. James Wilson",
    role: "Dean of Engineering",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The platform has revolutionized our hiring process. We now find candidates who are truly ready for industry challenges.",
    author: "Michael Rodriguez",
    role: "HR Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Trusted by Students, Colleges, and Companies
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              See what our users have to say about their experience with QUASAR 2.0
            </p>
          </div>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-3 shadow-lg">
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="relative">
                    <p className="text-lg text-gray-600 italic">{testimonial.content}</p>
                    <div className="mt-6 flex items-center">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={testimonial.image}
                        alt={testimonial.author}
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-indigo-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}