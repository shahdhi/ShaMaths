import { ArrowLeft, BookOpen, Clock, Users, Calendar, Award, CheckCircle, FileText, Target } from 'lucide-react';

interface CourseDetailPageProps {
  courseId: string;
  onNavigate: (page: string) => void;
}

export default function CourseDetailPage({ courseId, onNavigate }: CourseDetailPageProps) {
  const courseDetails: Record<string, any> = {
    cla1: {
      title: 'CLA1 – Calculus & Linear Algebra 1',
      level: 'University',
      subtitle: 'Master the foundations of university-level mathematics',
      description:
        'A comprehensive introduction to university-level mathematics, covering fundamental concepts in single-variable calculus and linear algebra. This course builds a solid foundation for advanced mathematical thinking and problem-solving, designed specifically for first-year university students.',
      whoIsItFor: 'First-year university mathematics students, engineering students, and advanced learners seeking rigorous mathematical foundations.',
      whyItMatters: 'CLA1 forms the cornerstone of higher mathematics. These concepts are essential for advanced studies in mathematics, physics, engineering, computer science, and economics.',
      objectives: [
        'Master fundamental calculus concepts including limits, derivatives, and integrals',
        'Develop proficiency in linear algebra, including vectors, matrices, and linear systems',
        'Apply mathematical concepts to solve real-world problems',
        'Build strong analytical and rigorous proof-based thinking',
      ],
      topics: [
        {
          title: 'Limits and Continuity',
          subtopics: [
            'Intuitive understanding of limits',
            'Formal epsilon-delta definition',
            'Limit laws and techniques',
            'Continuity and the Intermediate Value Theorem',
          ],
        },
        {
          title: 'Differentiation',
          subtopics: [
            'Definition and interpretation of derivatives',
            'Differentiation rules and techniques',
            'Applications: optimization and related rates',
            'Implicit and higher-order differentiation',
          ],
        },
        {
          title: 'Integration',
          subtopics: [
            'Riemann sums and definite integrals',
            'Fundamental Theorem of Calculus',
            'Integration techniques and substitution',
            'Applications: area, volume, and work',
          ],
        },
        {
          title: 'Vectors and Linear Systems',
          subtopics: [
            'Vector operations and geometric interpretation',
            'Linear independence and span',
            'Systems of linear equations',
            'Gaussian elimination and row reduction',
          ],
        },
        {
          title: 'Matrices and Linear Transformations',
          subtopics: [
            'Matrix operations and algebra',
            'Determinants and matrix inverses',
            'Eigenvalues and eigenvectors',
            'Applications to transformations',
          ],
        },
      ],
      format: 'Weekly 2-hour sessions combining rigorous theory, detailed worked examples, and guided problem-solving',
      schedule: 'Flexible scheduling with morning, afternoon, and evening options',
      materials: [
        'Custom-designed textbook and comprehensive course notes',
        'Weekly problem sets with detailed solutions',
        'Video recordings of all sessions',
        'Past examination papers and model solutions',
      ],
      teachingStyle: 'Our approach emphasizes deep conceptual understanding over rote memorization. Each session builds intuition through visual reasoning, then progresses to formal mathematical rigor. We focus on developing problem-solving strategies and mathematical maturity.',
      prerequisites: 'Strong foundation in A-Level mathematics or equivalent',
    },
    'ial-pure': {
      title: 'IAL Pure Mathematics (P1, P2, P3, P4)',
      level: 'A-Level',
      subtitle: 'Complete A-Level pure mathematics mastery',
      description:
        'Comprehensive coverage of all four IAL pure mathematics modules (P1-P4) with emphasis on conceptual understanding and exam technique. This course is designed to take students from foundational algebra through to advanced calculus and proof.',
      whoIsItFor: 'A-Level students pursuing IAL qualifications, students preparing for university mathematics, and learners seeking rigorous mathematical training.',
      whyItMatters: 'Pure mathematics develops logical reasoning and problem-solving skills essential for STEM careers. Excellence in these modules opens doors to top universities worldwide.',
      objectives: [
        'Master all topics across P1, P2, P3, and P4 modules',
        'Develop exam technique and time management skills',
        'Build strong algebraic manipulation and proof skills',
        'Achieve confidence in tackling complex mathematical problems',
      ],
      topics: [
        {
          title: 'Algebra and Functions (P1, P2)',
          subtopics: [
            'Algebraic expressions and manipulation',
            'Quadratic equations and inequalities',
            'Polynomials and factor theorem',
            'Functions, domain, and range',
          ],
        },
        {
          title: 'Coordinate Geometry (P1, P3)',
          subtopics: [
            'Straight lines and circles',
            'Parametric equations',
            'Coordinate geometry applications',
            'Loci and regions',
          ],
        },
        {
          title: 'Trigonometry (P2, P3)',
          subtopics: [
            'Trigonometric ratios and identities',
            'Solving trigonometric equations',
            'Compound and double angle formulas',
            'Trigonometric graphs and transformations',
          ],
        },
        {
          title: 'Calculus (P1, P2, P3, P4)',
          subtopics: [
            'Differentiation from first principles',
            'Integration techniques',
            'Applications to rates of change',
            'Differential equations',
          ],
        },
        {
          title: 'Series and Proof (P3, P4)',
          subtopics: [
            'Sequences and series',
            'Binomial expansion',
            'Mathematical induction',
            'Proof by contradiction',
          ],
        },
      ],
      format: 'Modular tutoring sessions aligned with each paper, 90 minutes per session',
      schedule: 'Exam-focused schedule aligned with IAL examination dates',
      materials: [
        'IAL endorsed textbooks for all modules',
        'Sha Maths custom worksheet collection',
        'Past paper compilations with mark schemes',
        'Formula sheets and revision guides',
      ],
      teachingStyle: 'We combine conceptual teaching with intensive exam practice. Each topic is mastered through understanding, then reinforced with past paper questions. Special focus on common exam pitfalls and mark-winning techniques.',
      prerequisites: 'IGCSE Mathematics or equivalent',
    },
    'ial-mechanics': {
      title: 'IAL Mechanics (M1, M2, M3)',
      level: 'A-Level',
      subtitle: 'Physics meets mathematics',
      description:
        'Complete coverage of IAL mechanics modules focusing on the mathematical modeling of physical systems. From basic kinematics to advanced dynamics, this course develops both conceptual understanding and problem-solving prowess.',
      whoIsItFor: 'A-Level students taking mechanics modules, aspiring engineers and physicists, and students who want to understand how mathematics describes the physical world.',
      whyItMatters: 'Mechanics bridges pure mathematics and physics, essential for engineering, physics, and applied mathematics degrees. Strong mechanics skills are highly valued by top universities.',
      objectives: [
        'Master kinematics and dynamics across all three modules',
        'Develop intuition for physical systems through mathematical modeling',
        'Excel at applying Newton\'s laws to complex scenarios',
        'Build confidence with force diagrams and vector analysis',
      ],
      topics: [
        {
          title: 'Kinematics (M1, M2)',
          subtopics: [
            'Motion in one dimension',
            'Motion in two dimensions and projectiles',
            'Variable acceleration',
            'Calculus in kinematics',
          ],
        },
        {
          title: 'Forces and Newton\'s Laws (M1, M2, M3)',
          subtopics: [
            'Force as a vector',
            'Newton\'s laws of motion',
            'Connected particles and pulleys',
            'Friction and inclined planes',
          ],
        },
        {
          title: 'Energy and Work (M2, M3)',
          subtopics: [
            'Work done by constant and variable forces',
            'Kinetic and potential energy',
            'Conservation of energy',
            'Power and efficiency',
          ],
        },
        {
          title: 'Momentum and Impulse (M2, M3)',
          subtopics: [
            'Conservation of momentum',
            'Impulse and impact',
            'Collisions and restitution',
            'Advanced momentum problems',
          ],
        },
        {
          title: 'Circular Motion (M3)',
          subtopics: [
            'Uniform circular motion',
            'Angular velocity',
            'Centripetal force and acceleration',
            'Vertical circles and motion in a plane',
          ],
        },
      ],
      format: 'Conceptual sessions with visual modeling followed by intensive problem-solving practice',
      schedule: 'Aligned with IAL examination schedule, flexible session times',
      materials: [
        'IAL mechanics textbooks',
        'Visual aids and simulation tools',
        'Extensive past paper collection',
        'Custom problem sets with real-world applications',
      ],
      teachingStyle: 'Mechanics requires both conceptual understanding and problem-solving technique. We start with physical intuition, build mathematical models, then practice extensively. Special emphasis on drawing accurate diagrams and setting up equations correctly.',
      prerequisites: 'IGCSE Mathematics and concurrent study of IAL Pure Mathematics',
    },
    'ial-further-pure': {
      title: 'IAL Further Pure Mathematics (FP1, FP2, FP3)',
      level: 'A-Level',
      subtitle: 'Advanced mathematics for high achievers',
      description:
        'Exploration of advanced mathematical topics beyond standard A-Level. This course covers complex numbers, advanced matrices, differential equations, and more, preparing students for university-level mathematics.',
      whoIsItFor: 'High-achieving A-Level students aiming for top mathematics, physics, or engineering programs. Ideal for those passionate about mathematical depth and beauty.',
      whyItMatters: 'Further Pure Mathematics distinguishes exceptional candidates. These advanced topics provide a significant advantage in university applications and prepare students for undergraduate mathematics.',
      objectives: [
        'Master complex numbers and their geometric interpretation',
        'Develop proficiency in advanced matrix algebra',
        'Solve differential equations using multiple techniques',
        'Build mathematical sophistication and proof skills',
      ],
      topics: [
        {
          title: 'Complex Numbers (FP1, FP2)',
          subtopics: [
            'Complex arithmetic and algebra',
            'Argand diagrams and geometric interpretation',
            'De Moivre\'s theorem and applications',
            'Complex roots and polynomials',
          ],
        },
        {
          title: 'Matrix Algebra (FP1, FP3)',
          subtopics: [
            'Matrix operations and inverses',
            'Linear transformations',
            'Eigenvalues and eigenvectors',
            'Diagonalization and applications',
          ],
        },
        {
          title: 'Differential Equations (FP2, FP3)',
          subtopics: [
            'First-order differential equations',
            'Second-order linear differential equations',
            'Applications to physical systems',
            'Series solutions and special cases',
          ],
        },
        {
          title: 'Polar Coordinates (FP2)',
          subtopics: [
            'Polar coordinate system',
            'Converting between Cartesian and polar',
            'Polar curves and their properties',
            'Area and arc length in polar form',
          ],
        },
        {
          title: 'Vectors in 3D (FP3)',
          subtopics: [
            'Vector algebra in three dimensions',
            'Lines and planes in 3D space',
            'Scalar and vector products',
            'Applications to geometry',
          ],
        },
      ],
      format: 'Deep-dive sessions emphasizing understanding over memorization, with visual modeling tools',
      schedule: 'Flexible scheduling aligned with IAL examination dates',
      materials: [
        'IAL Further Pure textbooks',
        'Sha Maths advanced problem collections',
        'Visual modeling software for complex topics',
        'University-level supplementary reading',
      ],
      teachingStyle: 'Further Pure requires mathematical maturity. We focus on building deep intuition, exploring connections between topics, and developing rigorous proof skills. Sessions include visualization tools and real-world applications.',
      prerequisites: 'Strong performance in IAL Pure Mathematics (P1, P2)',
    },
    'igcse-maths-a': {
      title: 'IGCSE Mathematics A',
      level: 'IGCSE',
      subtitle: 'Build solid mathematical foundations',
      description:
        'Comprehensive preparation for IGCSE Mathematics A (Core curriculum), covering all fundamental topics with emphasis on understanding and exam technique. Designed to build confidence and mathematical fluency.',
      whoIsItFor: 'IGCSE students taking the core mathematics curriculum, students building foundations for A-Level study, and learners seeking solid mathematical grounding.',
      whyItMatters: 'Strong IGCSE results open doors to advanced mathematics courses and demonstrate essential problem-solving skills valued across all disciplines.',
      objectives: [
        'Master all topics in the IGCSE A curriculum',
        'Develop strong number sense and algebraic skills',
        'Build exam confidence and time management',
        'Create solid foundation for A-Level mathematics',
      ],
      topics: [
        {
          title: 'Number and Algebra',
          subtopics: [
            'Number operations and BIDMAS',
            'Fractions, decimals, and percentages',
            'Algebraic manipulation and equations',
            'Sequences and patterns',
          ],
        },
        {
          title: 'Geometry and Mensuration',
          subtopics: [
            'Properties of shapes and angles',
            'Area and perimeter calculations',
            'Volume and surface area',
            'Pythagoras theorem and trigonometry',
          ],
        },
        {
          title: 'Coordinate Geometry',
          subtopics: [
            'Plotting points and lines',
            'Gradient and equation of a line',
            'Distance between points',
            'Graphs of functions',
          ],
        },
        {
          title: 'Statistics and Data',
          subtopics: [
            'Data collection and representation',
            'Mean, median, and mode',
            'Range and statistical measures',
            'Interpreting graphs and charts',
          ],
        },
        {
          title: 'Probability',
          subtopics: [
            'Basic probability concepts',
            'Probability of combined events',
            'Tree diagrams and sample spaces',
            'Expected values',
          ],
        },
      ],
      format: 'Foundation-level tutoring with patient, step-by-step instruction',
      schedule: 'Year-round enrollment with flexible session times',
      materials: [
        'IGCSE endorsed textbooks',
        'Sha Maths revision sheets and worksheets',
        'Past paper collections with detailed solutions',
        'Interactive online resources',
      ],
      teachingStyle: 'We build confidence through mastery of fundamentals. Each concept is broken down into manageable steps, practiced thoroughly, then applied to exam questions. Emphasis on clear explanations and patient guidance.',
      prerequisites: 'Basic arithmetic skills',
    },
    'igcse-maths-b': {
      title: 'IGCSE Mathematics B',
      level: 'IGCSE',
      subtitle: 'Excel in extended mathematics',
      description:
        'Comprehensive preparation for IGCSE Mathematics B (Extended curriculum), covering advanced topics and challenging problem-solving. Designed for high-achieving students preparing for A-Level mathematics.',
      whoIsItFor: 'High-achieving IGCSE students taking extended mathematics, students planning to pursue A-Level mathematics, and learners seeking mathematical excellence.',
      whyItMatters: 'Extended IGCSE mathematics provides excellent preparation for A-Level success and demonstrates strong mathematical aptitude to universities and employers.',
      objectives: [
        'Excel in all extended curriculum topics',
        'Develop advanced problem-solving strategies',
        'Build confidence with challenging mathematical concepts',
        'Prepare thoroughly for A-Level mathematics',
      ],
      topics: [
        {
          title: 'Advanced Algebra',
          subtopics: [
            'Quadratic equations and factorization',
            'Simultaneous equations (linear and non-linear)',
            'Inequalities and their graphs',
            'Functions and inverse functions',
          ],
        },
        {
          title: 'Trigonometry',
          subtopics: [
            'Sine, cosine, and tangent ratios',
            'Solving right and non-right triangles',
            'Trigonometric graphs and transformations',
            'Applications to real-world problems',
          ],
        },
        {
          title: 'Functions and Graphs',
          subtopics: [
            'Linear, quadratic, and cubic functions',
            'Exponential and reciprocal graphs',
            'Graph transformations',
            'Interpreting complex graphs',
          ],
        },
        {
          title: 'Calculus Fundamentals',
          subtopics: [
            'Gradient of a curve',
            'Basic differentiation',
            'Finding maximum and minimum points',
            'Introduction to integration',
          ],
        },
        {
          title: 'Advanced Problem Solving',
          subtopics: [
            'Multi-step problems',
            'Proof and reasoning',
            'Vectors and transformations',
            'Advanced statistics',
          ],
        },
      ],
      format: 'Exam-focused sessions with emphasis on challenging problems and deep understanding',
      schedule: 'Year-round enrollment with flexible scheduling',
      materials: [
        'Extended IGCSE textbooks',
        'Sha Maths advanced problem collections',
        'Past paper compilations (extended level)',
        'Preparation materials for A-Level transition',
      ],
      teachingStyle: 'Extended IGCSE requires both conceptual depth and problem-solving agility. We challenge students with harder problems, teach efficient techniques, and build mathematical confidence. Strong focus on exam strategy and avoiding common pitfalls.',
      prerequisites: 'Strong performance in lower secondary mathematics',
    },
  };

  const course = courseDetails[courseId] || courseDetails['cla1'];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => onNavigate('courses')}
            className="flex items-center text-white/90 hover:text-white font-medium mb-8 group transition-all duration-300 opacity-0 animate-fade-in"
          >
            <ArrowLeft
              size={20}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            Back to Courses
          </button>

          <div className="opacity-0 animate-fade-in-up animate-delay-100">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 text-white">
              {course.level}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-6 font-light">
              {course.subtitle}
            </p>
            <p className="text-lg text-primary-50 leading-relaxed max-w-3xl">
              {course.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 opacity-0 animate-fade-in-up animate-delay-200">
          <div className="bg-gray-50 rounded-2xl p-6 hover-lift">
            <Clock size={32} className="text-primary-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Duration</h3>
            <p className="text-gray-600 leading-relaxed">{course.format}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 hover-lift">
            <Calendar size={32} className="text-primary-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Schedule</h3>
            <p className="text-gray-600 leading-relaxed">{course.schedule}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 hover-lift">
            <Users size={32} className="text-primary-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Class Size</h3>
            <p className="text-gray-600 leading-relaxed">Small groups or individual</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 opacity-0 animate-fade-in-up animate-delay-300">
          <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-2xl p-8 hover-lift">
            <Target size={28} className="text-primary-700 mb-4" />
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Who Is This For?</h3>
            <p className="text-gray-700 leading-relaxed">{course.whoIsItFor}</p>
          </div>
          <div className="bg-gradient-to-br from-accent-50 to-white border border-accent-100 rounded-2xl p-8 hover-lift">
            <Award size={28} className="text-accent-700 mb-4" />
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Why It Matters</h3>
            <p className="text-gray-700 leading-relaxed">{course.whyItMatters}</p>
          </div>
        </div>

        <section className="mb-16 opacity-0 animate-fade-in-up animate-delay-400">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 flex items-center">
            <CheckCircle size={32} className="mr-3 text-primary-700" />
            Learning Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.objectives.map((objective: string, index: number) => (
              <div key={index} className="flex items-start bg-gray-50 rounded-xl p-6 hover-lift">
                <CheckCircle size={24} className="text-accent-600 mr-4 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 opacity-0 animate-fade-in-up animate-delay-500">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen size={32} className="mr-3 text-primary-700" />
            Topics Covered
          </h2>
          <div className="space-y-6">
            {course.topics.map((topic: any, index: number) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover-lift"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 font-serif">{topic.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topic.subtopics.map((subtopic: string, idx: number) => (
                    <div key={idx} className="flex items-start text-gray-700 transition-all duration-300 hover:translate-x-1">
                      <span className="text-primary-700 mr-3 text-lg">•</span>
                      <span className="leading-relaxed">{subtopic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
            Teaching Style & Approach
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-2xl p-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {course.teachingStyle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-xl flex items-center">
                  <FileText size={22} className="mr-2 text-primary-700" />
                  Course Materials
                </h4>
                <ul className="space-y-3">
                  {course.materials.map((material: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-700 leading-relaxed">
                      <CheckCircle size={20} className="text-primary-700 mr-3 mt-0.5 flex-shrink-0" />
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-xl flex items-center">
                  <Award size={22} className="mr-2 text-accent-700" />
                  Prerequisites
                </h4>
                <p className="text-gray-700 leading-relaxed mb-6">{course.prerequisites}</p>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    All sessions conducted in English with comprehensive materials provided. Flexible scheduling available to accommodate your timezone and commitments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-12 text-white text-center opacity-0 animate-scale-in" style={{ animationDelay: '700ms' }}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Begin?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Start your journey toward mathematical mastery with expert guidance, personalized
            instruction, and comprehensive support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('admission')}
              className="px-10 py-4 bg-white text-primary-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl text-lg"
            >
              Apply for This Course
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 text-lg"
            >
              Ask Questions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
