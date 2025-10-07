import { useState } from 'react';
import { BookOpen, Clock, Users, Calendar } from 'lucide-react';

interface CoursesPageProps {
  onNavigate: (page: string, courseId?: string) => void;
}

export default function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const courses = [
    {
      id: 'beginner-a1',
      title: 'Foundations of Algebra & Arithmetic',
      level: 'Beginner',
      description:
        'Build confidence in numbers, operations, and algebraic thinking. Turn confusion into clarity—master the language of numbers.',
      topics: [
        'Place Value, Fractions, Decimals',
        'Order of Operations (BIDMAS)',
        'Basic Algebra: Expressions & Equations',
        'Graphing Linear Relationships',
        'Problem-Solving Strategies',
        'Introduction to Variables',
      ],
      format: 'Weekly 90-minute sessions',
      schedule: 'Year-round enrollment',
      prerequisites: 'None',
    },
    {
      id: 'beginner-a2',
      title: 'Geometry & Visual Reasoning',
      level: 'Beginner',
      description:
        'Explore shapes, space, and measurement through intuitive problem-solving. Build spatial awareness and geometric intuition.',
      topics: [
        'Angles, Triangles, Polygons',
        'Perimeter, Area, Volume',
        'Coordinate Geometry Basics',
        'Transformations and Symmetry',
        'Pythagorean Theorem',
        'Introduction to Proofs',
      ],
      format: 'Weekly 90-minute sessions',
      schedule: 'Year-round enrollment',
      prerequisites: 'Course A1 or equivalent',
    },
    {
      id: 'intermediate-b1',
      title: 'Algebraic Techniques & Functions',
      level: 'Intermediate',
      description:
        'Transition from basic algebra to powerful problem-solving tools. Master the techniques that bridge to formal mathematics.',
      topics: [
        'Quadratics and Factorization',
        'Simultaneous Equations',
        'Function Notation and Graphs',
        'Inequalities and Modulus',
        'Polynomial Expressions',
        'Exponential and Logarithmic Functions',
      ],
      format: 'Weekly 2-hour sessions',
      schedule: 'Flexible scheduling available',
      prerequisites: 'Course A1 or equivalent',
    },
    {
      id: 'intermediate-b2',
      title: 'Trigonometry & Introductory Calculus',
      level: 'Intermediate',
      description:
        'Discover the power of angles and rates of change. Connect algebra to real-world applications through trigonometry and calculus.',
      topics: [
        'Trigonometric Ratios and Identities',
        'Graphs of Sine, Cosine, Tangent',
        'Differentiation Basics',
        'Applications to Motion and Modeling',
        'Solving Trigonometric Equations',
        'Integration Introduction',
      ],
      format: 'Weekly 2-hour sessions',
      schedule: 'Flexible scheduling available',
      prerequisites: 'Course B1 or equivalent',
    },
    {
      id: 'advanced-c1',
      title: 'Calculus & Mathematical Modeling',
      level: 'Advanced',
      description:
        'Dive deep into calculus and its real-world applications. Master the mathematics that powers science and engineering.',
      topics: [
        'Chain Rule, Product Rule, Quotient Rule',
        'Implicit Differentiation',
        'Integration Techniques',
        'Differential Equations',
        'Modeling with Functions',
        'Optimization Problems',
      ],
      format: 'Weekly 2-hour sessions',
      schedule: 'Flexible scheduling available',
      prerequisites: 'Course B2 or strong foundation in calculus',
    },
    {
      id: 'advanced-c2',
      title: 'Abstract Reasoning & Complex Numbers',
      level: 'Advanced',
      description:
        'Explore elegant mathematics beyond the real number line. Develop the abstract thinking skills needed for university mathematics.',
      topics: [
        'Complex Numbers (Algebraic & Geometric)',
        'Proof by Induction',
        'Matrices and Transformations',
        'Sequences and Series',
        'Vector Spaces',
        'Mathematical Rigor and Logic',
      ],
      format: 'Weekly 2-hour sessions',
      schedule: 'Flexible scheduling available',
      prerequisites: 'Course C1 or equivalent',
    },
    {
      id: 'ial-pure-1',
      title: 'IAL Pure Mathematics 1',
      level: 'A-Level',
      description:
        'First year of A-Level pure mathematics covering algebraic methods, coordinate geometry, and introduction to calculus.',
      topics: [
        'Algebraic Expressions',
        'Quadratic Functions',
        'Equations and Inequalities',
        'Coordinate Geometry',
        'Trigonometry',
        'Differentiation',
      ],
      format: 'Weekly 90-minute sessions',
      schedule: 'Aligned with IAL exam schedule',
      prerequisites: 'IGCSE Mathematics or equivalent',
    },
    {
      id: 'ial-pure-2',
      title: 'IAL Pure Mathematics 2',
      level: 'A-Level',
      description:
        'Second year pure mathematics covering advanced calculus, sequences, and advanced trigonometry.',
      topics: [
        'Integration Techniques',
        'Sequences and Series',
        'Binomial Expansion',
        'Trigonometric Identities',
        'Parametric Equations',
        'Numerical Methods',
      ],
      format: 'Weekly 90-minute sessions',
      schedule: 'Aligned with IAL exam schedule',
      prerequisites: 'IAL Pure Mathematics 1',
    },
    {
      id: 'igcse-core',
      title: 'IGCSE Mathematics (Core)',
      level: 'IGCSE',
      description:
        'Comprehensive preparation for IGCSE Core Mathematics examination covering all fundamental topics.',
      topics: [
        'Number Operations',
        'Algebra Fundamentals',
        'Geometry and Mensuration',
        'Coordinate Geometry',
        'Statistics',
        'Probability',
      ],
      format: 'Weekly 90-minute sessions',
      schedule: 'Year-round enrollment',
      prerequisites: 'Basic arithmetic skills',
    },
    {
      id: 'igcse-extended',
      title: 'IGCSE Mathematics (Extended)',
      level: 'IGCSE',
      description:
        'Advanced IGCSE mathematics covering extended syllabus topics for high-achieving students.',
      topics: [
        'Advanced Algebra',
        'Functions and Graphs',
        'Trigonometry',
        'Calculus Introduction',
        'Vectors and Transformations',
        'Advanced Statistics',
      ],
      format: 'Weekly 90-minute sessions',
      schedule: 'Year-round enrollment',
      prerequisites: 'IGCSE Core or equivalent',
    },
  ];

  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced', 'A-Level', 'IGCSE'];

  const filteredCourses =
    selectedLevel === 'all'
      ? courses
      : courses.filter((course) => course.level === selectedLevel);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Our Courses
          </h1>
          <div className="w-20 h-1 bg-primary-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mathematics programs designed to build mastery from foundation to
            advanced levels
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedLevel === level
                  ? 'bg-primary-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-primary-700 to-primary-900 p-8 text-white">
                <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
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
                      <div key={idx} className="flex items-start">
                        <span className="text-primary-700 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center text-gray-600">
                    <Clock size={18} className="mr-3 text-primary-700" />
                    <span>{course.format}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-3 text-primary-700" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={18} className="mr-3 text-primary-700" />
                    <span>Small group or individual sessions</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('course-detail', course.id)}
                  className="w-full py-3.5 bg-primary-700 text-white font-semibold rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-lg group-hover:shadow-xl"
                >
                  View Full Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-3xl p-12 text-center">
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
