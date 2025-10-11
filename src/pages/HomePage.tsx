import { ArrowRight, BookOpen, Award, Users, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    features: false,
    courses: false,
  });

  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(prev => ({ ...prev, hero: true }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (coursesRef.current) observer.observe(coursesRef.current);

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      title: 'CLA1 – Calculus & Linear Algebra 1',
      level: 'University',
      description: 'Master fundamental calculus and linear algebra concepts for university-level mathematics.',
      topics: ['Limits & Derivatives', 'Integration', 'Vectors & Matrices', 'Linear Systems'],
    },
    {
      title: 'IAL Pure Mathematics',
      level: 'A-Level',
      description: 'Comprehensive A-Level pure mathematics covering advanced algebraic and calculus topics.',
      topics: ['Algebraic Methods', 'Coordinate Geometry', 'Trigonometry', 'Calculus'],
    },
    {
      title: 'IGCSE Mathematics',
      level: 'IGCSE',
      description: 'Build a strong foundation in mathematics for IGCSE examinations.',
      topics: ['Number', 'Algebra', 'Geometry', 'Statistics & Probability'],
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=2000&q=80"
            alt="Mathematics and education"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-20 left-10 text-9xl font-serif text-primary-900 animate-fade-in">∫</div>
          <div className="absolute top-40 right-20 text-8xl font-serif text-primary-900 animate-fade-in animate-delay-100">∑</div>
          <div className="absolute bottom-40 left-1/4 text-7xl font-serif text-primary-900 animate-fade-in animate-delay-200">π</div>
          <div className="absolute bottom-20 right-1/3 text-6xl font-serif text-primary-900 animate-fade-in animate-delay-300">∞</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-8 leading-tight transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Education,
            <br />
            <span className="text-primary-700">Mastered.</span>
          </h1>
          <p className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-200 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Excellence in education with fully English instruction.
            Build mastery from IGCSE to university level across all subjects.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => onNavigate('courses')}
              className="group px-8 py-4 bg-primary-700 text-white font-medium rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Explore Courses</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('admission')}
              className="px-8 py-4 bg-white text-primary-700 font-medium rounded-full border-2 border-primary-700 hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join ShaDemy
            </button>
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              About ShaDemy
            </h2>
            <div className="w-20 h-1 bg-primary-700 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className={`text-lg text-gray-700 leading-relaxed transition-all duration-1000 delay-100 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              ShaDemy was founded on a simple belief: education should be accessible,
              engaging, and transformative. We offer fully English instruction
              for students seeking excellence across all subjects.
            </p>
            <p className={`text-lg text-gray-700 leading-relaxed transition-all duration-1000 delay-200 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our educators bring years of teaching experience and a deep passion for
              learning. We believe in building not just knowledge retention,
              but genuine understanding and critical thinking confidence.
            </p>
            <p className={`text-lg text-gray-700 leading-relaxed transition-all duration-1000 delay-300 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              From IGCSE to university-level courses, we provide structured, personalized
              instruction that meets students where they are and guides them toward mastery.
            </p>
          </div>
        </div>
      </section>

      <section id="features" ref={featuresRef} className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-700 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Why Choose ShaDemy
            </h2>
            <div className="w-20 h-1 bg-primary-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-sm hover-lift group transition-all duration-1000 border border-gray-100 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary-700 group-hover:to-primary-800 transition-all duration-300 shadow-sm">
                  <feature.icon size={28} className="text-primary-700 group-hover:text-white transition-colors duration-300" />
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

      <section id="courses" ref={coursesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.courses ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <div className="w-20 h-1 bg-primary-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured programs designed to build mastery at every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-2xl overflow-hidden hover-lift group transition-all duration-1000 ${isVisible.courses ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-primary-700 to-primary-900 p-8 text-white transition-all duration-500 group-hover:from-primary-800 group-hover:to-primary-950">
                  <div className="text-sm font-medium mb-2 opacity-90">
                    {course.level}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{course.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Key Topics:
                    </h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start transition-all duration-300 hover:translate-x-1">
                          <span className="text-primary-700 mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => onNavigate('courses')}
                    className="w-full py-3 text-primary-700 font-medium border-2 border-primary-700 rounded-full hover:bg-primary-700 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary-700 to-primary-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=2000&q=80"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center opacity-0 animate-fade-in-up relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-10 text-primary-100 leading-relaxed">
            Join students who are building confidence and achieving excellence in their studies.
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
