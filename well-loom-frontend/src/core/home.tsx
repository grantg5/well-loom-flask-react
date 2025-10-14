import { CheckCircle, Leaf, Sprout, TreePine, TrendingUp } from 'lucide-react';
import { useState } from 'react';


export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: Sprout,
      title: "Personalized Assessment",
      description: "10-minute science-backed assessment across 9 key wellness areas"
    },
    {
      icon: TreePine,
      title: "8-Week Guided Program",
      description: "Structured journey with practices that match your specific challenges"
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "Phase-based check-ins and support as you grow"
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Decorative nature elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-24 relative">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100/50 p-4 rounded-full backdrop-blur-sm">
              <Leaf className="text-green-700" size={48} />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent leading-tight">
            Stop Wasting Time on Wellness Solutions
            <br />
            That Don't Match Your Problem
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get a personalized 8-week program based on your specific challenges—not generic advice that never quite fits.
          </p>
          <button className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white px-12 py-4 text-lg rounded-full shadow-lg transform transition hover:scale-105 font-semibold">
            Take 10-Minute Assessment
          </button>
          <p className="text-sm text-gray-700 mt-4">
            No account required • Free assessment
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200/50 rounded-3xl shadow-xl p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">
            Sound familiar?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white/60 rounded-2xl border border-orange-200/50 backdrop-blur-sm">
            <p className="text-gray-800 font-medium">
              The problem isn't you. It's that most wellness advice is one-size-fits-all—and your challenges are unique.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-4 text-gray-900">
            How It Works
          </h3>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Like nurturing a garden, wellness takes time and the right approach for your unique needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm text-center p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-green-200/30 hover:border-green-400/50"
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    transform: hoveredCard === idx ? 'translateY(-8px)' : 'translateY(0)',
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-4 rounded-full">
                      <Icon className="text-green-700" size={40} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200/50 rounded-3xl shadow-xl p-8 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sprout className="text-green-700" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">
              What You'll Get
            </h3>
          </div>
          <div className="space-y-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/50 p-4 rounded-2xl backdrop-blur-sm">
                <CheckCircle className="text-green-700 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-800 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-700 to-emerald-700 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-4">
              Ready to Find What Actually Works?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Take the assessment now. No account needed.
            </p>
            <button className="bg-white text-green-800 hover:bg-green-50 px-12 py-4 text-lg rounded-full shadow-lg transform transition hover:scale-105 font-bold">
              Start Your Free Assessment
            </button>
            <p className="text-sm mt-4 opacity-75">
              Takes 10-15 minutes • Completely free • Science-backed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}