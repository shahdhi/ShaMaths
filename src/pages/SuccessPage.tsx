import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, Home, Sparkles, Download, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [isVisible, setIsVisible] = useState(false);
  const [invoiceData, setInvoiceData] = useState<{invoice_pdf?: string; invoice_url?: string} | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsVisible(true);
    if (sessionId) {
      fetchInvoice(sessionId);
    }
  }, [sessionId]);

  const fetchInvoice = async (sessionId: string) => {
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch(
        "https://arlqwkkmjpvzchwksvyq.functions.supabase.co/get-invoice",
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ session_id: sessionId }),
        }
      );

      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
      } else {
        setInvoiceData(data);
      }
    } catch (err) {
      console.error("Error fetching invoice:", err);
      setError("Could not load invoice details");
    } finally {
      setLoading(false);
    }
  };

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

            {/* Invoice Section */}
            {loading && (
              <div className="bg-blue-50 rounded-lg p-4 mb-6 animate-pulse">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <p className="text-blue-700 text-sm mt-2">Preparing your invoice...</p>
              </div>
            )}

            {error && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-700 text-sm">
                  Note: {error} - You can access receipts from your Stripe account.
                </p>
              </div>
            )}

            {invoiceData && invoiceData.invoice_pdf && (
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="font-semibold text-green-800 text-lg">Your Invoice is Ready</h3>
                </div>
                <p className="text-green-700 text-sm mb-4">
                  Download your payment invoice for records and accounting purposes.
                </p>
                <div className="flex flex-col space-y-3">
                  <a 
                    href={invoiceData.invoice_pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Invoice PDF</span>
                  </a>
                  {invoiceData.invoice_url && (
                    <a 
                      href={invoiceData.invoice_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 bg-white text-green-600 border border-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-all duration-300 font-medium"
                    >
                      <FileText className="w-5 h-5" />
                      <span>View Online Invoice</span>
                    </a>
                  )}
                </div>
              </div>
            )}

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