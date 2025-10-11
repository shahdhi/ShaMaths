import { useState } from 'react';
import { Loader2, CreditCard, Shield } from 'lucide-react';

export default function PaymentPage() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!code.trim()) {
      setError('Please enter a payment code');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        'https://arlqwkkmjpvzchwksvyq.functions.supabase.co/create-checkout-session',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: code.trim() }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid payment code. Please try again.');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Payment session could not be created. Please contact support.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            ShaDemy
          </h1>
          <p className="text-sm text-gray-600">Excellence in Education</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 animate-scale-in animate-delay-100">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary-50 rounded-full">
              <CreditCard className="w-8 h-8 text-primary-700" />
            </div>
          </div>

          <h2 className="text-2xl font-serif font-semibold text-center text-gray-900 mb-2">
            Course Payment Portal
          </h2>
          <p className="text-center text-gray-600 text-sm mb-8">
            Enter your payment code to proceed
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="code"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Payment Code
              </label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError('');
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  error
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-primary-200 focus:border-primary-500'
                }`}
                placeholder="Enter your code"
                disabled={loading}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 animate-fade-in">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !code.trim()}
              className="w-full px-6 py-3.5 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-200 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:shadow-none hover:scale-[1.02] disabled:scale-100"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>Proceed to Payment</span>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600 leading-relaxed">
                You'll be redirected to Stripe Checkout to complete your payment securely.
                Your payment information is encrypted and protected.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Need help? <a href="/contact" className="text-primary-700 hover:text-primary-800 font-medium">Contact us</a>
        </p>
      </div>
    </div>
  );
}
