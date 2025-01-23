import React from "react";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center p-12 space-y-6">
        <h1 className="text-4xl font-extrabold">Our Platform</h1>
        <p className="max-w-3xl text-lg">
          Welcome to our innovative platform that connects colleges, companies,
          and students to solve real-world problems. With a focus on fostering
          collaboration and learning, our platform bridges the gap between
          industry and education.
        </p>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/006/802/460/small_2x/businesswoman-reading-documents-at-meeting-business-partner-considering-contract-terms-before-signing-checking-legal-contract-law-conditions-selected-focus-photo.jpg"
          alt="Platform Overview"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Stats Section */}
      <div className="p-12 bg-white text-black">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-indigo-600">150+</h3>
            <p className="text-lg">Registered Companies</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-purple-600">200+</h3>
            <p className="text-lg">Registered Colleges</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-600">10,000+</h3>
            <p className="text-lg">Students Benefited</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="p-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all">
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQFXsBivSW8_kw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695827045738?e=2147483647&v=beta&t=jZTCVxezslJLRzt80gp95ZQaaaYTW7kZKl7Oz2AVyqE"
              alt="Collaboration Icon"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">Seamless Collaboration</h3>
            <p className="text-sm text-center mt-2">
              Connect companies and colleges on a single platform for meaningful
              partnerships.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim8YzblPjAGV6qNdzRUOGa_ZWV9lyKV-H0qCInrg1WyHWt9X6yJLp0mkwFe_tJgXIknP9Wf-DfztcxhQES9jBrhIYjrRpv3Y5WvD2zQ0bX9Bp9-KDwWWi6cby3CuNLtRrx5SPVHOrpoz4F/s1600/Slide7.PNG"
              alt="Real-World Problems Icon"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">Solve Real-World Problems</h3>
            <p className="text-sm text-center mt-2">
              Students gain hands-on experience by solving real-world challenges
              from companies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all">
            <img
              src="https://knnindia.co.in/uploads/newsfiles/SKILL-DEVELOPMENTaSKILL-11-1-2023.jpg"
              alt="Skills Development Icon"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">Skills Development</h3>
            <p className="text-sm text-center mt-2">
              Prepare students for industry by bridging the skills gap and
              building expertise.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all">
            <img
              src="https://img.freepik.com/premium-photo/job-career-work-opportunity-words-wooden-blocks-3d-illustration_764664-23847.jpg?semt=ais_incoming"
              alt="Job Opportunities Icon"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">Job Opportunities</h3>
            <p className="text-sm text-center mt-2">
              Companies discover talent through projects and collaborations,
              making hiring seamless.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all">
            <img
              src="https://img.freepik.com/premium-vector/user-upgrades-their-computers-operating-system-showcasing-various-customizable-features-tools-operating-system-upgrade-customizable-flat-illustration_538213-148204.jpg"
              alt="Customizable Features Icon"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">Customizable Features</h3>
            <p className="text-sm text-center mt-2">
              Colleges can tailor their profiles and projects to attract top
              companies.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all">
            <img
              src="https://getworkrecognized.com/work-achievements-tracker.png"
              alt="Achievements Tracking Icon"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">Track Achievements</h3>
            <p className="text-sm text-center mt-2">
              Showcase college achievements and success stories to build trust
              with companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
