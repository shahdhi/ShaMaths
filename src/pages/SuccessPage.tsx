import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 via-blue-50 to-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div
          className={`bg-white rounded-2xl shadow-2xl p-10 transform transition-all duration-700 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-accent-200 rounded-full animate-ping opacity-25"></div>
              <div className="relative p-4 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full">
                <CheckCircle className="w-16 h-16 text-white" strokeWidth={2.5} />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-pulse" />
            </div>

            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-3">
              Payment Successful!
            </h1>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed px-4">
              Thank you for your payment. Your enrollment at <span className="font-semibold text-primary-700">ShaMaths</span> is confirmed.
            </p>

            <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-lg p-6 mb-8">
              <p className="text-sm text-gray-700">
                You will receive a confirmation email shortly with access to your course materials and next steps.
              </p>
            </div>

            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Home className="w-5 h-5" />
              <span>Go to Home</span>
            </button>

            <p className="text-xs text-gray-500 mt-6">
              Questions? <a href="/contact" className="text-primary-700 hover:text-primary-800 font-medium">Contact our support team</a>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Welcome to the ShaMaths community!
          </p>
        </div>
      </div>
    </div>
  );
}
