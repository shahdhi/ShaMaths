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
  
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    setTimeout(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.15, rootMargin: '-50px' }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (coursesRef.current) observer.observe(coursesRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
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

  // Apple-style parallax calculations
  const heroOpacity = Math.max(0, 1 - scrollY / 600);
  const heroScale = Math.max(0.85, 1 - scrollY / 2000);
  const heroBlur = Math.min(10, scrollY / 80);

  return (
    <div className="bg-white">
      {/* Hero Section with Apple-style animations */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30"
        style={{
          opacity: heroOpacity,
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=2000&q=80"
            alt="Mathematics and education"
            className="w-full h-full object-cover opacity-10 transition-transform duration-1000 ease-out"
            style={{
              transform: `scale(${1 + scrollY / 2000}) translateY(${scrollY * 0.5}px)`,
              filter: `blur(${heroBlur}px)`,
            }}
          />
        </div>
        
        {/* Mathematical symbols with parallax */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div 
            className="absolute top-20 left-10 text-9xl font-serif text-primary-900 transition-all duration-700 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)`,
              opacity: Math.max(0, 1 - scrollY / 400)
            }}
          >
            ∫
          </div>
          <div 
            className="absolute top-40 right-20 text-8xl font-serif text-primary-900 transition-all duration-700 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.4}px) rotate(${-scrollY * 0.05}deg)`,
              opacity: Math.max(0, 1 - scrollY / 400)
            }}
          >
            ∑
          </div>
          <div 
            className="absolute bottom-40 left-1/4 text-7xl font-serif text-primary-900 transition-all duration-700 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.25}px)`,
              opacity: Math.max(0, 1 - scrollY / 400)
            }}
          >
            π
          </div>
          <div 
            className="absolute bottom-20 right-1/3 text-6xl font-serif text-primary-900 transition-all duration-700 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.35}px)`,
              opacity: Math.max(0, 1 - scrollY / 400)
            }}
          >
            ∞
          </div>
        </div>

        <div 
          className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center"
          style={{
            transform: `scale(${heroScale}) translateY(${scrollY * 0.4}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-8 leading-tight"
            style={{
              opacity: isVisible.hero ? 1 : 0,
              transform: isVisible.hero ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Mathematics,
            <br />
            <span className="text-primary-700">Mastered.</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{
              opacity: isVisible.hero ? 1 : 0,
              transform: isVisible.hero ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            Excellence in mathematics education with fully English instruction.
            Build mastery from IGCSE to university level.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              opacity: isVisible.hero ? 1 : 0,
              transform: isVisible.hero ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
            }}
          >
            <button
              onClick={() => onNavigate('courses')}
              className="group px-8 py-4 bg-primary-700 text-white font-medium rounded-full hover:bg-primary-800 transition-all duration-500 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Explore Courses</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-500 ease-out" />
            </button>
            <button
              onClick={() => onNavigate('admission')}
              className="px-8 py-4 bg-white text-primary-700 font-medium rounded-full border-2 border-primary-700 hover:bg-primary-50 transition-all duration-500 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Join Sha Maths
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            style={{
              opacity: isVisible.about ? 1 : 0,
              transform: isVisible.about ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              About Sha Maths
            </h2>
            <div className="w-20 h-1 bg-primary-700 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              'Sha Maths was founded on a simple belief: mathematics should be accessible, engaging, and transformative. We offer fully English instruction for students seeking excellence in mathematics education.',
              'Our founder brings years of teaching experience and a deep passion for mathematical thinking. We believe in building not just computational skills, but genuine understanding and problem-solving confidence.',
              'From IGCSE to university-level courses, we provide structured, personalized instruction that meets students where they are and guides them toward mastery.'
            ].map((text, index) => (
              <p 
                key={index}
                className="text-lg text-gray-700 leading-relaxed"
                style={{
                  opacity: isVisible.about ? 1 : 0,
                  transform: isVisible.about ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.15}s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.15}s`,
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-700 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div 
            className="text-center mb-16"
            style={{
              opacity: isVisible.features ? 1 : 0,
              transform: isVisible.features ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Why Choose Sha Maths
            </h2>
            <div className="w-20 h-1 bg-primary-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm group border border-gray-100 cursor-pointer"
                style={{
                  opacity: isVisible.features ? 1 : 0,
                  transform: isVisible.features ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.1}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary-700 group-hover:to-primary-800 transition-all duration-500 ease-out shadow-sm group-hover:scale-110">
                  <feature.icon size={28} className="text-primary-700 group-hover:text-white transition-colors duration-500" />
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

      {/* Courses Section */}
      <section id="courses" ref={coursesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            style={{
              opacity: isVisible.courses ? 1 : 0,
              transform: isVisible.courses ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
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
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden group cursor-pointer"
                style={{
                  opacity: isVisible.courses ? 1 : 0,
                  transform: isVisible.courses ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + index * 0.15}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + index * 0.15}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="bg-gradient-to-br from-primary-700 to-primary-900 p-8 text-white transition-all duration-700 ease-out group-hover:from-primary-800 group-hover:to-primary-950">
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
                        <li key={idx} className="text-sm text-gray-600 flex items-start group/item">
                          <span className="text-primary-700 mr-2 transition-transform duration-300 group-hover/item:translate-x-1">•</span>
                          <span className="transition-transform duration-300 group-hover/item:translate-x-1">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => onNavigate('courses')}
                    className="w-full py-3 text-primary-700 font-medium border-2 border-primary-700 rounded-full hover:bg-primary-700 hover:text-white transition-all duration-500 ease-out active:scale-95"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-700 to-primary-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=2000&q=80"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-10 text-primary-100 leading-relaxed">
            Join students who are building confidence and achieving excellence in mathematics.
          </p>
          <button
            onClick={() => onNavigate('admission')}
            className="px-10 py-4 bg-white text-primary-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-500 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          >
            Apply for Admission
          </button>
        </div>
      </section>
    </div>
  );
}
