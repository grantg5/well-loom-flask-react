import { Leaf } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-green-900 to-emerald-950 text-white py-12 mt-24 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="text-green-400" size={24} />
                <h4 className="text-lg font-bold">Well Loom</h4>
              </div>
              <p className="text-green-200 text-sm">
                Personalized wellness programs based on your unique challenges.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <p className="text-green-200 text-sm cursor-pointer hover:text-white transition-colors">
                  Privacy Policy
                </p>
                <p className="text-green-200 text-sm cursor-pointer hover:text-white transition-colors">
                  Terms of Service
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Support</h4>
              <div className="space-y-2">
                <p className="text-green-200 text-sm cursor-pointer hover:text-white transition-colors">
                  FAQ
                </p>
                <p className="text-green-200 text-sm cursor-pointer hover:text-white transition-colors">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 pt-8">
            <p className="text-green-200 text-sm text-center">
              © 2025 Well Loom. Not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </footer>
    )
}