import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

// Supabase Configuration
const SUPABASE_URL = 'https://arlqwkkmjpvzchwksvyq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybHF3a2ttanB2emNod2tzdnlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4MjkwMTQsImV4cCI6MjA3NTQwNTAxNH0.1k4tc-I9rqkG7aCS5VijyJ_JAUDs48LvdR_mffsrmlo';

interface AdmissionPageProps {
  onNavigate: (page: string) => void;
}

export default function AdmissionPage({ onNavigate }: AdmissionPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    startDate: '',
    notes: '',
    agreeToTerms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/admissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          start_date: formData.startDate,
          notes: formData.notes || null,
          agree_to_terms: formData.agreeToTerms,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit application');
      }

      const data = await response.json();
      console.log('Submission successful:', data);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError(err.message || 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const courses = [
    'CLA1 – Calculus & Linear Algebra 1',
    'CLA2 – Advanced Calculus & Linear Algebra',
    'IAL Pure Mathematics 1',
    'IAL Pure Mathematics 2',
    'IGCSE Mathematics (Core)',
    'IGCSE Mathematics (Extended)',
  ];

  const steps = [
    {
      number: '1',
      title: 'Submit Application',
      description: 'Complete the application form with your details and course preferences.',
    },
    {
      number: '2',
      title: 'Initial Review',
      description: 'We review your application and reach out within 2 business days.',
    },
    {
      number: '3',
      title: 'Consultation',
      description: 'Schedule a free consultation to discuss your goals and assess fit.',
    },
    {
      number: '4',
      title: 'Enrollment',
      description: 'Finalize enrollment details and begin your academic journey.',
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center animate-scale-in">
          <div className="w-24 h-24 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={48} className="text-accent-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Application Submitted!
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Thank you for your interest in Sha Maths. We've received your application and will
            review it carefully.
          </p>
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">What's Next?</h2>
            <div className="text-left space-y-4 text-gray-700">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-primary-700 mr-3 mt-1 flex-shrink-0" />
                <p>You'll receive a confirmation email at {formData.email} shortly.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-primary-700 mr-3 mt-1 flex-shrink-0" />
                <p>
                  We'll review your application and contact you within 2 business days to schedule
                  a consultation.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-primary-700 mr-3 mt-1 flex-shrink-0" />
                <p>
                  During the consultation, we'll discuss your goals, assess your current level,
                  and answer any questions.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-4 bg-primary-700 text-white font-semibold rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Return to Home
            </button>
            <button
              onClick={() => onNavigate('resources')}
              className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-full border-2 border-primary-700 hover:bg-primary-50 transition-all duration-300 hover:scale-105"
            >
              Browse Resources
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Apply for Admission
          </h1>
          <div className="w-20 h-1 bg-primary-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Begin your journey toward academic excellence with personalized instruction and
            expert guidance
          </p>
        </div>

        <section className="mb-20 opacity-0 animate-fade-in-up animate-delay-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our straightforward process ensures we find the right fit for your learning goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center group opacity-0 animate-fade-in-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
                <div className="w-16 h-16 bg-primary-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-3xl mx-auto opacity-0 animate-scale-in" style={{ animationDelay: '400ms' }}>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
              Application Form
            </h2>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-900 mb-2">
                  Course Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                >
                  <option value="">Select a course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Preferred Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-900 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your academic background, goals, or any questions you have..."
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 text-primary-700 border-gray-300 rounded focus:ring-2 focus:ring-primary-500"
                />
                <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-700">
                  I agree to the terms and conditions and consent to being contacted regarding my
                  application. <span className="text-red-500">*</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary-700 text-white font-semibold rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-16 pt-12 border-t-2 border-gray-200">
            <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-3xl p-8 md:p-10 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Already Applied?
              </h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                If you've already applied and received a payment code, you can complete your payment below.
              </p>
              <button
                onClick={() => onNavigate('payment')}
                className="px-10 py-4 bg-accent-600 text-white font-semibold rounded-full hover:bg-accent-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Proceed to Payment
              </button>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-3xl p-8 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about the admission process or our courses, feel free to
              reach out.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-primary-700 text-white font-semibold rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
