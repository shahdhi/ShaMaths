import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
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
    'Foundations of Algebra & Arithmetic (Beginner)',
    'Geometry & Visual Reasoning (Beginner)',
    'Algebraic Techniques & Functions (Intermediate)',
    'Trigonometry & Introductory Calculus (Intermediate)',
    'Calculus & Mathematical Modeling (Advanced)',
    'Abstract Reasoning & Complex Numbers (Advanced)',
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
      description: 'Finalize enrollment details and begin your mathematical journey.',
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
              className="px-8 py-3 bg-primary-700 text-white font-semibold rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Apply for Admission</h1>
          <div className="w-20 h-1 bg-primary-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Begin your journey toward mathematical excellence with personalized instruction and
            expert guidance
          </p>
        </div>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our straightforward process ensures we find the right fit for your learning goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Application Form</h2>

            <form
              name="admission"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="admission" />
              <p hidden>
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
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
                    placeholder="+81 XX-XXXX-XXXX"
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
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-900 mb-2">
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
                  placeholder="Tell us about your mathematical background, goals, or any questions you have..."
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

          <div className="mt-12 bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Have Questions?</h3>
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
