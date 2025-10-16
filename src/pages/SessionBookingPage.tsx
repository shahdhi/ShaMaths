import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SessionBookingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseName: '',
    studentName: '',
    studentEmail: '',
    sessionDate: '',
    sessionTime: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Call your Edge Function to create Stripe session
      const response = await fetch(
        'https://arlqwkkmjpvzchwksvyq.functions.supabase.co/create-session-booking',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            amount: 1000,
            currency: 'jpy'
          }),
        }
      );

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe
      } else {
        alert('Error creating booking');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Failed to create booking');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Book a Session - ¥1000</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Course</label>
            <select
              required
              value={formData.courseName}
              onChange={(e) => setFormData({...formData, courseName: e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Select a course</option>
              <option value="Pure Mathematics 1">Pure Mathematics 1</option>
              <option value="Physics IGCSE">Physics IGCSE</option>
              <option value="Chemistry A-Level">Chemistry A-Level</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              required
              value={formData.studentName}
              onChange={(e) => setFormData({...formData, studentName: e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={formData.studentEmail}
              onChange={(e) => setFormData({...formData, studentEmail: e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
            <input
              type="date"
              required
              value={formData.sessionDate}
              onChange={(e) => setFormData({...formData, sessionDate: e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
            <input
              type="time"
              required
              value={formData.sessionTime}
              onChange={(e) => setFormData({...formData, sessionTime: e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Book Session - ¥1000'}
          </button>
        </form>
      </div>
    </div>
  );
}
