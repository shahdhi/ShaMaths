import { ArrowRight, BookOpen, Award, Users, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      title: 'Foundations of Algebra & Arithmetic',
      level: 'Beginner',
      description: 'Build confidence in numbers, operations, and algebraic thinking. Turn confusion into clarity.',
      topics: ['Place Value & Decimals', 'Order of Operations', 'Basic Algebra', 'Linear Graphing'],
    },
    {
      title: 'Algebraic Techniques & Functions',
      level: 'Intermediate',
      description: 'Transition from basic algebra to powerful problem-solving tools and formal mathematics.',
      topics: ['Quadratics', 'Functions & Graphs', 'Simultaneous Equations', 'Logarithms'],
    },
    {
      title: 'Calculus & Mathematical Modeling',
      level: 'Advanced',
      description: 'Master calculus and its real-world applications. Prepare for university mathematics.',
      topics: ['Differentiation', 'Integration', 'Differential Equations', 'Optimization'],
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Expert Instruction',
      description: 'Learn from experienced educators with deep subject mastery and teaching excellence.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of student success in examinations and academic progression.',
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Personalized attention with focused small-group or individual sessions.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Structured curriculum designed to build confidence and mathematical thinking.',
    },
  ];

  return (
    <div className="bg-white">
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30"
      >
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-20 left-10 text-9xl font-serif text-primary-900">∫</div>
          <div className="absolute top-40 right-20 text-8xl font-serif text-primary-900">∑</div>
          <div className="absolute bottom-40 left-1/4 text-7xl font-serif text-primary-900">π</div>
          <div className="absolute bottom-20 right-1/3 text-6xl font-serif text-primary-900">∞</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-8 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Mathematics,
            <br />
            <span className="text-primary-700">Mastered.</span>
          </h1>
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Excellence in mathematics education with fully English instruction in Japan.
            Build mastery from IGCSE to university level.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={() => onNavigate('courses')}
              className="group px-8 py-4 bg-primary-700 text-white font-medium rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Explore Courses</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => onNavigate('admission')}
              className="px-8 py-4 bg-white text-primary-700 font-medium rounded-full border-2 border-primary-700 hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Sha Maths
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              About Sha Maths
            </h2>
            <div className="w-20 h-1 bg-primary-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sha Maths was founded on a simple belief: mathematics should be accessible,
                engaging, and transformative. Based in Japan, we offer fully English instruction
                for students seeking excellence in mathematics education.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our founder brings years of teaching experience and a deep passion for
                mathematical thinking. We believe in building not just computational skills,
                but genuine understanding and problem-solving confidence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From IGCSE to university-level courses, we provide structured, personalized
                instruction that meets students where they are and guides them toward mastery.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Student learning mathematics"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Why Choose Sha Maths
            </h2>
            <div className="w-20 h-1 bg-primary-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-700 transition-colors">
                  <feature.icon
                    size={28}
                    className="text-primary-700 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <div className="w-20 h-1 bg-primary-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured programs designed to build mastery at every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const courseImages = [
                'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800',
              ];
              return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={courseImages[index]}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-primary-700/70 flex items-end">
                    <div className="p-6 w-full">
                      <div className="text-sm font-medium mb-2 text-white/90">
                        {course.level}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-white">{course.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Key Topics:
                    </h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-primary-700 mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => onNavigate('courses')}
                    className="w-full py-3 text-primary-700 font-medium border-2 border-primary-700 rounded-full hover:bg-primary-700 hover:text-white transition-colors group-hover:bg-primary-700 group-hover:text-white"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-10 text-primary-100 leading-relaxed">
            Join students who are building confidence and achieving excellence in mathematics.
          </p>
          <button
            onClick={() => onNavigate('admission')}
            className="px-10 py-4 bg-white text-primary-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Apply for Admission
          </button>
        </div>
      </section>
    </div>
  );
}
