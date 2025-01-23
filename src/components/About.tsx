import React from "react";

export const About = () => {
  const pricingDetails = [
    {
      title: "Basic Plan (For Colleges)",
      features: [
        "Access to job and project postings",
        "Student dashboard for task assignments",
        "Mentor tools for tracking progress",
      ],
      price: "₹1,00,000/year",
      bgColor: "bg-blue-50",
    },
    {
      title: "Premium Plan (For Colleges)",
      features: [
        "All Basic Plan features",
        "Advanced analytics for tracking student outcomes",
        "Customizable dashboards for branding",
        "Priority support and updates",
      ],
      price: "₹3,00,000/year",
      bgColor: "bg-green-50",
    },
    {
      title: "Company Subscription",
      features: [
        "Unlimited job and project postings",
        "Access to pre-screened, skilled candidates",
        "Sponsored challenges for direct engagement",
        "Dedicated dashboard to track student performance",
      ],
      price: "₹2,00,000/year",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">

        <p className="text-lg text-gray-600 mb-12">
          Our platform bridges the gap between academia and industry, offering tailored subscription plans for colleges and companies to enhance collaboration, learning, and hiring.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {pricingDetails.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${plan.bgColor}`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{plan.title}</h3>
              <ul className="text-gray-600 mb-6 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <span className="text-green-500 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-bold text-gray-800">{plan.price}</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


