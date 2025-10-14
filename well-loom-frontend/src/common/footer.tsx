import { Leaf } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-green-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="text-green-400" size={20} />
                <h4 className="font-bold">Well Loom</h4>
              </div>
              <p className="text-green-200 text-sm">
                Personalized wellness programs based on your unique challenges.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
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
              <h4 className="font-bold mb-3">Support</h4>
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
          <div className="border-t border-green-800 pt-6">
            <p className="text-green-200 text-sm text-center">
              © 2025 Well Loom. Not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </footer>
    )
}