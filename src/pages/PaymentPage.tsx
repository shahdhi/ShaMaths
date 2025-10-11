import { useState } from 'react';
import { Loader2, CreditCard, Shield } from 'lucide-react';

export default function PaymentPage() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentInfo, setPaymentInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code.trim()) {
      setError('Please enter a payment code');
      return;
    }

    setError('');
    setPaymentInfo(null);
    setLoading(true);

    try {
      // First check payment code
      const checkResponse = await fetch(
        'https://arlqwkkmjpvzchwksvyq.supabase.co/functions/v1/check-payment-code',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: code.trim() }),
        }
      );

      const checkData = await checkResponse.json();

      if (!checkResponse.ok) {
        throw new Error(checkData.error || 'Invalid payment code');
      }

      // Store payment info for display
      setPaymentInfo(checkData);

      // Create checkout session
      const sessionResponse = await fetch(
        'https://arlqwkkmjpvzchwksvyq.supabase.co/functions/v1/create-checkout-session',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: code.trim() }),
        }
      );

      const sessionData = await sessionResponse.json();

      if (!sessionResponse.ok) {
        throw new Error(sessionData.error || 'Payment session failed');
      }

      if (sessionData.url) {
        window.location.href = sessionData.url;
      } else {
        throw new Error('No payment URL received');
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Simplified for LKR only
  const formatAmount = (currency, amount) => {
    return `Rs ${amount}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            ShaDemy
          </h1>
          <p className="text-sm text-gray-600">Excellence in Education</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-blue-50 rounded-full">
              <CreditCard className="w-8 h-8 text-blue-700" />
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
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                Payment Code
              </label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError('');
                  setPaymentInfo(null);
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  error
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
                }`}
                placeholder="Enter your payment code"
                disabled={loading}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">
                  {error}
                </p>
              )}
            </div>

            {paymentInfo && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-medium text-green-800 mb-2">Payment Details</h3>
                <div className="space-y-1 text-sm text-green-700">
                  <p><strong>Course:</strong> {paymentInfo.course_name}</p>
                  <p><strong>Amount:</strong> Rs {paymentInfo.amount}</p>
                  <p><strong>Currency:</strong> LKR</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !code.trim()}
              className="w-full px-6 py-3.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>
                  {paymentInfo ? `Pay Rs ${paymentInfo.amount}` : 'Proceed to Payment'}
                </span>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600 leading-relaxed">
                You'll be redirected to Stripe Checkout to complete your payment securely.
                Your payment information is encrypted and protected.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Need help? <a href="/contact" className="text-blue-700 hover:text-blue-800 font-medium">Contact us</a>
        </p>
      </div>
    </div>
  );
}
