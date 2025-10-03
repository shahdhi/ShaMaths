import { useState } from 'react';
import { BookOpen, Clock, Users, Calendar } from 'lucide-react';

interface CoursesPageProps {
  onNavigate: (page: string, courseId?: string) => void;
}

export default function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const courses = [
    {
      id: 'cla1',
      title: 'CLA1 – Calculus & Linear Algebra 1',
      level: 'University',
      description:
        'University-level foundational course in calculus and linear algebra. Perfect for first-year mathematics students seeking mastery of core concepts.',
      topics: [
        'Limits and Derivatives',
        'Integration Techniques',
        'Matrices and Determinants',
        'Vector Spaces',
        'Linear Transformations',
        'Eigenvalues and Eigenvectors',
      ],
      format: 'Weekly sessions',
      schedule: 'English instruction',
    },
    {
      id: 'ial-pure',
      title: 'IAL Pure Mathematics (P1, P2, P3, P4)',
      level: 'A-Level',
      description:
        'Complete A-Level pure mathematics covering all four modules with comprehensive exam preparation and conceptual mastery.',
      topics: [
        'Algebra and Functions',
        'Coordinate Geometry',
        'Trigonometry',
        'Calculus',
        'Sequences and Series',
        'Proof Techniques',
      ],
      format: 'Modular tutoring',
      schedule: 'Exam-focused sessions',
    },
    {
      id: 'ial-mechanics',
      title: 'IAL Mechanics (M1, M2, M3)',
      level: 'A-Level',
      description:
        'A-Level mechanics modules covering kinematics, forces, and energy with conceptual depth and problem-solving focus.',
      topics: [
        'Kinematics in 1D and 2D',
        'Newton\'s Laws',
        'Forces and Friction',
        'Work and Energy',
        'Momentum and Impulse',
        'Circular Motion',
      ],
      format: 'Conceptual + problem-solving',
      schedule: 'Aligned with IAL exams',
    },
    {
      id: 'ial-further-pure',
      title: 'IAL Further Pure Mathematics (FP1, FP2, FP3)',
      level: 'A-Level',
      description:
        'Advanced A-Level mathematics for high-achieving students, covering complex numbers, matrices, and differential equations.',
      topics: [
        'Complex Numbers',
        'Matrix Algebra',
        'Differential Equations',
        'Polar Coordinates',
        'Vectors in 3D',
        'Series and Limits',
      ],
      format: 'Deep-dive sessions',
      schedule: 'Visual modeling included',
    },
    {
      id: 'igcse-maths-a',
      title: 'IGCSE Mathematics A',
      level: 'IGCSE',
      description:
        'Core IGCSE mathematics curriculum covering all fundamental topics with comprehensive exam preparation.',
      topics: [
        'Number and Algebra',
        'Geometry and Mensuration',
        'Coordinate Geometry',
        'Statistics',
        'Probability',
        'Graphs and Functions',
      ],
      format: 'Foundation-level tutoring',
      schedule: 'Year-round enrollment',
    },
    {
      id: 'igcse-maths-b',
      title: 'IGCSE Mathematics B',
      level: 'IGCSE',
      description:
        'Extended IGCSE curriculum for advanced students, featuring challenging problem-solving and deeper mathematical thinking.',
      topics: [
        'Advanced Algebra',
        'Trigonometry',
        'Functions and Graphs',
        'Calculus Fundamentals',
        'Problem Solving',
        'Advanced Statistics',
      ],
      format: 'Exam-focused sessions',
      schedule: 'Year-round enrollment',
    },
  ];

  const levels = ['all', 'University', 'A-Level', 'IGCSE'];

  const filteredCourses =
    selectedLevel === 'all'
      ? courses
      : courses.filter((course) => course.level === selectedLevel);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our Courses
          </h1>
          <div className="w-20 h-1 bg-primary-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mathematics programs designed to build mastery from foundation to
            advanced levels
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16 opacity-0 animate-fade-in animate-delay-200">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedLevel === level
                  ? 'bg-primary-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {level === 'all' ? 'All Courses' : level}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover-lift opacity-0 animate-scale-in"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-primary-700 to-primary-900 p-8 text-white transition-all duration-500 group-hover:from-primary-800 group-hover:to-primary-950">
                <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                  {course.level}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">{course.title}</h3>
                <p className="text-primary-100 leading-relaxed">{course.description}</p>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen size={20} className="mr-2 text-primary-700" />
                    Topics Covered
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start transition-all duration-300 hover:translate-x-1">
                        <span className="text-primary-700 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center text-gray-600 transition-all duration-300 hover:translate-x-1">
                    <Clock size={18} className="mr-3 text-primary-700" />
                    <span>{course.format}</span>
                  </div>
                  <div className="flex items-center text-gray-600 transition-all duration-300 hover:translate-x-1">
                    <Calendar size={18} className="mr-3 text-primary-700" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center text-gray-600 transition-all duration-300 hover:translate-x-1">
                    <Users size={18} className="mr-3 text-primary-700" />
                    <span>Small group or individual sessions</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('course-detail', course.id)}
                  className="w-full py-3.5 bg-primary-700 text-white font-semibold rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  View Full Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-3xl p-12 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Not Sure Which Course Is Right?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation to discuss your goals and find the perfect course
            for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-primary-700 text-white font-semibold rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get in Touch
            </button>
            <button
              onClick={() => onNavigate('admission')}
              className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-full border-2 border-primary-700 hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
