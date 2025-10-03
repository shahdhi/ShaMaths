import { FileText, Video, Download, BookOpen, Calculator, PenTool } from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

export default function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const resources = [
    {
      category: 'Textbook Chapters',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction to Calculus',
          description: 'Comprehensive introduction covering limits, derivatives, and basic integration',
          type: 'PDF',
          level: 'A-Level / University',
        },
        {
          title: 'Linear Algebra Fundamentals',
          description: 'Vectors, matrices, and linear systems with worked examples',
          type: 'PDF',
          level: 'University',
        },
        {
          title: 'IGCSE Algebra Review',
          description: 'Complete review of algebraic concepts for IGCSE students',
          type: 'PDF',
          level: 'IGCSE',
        },
      ],
    },
    {
      category: 'Revision Sheets',
      icon: FileText,
      items: [
        {
          title: 'Calculus Formula Sheet',
          description: 'Quick reference for differentiation and integration formulas',
          type: 'PDF',
          level: 'A-Level / University',
        },
        {
          title: 'Trigonometry Identities',
          description: 'Comprehensive list of trigonometric identities and formulas',
          type: 'PDF',
          level: 'IGCSE / A-Level',
        },
        {
          title: 'Coordinate Geometry Guide',
          description: 'Key formulas and concepts for coordinate geometry',
          type: 'PDF',
          level: 'IGCSE / A-Level',
        },
      ],
    },
    {
      category: 'Practice Problems',
      icon: PenTool,
      items: [
        {
          title: 'Calculus Problem Set',
          description: '50 practice problems with detailed solutions',
          type: 'PDF',
          level: 'A-Level / University',
        },
        {
          title: 'Linear Algebra Exercises',
          description: 'Practice problems covering vectors, matrices, and linear systems',
          type: 'PDF',
          level: 'University',
        },
        {
          title: 'IGCSE Exam Practice',
          description: 'Past paper style questions with mark schemes',
          type: 'PDF',
          level: 'IGCSE',
        },
      ],
    },
    {
      category: 'Video Tutorials',
      icon: Video,
      items: [
        {
          title: 'Understanding Limits',
          description: 'Visual introduction to the concept of limits in calculus',
          type: 'Video',
          level: 'A-Level / University',
        },
        {
          title: 'Matrix Operations',
          description: 'Step-by-step guide to matrix multiplication and inverses',
          type: 'Video',
          level: 'University',
        },
        {
          title: 'Solving Quadratic Equations',
          description: 'Multiple methods for solving quadratic equations',
          type: 'Video',
          level: 'IGCSE / A-Level',
        },
      ],
    },
    {
      category: 'Study Tools',
      icon: Calculator,
      items: [
        {
          title: 'Study Planner Template',
          description: 'Organize your mathematics study schedule effectively',
          type: 'PDF',
          level: 'All Levels',
        },
        {
          title: 'Formula Cards',
          description: 'Printable flashcards for memorizing key formulas',
          type: 'PDF',
          level: 'All Levels',
        },
        {
          title: 'Exam Preparation Checklist',
          description: 'Comprehensive checklist for exam preparation',
          type: 'PDF',
          level: 'All Levels',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Learning Resources
          </h1>
          <div className="w-20 h-1 bg-primary-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Free resources to support your mathematical journey
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 mb-16 opacity-0 animate-scale-in animate-delay-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3">
                Access Premium Resources
              </h2>
              <p className="text-gray-700 text-lg max-w-xl">
                Enrolled students receive exclusive access to comprehensive course materials,
                video libraries, and personalized study guides.
              </p>
            </div>
            <button
              onClick={() => onNavigate('admission')}
              className="px-8 py-4 bg-primary-700 text-white font-semibold rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Enroll Now
            </button>
          </div>
        </div>

        <div className="space-y-16">
          {resources.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <category.icon size={24} className="text-primary-700" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white border border-gray-200 rounded-2xl p-8 hover-lift opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${200 + categoryIndex * 100 + itemIndex * 50}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-3">
                          {item.type}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{item.level}</span>
                      <button className="flex items-center text-primary-700 font-medium hover:text-primary-800 transition-all duration-300 hover:translate-x-1">
                        <Download size={18} className="mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 bg-white border border-gray-200 rounded-3xl p-12 opacity-0 animate-scale-in" style={{ animationDelay: '600ms' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Looking for More?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We regularly add new resources and materials. Subscribe to our updates or contact
              us if you're looking for specific topics.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-primary-700 text-white font-semibold rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Contact Us
            </button>
            <button
              onClick={() => onNavigate('courses')}
              className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-full border-2 border-primary-700 hover:bg-primary-50 transition-all duration-300 hover:scale-105"
            >
              View Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
