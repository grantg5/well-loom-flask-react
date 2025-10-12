export function Home() {
    return (
        <div>
            <section className="gradient-primary text-white py-16 md:py-24 px-4">
                <div className="max-w-5xl mx-auto text-center">
                <div className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                    Evidence-Based Wellness Navigation
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Stop Wasting Time on Wellness Solutions That Don't Match Your Problem
                </h2>
                
                <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto font-light">
                    Take our 10-minute assessment to discover your specific challenge—whether it's esteem, relationships, or anxiety—and get matched to approaches that actually work for you.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                    <button className="px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform">
                    Take Free Assessment →
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:bg-opacity-10 transition">
                    Learn More
                    </button>
                </div>
                
                <p className="text-sm opacity-80">
                    No account required • Takes 10 minutes • Completely free
                </p>
                </div>
            </section>

            <section className="py-16 md:py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Why Most Wellness Advice Doesn't Work
                    </h3>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Not all wellness problems are the same. Meditation helps anxiety, but does nothing for esteem issues. CBT works for some, while others need trauma-focused therapy like IFS.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="text-4xl mb-3">❌</div>
                    <h4 className="text-xl font-bold mb-2">Trial and Error</h4>
                    <p className="text-gray-600">
                        You try meditation, therapy, self-help books—spending months and thousands of dollars without progress.
                    </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="text-4xl mb-3">❌</div>
                    <h4 className="text-xl font-bold mb-2">Mismatched Solutions</h4>
                    <p className="text-gray-600">
                        You follow advice that worked for others, but it doesn't address your specific pattern of struggle.
                    </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="text-4xl mb-3">❌</div>
                    <h4 className="text-xl font-bold mb-2">Information Overload</h4>
                    <p className="text-gray-600">
                        Too many options, conflicting advice, no clear path forward. You feel more overwhelmed than when you started.
                    </p>
                    </div>
                </div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    How Well Loom Works
                    </h3>
                    <p className="text-xl text-gray-600">
                    Get matched to the right approach in three simple steps
                    </p>
                </div>

                <div className="space-y-8">
                    <!-- Step 1 -->
                    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 md:w-48 flex flex-col items-center justify-center">
                        <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <div className="text-4xl font-bold">Step 1</div>
                    </div>
                    <div className="p-8 flex-1">
                        <h4 className="text-2xl font-bold mb-3">Take the Assessment</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">
                        Answer 30-40 questions designed by psychologists to identify your specific pattern. Are you struggling with competence-based esteem issues or core worthiness? Intimacy or conflict in relationships? We go deeper than generic wellness quizzes.
                        </p>
                    </div>
                    </div>

                    <!-- Step 2 -->
                    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 md:w-48 flex flex-col items-center justify-center">
                        <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-4xl font-bold">Step 2</div>
                    </div>
                    <div className="p-8 flex-1">
                        <h4 className="text-2xl font-bold mb-3">Get Your Diagnosis</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">
                        Receive a detailed explanation of your primary challenge and why typical solutions may not have worked. We explain the difference between approaches—like why CBT might feel invalidating if you have trauma-based patterns, or why meditation alone won't solve esteem issues.
                        </p>
                    </div>
                    </div>

                    <!-- Step 3 -->
                    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-8 md:w-48 flex flex-col items-center justify-center">
                        <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <div className="text-4xl font-bold">Step 3</div>
                    </div>
                    <div className="p-8 flex-1">
                        <h4 className="text-2xl font-bold mb-3">Follow Personalized Recommendations</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">
                        Get matched to specific practices, resources, and professional help that actually fit your pattern. Plus, check-in reminders every two weeks to see if it's working—and pivot to alternatives if not. No more months of trial-and-error.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Why Well Loom Is Different
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm flex hover:shadow-md transition">
                    <div className="text-green-600 mr-4 mt-1">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Clinically Informed</h4>
                        <p className="text-gray-600">Designed with psychologists using evidence-based frameworks, not generic personality quizzes.</p>
                    </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm flex hover:shadow-md transition">
                    <div className="text-green-600 mr-4 mt-1">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Unbiased Recommendations</h4>
                        <p className="text-gray-600">We don't sell therapy or push one solution. We route you to what actually fits your problem.</p>
                    </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm flex hover:shadow-md transition">
                    <div className="text-green-600 mr-4 mt-1">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Explains Why</h4>
                        <p className="text-gray-600">Understand why meditation hasn't worked, or why CBT might not be right for your pattern.</p>
                    </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm flex hover:shadow-md transition">
                    <div className="text-green-600 mr-4 mt-1">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Iterative Refinement</h4>
                        <p className="text-gray-600">Check-ins let us refine recommendations if something isn't working. No more being stuck.</p>
                    </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm flex hover:shadow-md transition">
                    <div className="text-green-600 mr-4 mt-1">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Beyond Therapy</h4>
                        <p className="text-gray-600">We recommend books, exercises, somatic practices, and more—not just therapy options.</p>
                    </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm flex hover:shadow-md transition">
                    <div className="text-green-600 mr-4 mt-1">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Saves Time & Money</h4>
                        <p className="text-gray-600">Stop the expensive trial-and-error. Get it right the first time, or quickly pivot.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="gradient-primary text-white py-16 md:py-24 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to Find What Actually Works?
                </h3>
                <p className="text-xl md:text-2xl mb-8 opacity-95">
                    Take the free assessment and get personalized recommendations in 10 minutes
                </p>
                <button className="px-10 py-5 bg-white text-green-600 font-bold text-xl rounded-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition transform">
                    Start Your Assessment →
                </button>
                <p className="text-sm mt-6 opacity-80">
                    No credit card • No signup required • Completely confidential
                </p>
                </div>
            </section>
        </div>
    );
}