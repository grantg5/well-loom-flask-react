import { CheckCircle, Leaf, Sprout } from 'lucide-react';

export default function Home() {
  const problems = [
    "Tried meditation apps but they don't stick?",
    "Read self-help books that didn't help?",
    "Therapy waitlists too long or too expensive?",
    "Don't know where to start with mental health?"
  ];

  const benefits = [
    "Your primary challenge identified from 9 core wellness areas",
    "An 8-week personalized program (not generic advice)",
    "Specific practices proven to work for your pattern",
    "Curated resources: books, videos, exercises, and therapist guides",
    "Phase-based check-ins to track what's working",
    "Alternative approaches if something isn't clicking"
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Leaf className="text-green-700" size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-900 leading-tight">
            Stop Wasting Time on Wellness Solutions
            <br />
            That Don't Match Your Problem
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Get a personalized 8-week program based on your specific challenges—not generic advice that never quite fits.
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full shadow-md transition-all font-medium">
            Take 10-Minute Assessment
          </button>
          <p className="text-sm text-gray-600 mt-3">
            No account required • Free assessment
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-12 bg-orange-50 rounded-2xl shadow-sm p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Sound familiar?
          </h3>
          <div className="space-y-3 mb-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white rounded-xl">
            <p className="text-gray-800">
              The problem isn't you. It's that most wellness advice is one-size-fits-all—and your challenges are unique.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold mb-3 text-gray-900">
            How It Works
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Like nurturing a garden, wellness takes time and the right approach for your unique needs
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-12 bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sprout className="text-green-700" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">
              What You'll Get
            </h3>
          </div>
          <div className="space-y-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-green-700 mt-0.5 flex-shrink-0" size={20} />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-green-700 rounded-2xl p-10 text-white shadow-lg">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Find What Actually Works?
          </h3>
          <p className="text-lg mb-6 opacity-95">
            Take the assessment now. No account needed.
          </p>
          <button className="bg-white text-green-800 hover:bg-green-50 px-8 py-3 rounded-full shadow-md transition-all font-medium">
            Start Your Free Assessment
          </button>
          <p className="text-sm mt-4 opacity-90">
            Takes 10-15 minutes • Completely free • Science-backed
          </p>
        </div>
      </div>
    </div>
  );
}
