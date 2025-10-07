import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { supabase } from '../supabaseClient'; // adjust path if needed

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

    const { error } = await supabase.from('admissions').insert([
      {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        start_date: formData.startDate,
        notes: formData.notes,
        agree_to_terms: formData.agreeToTerms,
      },
    ]);

    if (error) {
      alert('Submission failed. Please try again.');
      console.error(error);
      setIsSubmitting(false);
      return;
    }

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
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Apply for Admission
          </h1>
          <div className="w-20 h-1 bg-primary-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Begin your journey toward mathematical excellence with personalized instruction and
            expert guidance
          </p>
        </div>

        <section className="mb-20">
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
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
              Application Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Paste the full form JSX here — Full Name, Email, Phone, Course, Start Date, Notes, Terms, Submit Button */}
            </form>
          </div>

          <div className="mt-12 bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-3xl p-8 text-center">
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
