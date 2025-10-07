import { ArrowLeft, BookOpen, Clock, Users, Calendar, Award, CheckCircle } from 'lucide-react';

interface CourseDetailPageProps {
  courseId: string;
  onNavigate: (page: string) => void;
}

export default function CourseDetailPage({ courseId, onNavigate }: CourseDetailPageProps) {
  const courseDetails: Record<string, any> = {
    'beginner-a1': {
      title: 'Foundations of Algebra & Arithmetic',
      level: 'Beginner',
      description:
        'Build confidence in numbers, operations, and algebraic thinking. This course provides a supportive environment for developing foundational mathematical skills that will serve as the basis for all future learning.',
      objectives: [
        'Master arithmetic operations with confidence and accuracy',
        'Understand and apply the order of operations correctly',
        'Develop algebraic thinking through expressions and equations',
        'Build problem-solving skills and mathematical intuition',
      ],
      topics: [
        {
          title: 'Number Fundamentals',
          subtopics: [
            'Place value and number systems',
            'Fractions, decimals, and percentages',
            'Operations with rational numbers',
            'Properties of numbers',
          ],
        },
        {
          title: 'Order of Operations',
          subtopics: [
            'BIDMAS/PEMDAS rules',
            'Evaluating complex expressions',
            'Common mistakes and how to avoid them',
            'Applications to real problems',
          ],
        },
        {
          title: 'Introduction to Algebra',
          subtopics: [
            'Variables and expressions',
            'Simplifying algebraic expressions',
            'Solving linear equations',
            'Word problems and modeling',
          ],
        },
        {
          title: 'Linear Relationships',
          subtopics: [
            'Introduction to graphing',
            'Plotting points and lines',
            'Slope and intercept',
            'Real-world linear models',
          ],
        },
      ],
      format: 'Weekly 90-minute sessions with guided practice and encouragement',
      schedule: 'Flexible scheduling with morning, afternoon, and evening options available',
      materials: [
        'Comprehensive workbook with practice problems',
        'Visual aids and manipulatives',
        'Online practice resources',
        'Progress tracking tools',
      ],
      prerequisites: 'None – open to all students',
      assessment: 'Regular practice sets and progress checks (non-intimidating format)',
    },
    'beginner-a2': {
      title: 'Geometry & Visual Reasoning',
      level: 'Beginner',
      description:
        'Explore shapes, space, and measurement through intuitive problem-solving. Develop spatial reasoning and geometric intuition that connects mathematics to the physical world.',
      objectives: [
        'Understand properties of angles, shapes, and solids',
        'Calculate perimeter, area, and volume with confidence',
        'Apply geometric concepts to real-world situations',
        'Develop spatial visualization and reasoning skills',
      ],
      topics: [
        {
          title: 'Angles and Shapes',
          subtopics: [
            'Types of angles and angle relationships',
            'Properties of triangles and quadrilaterals',
            'Polygon properties',
            'Angle calculations and proofs',
          ],
        },
        {
          title: 'Measurement',
          subtopics: [
            'Perimeter and circumference',
            'Area of 2D shapes',
            'Surface area of solids',
            'Volume of 3D objects',
          ],
        },
        {
          title: 'Coordinate Geometry',
          subtopics: [
            'Cartesian plane basics',
            'Distance and midpoint',
            'Plotting shapes on coordinates',
            'Introduction to geometric proofs',
          ],
        },
        {
          title: 'Transformations',
          subtopics: [
            'Reflection, rotation, translation',
            'Symmetry and patterns',
            'Congruence and similarity',
            'Practical applications',
          ],
        },
      ],
      format: 'Weekly 90-minute sessions with hands-on activities',
      schedule: 'Flexible scheduling with morning, afternoon, and evening options available',
      materials: [
        'Geometry workbook with diagrams',
        'Drawing tools and manipulatives',
        'Interactive online resources',
        'Real-world problem collections',
      ],
      prerequisites: 'Course A1 or equivalent basic arithmetic skills',
      assessment: 'Regular practice with visual and practical assessments',
    },
    'intermediate-b1': {
      title: 'Algebraic Techniques & Functions',
      level: 'Intermediate',
      description:
        'Transition from basic algebra to powerful problem-solving tools. This course bridges intuitive understanding to formal mathematical techniques.',
      objectives: [
        'Master quadratic equations and factorization techniques',
        'Understand and work with function notation',
        'Solve systems of equations with confidence',
        'Apply algebraic methods to complex problems',
      ],
      topics: [
        {
          title: 'Quadratic Expressions',
          subtopics: [
            'Expanding and factorizing',
            'Completing the square',
            'Quadratic formula',
            'Applications and modeling',
          ],
        },
        {
          title: 'Functions',
          subtopics: [
            'Function notation and terminology',
            'Domain and range',
            'Composite and inverse functions',
            'Graphing techniques',
          ],
        },
        {
          title: 'Equations and Inequalities',
          subtopics: [
            'Simultaneous equations (linear and non-linear)',
            'Solving inequalities',
            'Absolute value (modulus)',
            'Graphical solutions',
          ],
        },
        {
          title: 'Advanced Algebra',
          subtopics: [
            'Polynomial operations',
            'Exponential functions',
            'Logarithms',
            'Applications to growth and decay',
          ],
        },
      ],
      format: 'Weekly 2-hour sessions combining theory and extensive practice',
      schedule: 'Flexible scheduling with morning, afternoon, and evening options available',
      materials: [
        'Comprehensive course notes',
        'Problem sets with solutions',
        'Graphing tools and software',
        'Past papers and practice exams',
      ],
      prerequisites: 'Course A1 or solid foundation in basic algebra',
      assessment: 'Regular problem sets and periodic assessments',
    },
    'intermediate-b2': {
      title: 'Trigonometry & Introductory Calculus',
      level: 'Intermediate',
      description:
        'Discover the power of angles and rates of change. Connect algebraic concepts to real-world applications through trigonometry and the fundamentals of calculus.',
      objectives: [
        'Master trigonometric ratios and identities',
        'Understand the concept of limits and derivatives',
        'Apply differentiation to real-world problems',
        'Build foundations for advanced calculus',
      ],
      topics: [
        {
          title: 'Trigonometry Fundamentals',
          subtopics: [
            'Trigonometric ratios (sin, cos, tan)',
            'Unit circle and radian measure',
            'Trigonometric identities',
            'Solving trigonometric equations',
          ],
        },
        {
          title: 'Trigonometric Graphs',
          subtopics: [
            'Graphs of sin, cos, and tan',
            'Amplitude, period, and phase shift',
            'Transformations of trig functions',
            'Applications to waves and oscillations',
          ],
        },
        {
          title: 'Introduction to Differentiation',
          subtopics: [
            'Limits and continuity',
            'Definition of the derivative',
            'Basic differentiation rules',
            'Rates of change and velocity',
          ],
        },
        {
          title: 'Applications of Calculus',
          subtopics: [
            'Tangent lines and approximation',
            'Optimization basics',
            'Motion and kinematics',
            'Introduction to integration',
          ],
        },
      ],
      format: 'Weekly 2-hour sessions with theory and applications',
      schedule: 'Flexible scheduling with morning, afternoon, and evening options available',
      materials: [
        'Detailed course notes',
        'Practice problems with solutions',
        'Graphing calculator guidance',
        'Online visualization tools',
      ],
      prerequisites: 'Course B1 or equivalent algebraic proficiency',
      assessment: 'Regular problem sets and mid-course assessments',
    },
    'advanced-c1': {
      title: 'Calculus & Mathematical Modeling',
      level: 'Advanced',
      description:
        'Dive deep into calculus and its real-world applications. Master the mathematical tools that power science, engineering, and advanced problem-solving.',
      objectives: [
        'Master advanced differentiation techniques',
        'Develop proficiency in integration methods',
        'Solve differential equations',
        'Apply calculus to complex modeling problems',
      ],
      topics: [
        {
          title: 'Advanced Differentiation',
          subtopics: [
            'Chain rule applications',
            'Product and quotient rules',
            'Implicit differentiation',
            'Related rates problems',
          ],
        },
        {
          title: 'Integration Techniques',
          subtopics: [
            'Integration by substitution',
            'Integration by parts',
            'Partial fractions',
            'Applications: area, volume, work',
          ],
        },
        {
          title: 'Differential Equations',
          subtopics: [
            'First-order differential equations',
            'Separable equations',
            'Applications to growth models',
            'Introduction to second-order equations',
          ],
        },
        {
          title: 'Mathematical Modeling',
          subtopics: [
            'Optimization problems',
            'Modeling with functions',
            'Curve sketching',
            'Real-world applications',
          ],
        },
      ],
      format: 'Weekly 2-hour sessions with rigorous theory and applications',
      schedule: 'Flexible scheduling with morning, afternoon, and evening options available',
      materials: [
        'Comprehensive textbook and notes',
        'Problem sets with detailed solutions',
        'Past university exam papers',
        'Computational tools and software',
      ],
      prerequisites: 'Course B2 or strong foundation in introductory calculus',
      assessment: 'Regular assignments, mid-term, and final examination',
    },
    'advanced-c2': {
      title: 'Abstract Reasoning & Complex Numbers',
      level: 'Advanced',
      description:
        'Explore elegant mathematics beyond the real number line. Develop abstract thinking skills and mathematical maturity needed for university-level mathematics.',
      objectives: [
        'Master complex number arithmetic and geometry',
        'Develop rigorous proof techniques',
        'Understand linear transformations and matrices',
        'Build mathematical maturity and abstract reasoning',
      ],
      topics: [
        {
          title: 'Complex Numbers',
          subtopics: [
            'Arithmetic with complex numbers',
            'Polar form and Euler\'s formula',
            'De Moivre\'s theorem',
            'Geometric interpretation',
          ],
        },
        {
          title: 'Mathematical Proof',
          subtopics: [
            'Direct proof techniques',
            'Proof by contradiction',
            'Mathematical induction',
            'Proof writing and communication',
          ],
        },
        {
          title: 'Matrices and Vectors',
          subtopics: [
            'Matrix operations',
            'Determinants and inverses',
            'Linear transformations',
            'Eigenvalues and eigenvectors',
          ],
        },
        {
          title: 'Sequences and Series',
          subtopics: [
            'Convergence and divergence',
            'Tests for convergence',
            'Power series',
            'Taylor and Maclaurin series',
          ],
        },
      ],
      format: 'Weekly 2-hour sessions emphasizing rigor and understanding',
      schedule: 'Flexible scheduling with morning, afternoon, and evening options available',
      materials: [
        'Advanced course notes',
        'Challenging problem sets',
        'University-level resources',
        'Proof-writing guides',
      ],
      prerequisites: 'Course C1 or equivalent advanced mathematics background',
      assessment: 'Regular proof assignments and comprehensive examinations',
    },
  };

  const course = courseDetails[courseId] || courseDetails['beginner-a1'];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <button
          onClick={() => onNavigate('courses')}
          className="flex items-center text-primary-700 hover:text-primary-800 font-medium mb-8 group transition-colors"
        >
          <ArrowLeft
            size={20}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Back to Courses
        </button>

        <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-12 text-white mb-12 shadow-2xl">
          <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
            {course.level}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{course.title}</h1>
          <p className="text-xl text-primary-100 leading-relaxed max-w-3xl">
            {course.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Clock size={28} className="text-primary-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
            <p className="text-gray-600">{course.format}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Calendar size={28} className="text-primary-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Schedule</h3>
            <p className="text-gray-600">{course.schedule}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Users size={28} className="text-primary-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Class Size</h3>
            <p className="text-gray-600">Small groups or individual</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
            <Award size={28} className="mr-3 text-primary-700" />
            Learning Objectives
          </h2>
          <div className="space-y-4">
            {course.objectives.map((objective: string, index: number) => (
              <div key={index} className="flex items-start">
                <CheckCircle size={24} className="text-accent-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{objective}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen size={28} className="mr-3 text-primary-700" />
            Course Content
          </h2>
          <div className="space-y-6">
            {course.topics.map((topic: any, index: number) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.subtopics.map((subtopic: string, idx: number) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary-700 mr-3">•</span>
                      {subtopic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Teaching Approach
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our teaching philosophy emphasizes deep understanding over memorization. Each
              session combines clear theoretical explanations with extensive worked examples and
              guided problem-solving practice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Course Materials</h4>
                <ul className="space-y-2">
                  {course.materials.map((material: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <CheckCircle size={18} className="text-primary-700 mr-2 mt-0.5" />
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Prerequisites</h4>
                <p className="text-gray-700 mb-4">{course.prerequisites}</p>
                <h4 className="font-semibold text-gray-900 mb-3">Assessment</h4>
                <p className="text-gray-700">{course.assessment}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Enroll?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your journey toward mathematical mastery with expert guidance and personalized
            instruction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('admission')}
              className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Apply for This Course
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Ask Questions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
