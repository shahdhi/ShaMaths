import { Award, BookOpen, Target, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [isVisible, setIsVisible] = useState({ story: false, philosophy: false, values: false });
  const storyRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (storyRef.current) observer.observe(storyRef.current);
    if (philosophyRef.current) observer.observe(philosophyRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description:
        'We are committed to the highest standards of mathematical instruction and student success.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description:
        'A genuine love for mathematics and teaching drives everything we do.',
    },
    {
      icon: BookOpen,
      title: 'Understanding',
      description:
        'We prioritize deep conceptual understanding over rote memorization.',
    },
    {
      icon: Award,
      title: 'Achievement',
      description:
        'We celebrate and support each student\'s unique path to mathematical mastery.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            About ShaDemy
          </h1>
          <div className="w-20 h-1 bg-primary-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building educational excellence through expert instruction and personalized learning
          </p>
        </div>

        <section id="story" ref={storyRef} className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 opacity-0 animate-fade-in-up">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
                <img
                  src="https://www.durhamsixthformcentre.org.uk/wp-content/uploads/sites/2/2024/10/image-6.png"
                  alt="Students collaborating on mathematics"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
            </div>
            <div className={`bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-3xl p-12 mb-12 transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  ShaDemy was founded on a simple yet powerful belief: education should be
                  accessible, engaging, and transformative. We offer fully
                  English instruction for students seeking excellence across all subjects,
                  from IGCSE through university level.
                </p>
                <p>
                  Our team brings extensive teaching experience and a deep passion for
                  learning. Having witnessed countless students struggle not with the subjects
                  themselves, but with how they were taught, ShaDemy was created to
                  bridge that gap.
                </p>
                <p>
                  We believe that education is more than memorization and procedures. It is a way
                  of thinking, a method for understanding the world, and a tool for solving
                  problems. Our mission is to help students discover the joy and power of
                  learning across all disciplines.
                </p>
              </div>
            </div>

            <div id="philosophy" ref={philosophyRef} className={`bg-white border border-gray-200 rounded-3xl p-12 transition-all duration-1000 delay-200 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Teaching Philosophy
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At ShaDemy, we believe in building genuine understanding rather than mere
                  rote memorization. Our approach emphasizes:
                </p>
                <ul className="space-y-4 ml-6">
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary-700 mr-3 text-2xl font-bold">•</span>
                    <span>
                      <strong className="text-gray-900">Conceptual Clarity:</strong> We ensure
                      students understand the 'why' behind every concept, not just the 'how'.
                    </span>
                  </li>
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary-700 mr-3 text-2xl font-bold">•</span>
                    <span>
                      <strong className="text-gray-900">Problem-Solving Skills:</strong>{' '}
                      Learning is enhanced by doing. We provide extensive practice with
                      carefully selected exercises.
                    </span>
                  </li>
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary-700 mr-3 text-2xl font-bold">•</span>
                    <span>
                      <strong className="text-gray-900">Individual Attention:</strong> Small
                      class sizes ensure every student receives personalized guidance and
                      support.
                    </span>
                  </li>
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary-700 mr-3 text-2xl font-bold">•</span>
                    <span>
                      <strong className="text-gray-900">Confidence Building:</strong> We help
                      students develop the self-assurance to tackle challenging topics
                      independently.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="values" ref={valuesRef} className="mb-20 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary-700 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-600 rounded-full blur-3xl"></div>
          </div>
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-primary-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-2xl p-8 text-center hover-lift transition-all duration-1000 group relative z-10 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:from-primary-700 group-hover:to-primary-800 shadow-sm">
                  <value.icon size={32} className="text-primary-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Credentials & Experience
            </h2>
            <div className="bg-white border border-gray-200 rounded-3xl p-12">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our instruction is backed by extensive teaching experience across multiple
                  educational systems and levels. We have successfully prepared students for:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary-700 mr-3">✓</span>
                    <span>IGCSE examinations across multiple subjects</span>
                  </li>
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary-700 mr-3">✓</span>
                    <span>International A-Level (IAL) programs</span>
                  </li>
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary-700 mr-3">✓</span>
                    <span>University-level courses across STEM and humanities</span>
                  </li>
                  <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                    <span className="text-primary-700 mr-3">✓</span>
                    <span>Academic advancement and university preparation</span>
                  </li>
                </ul>
                <p>
                  Our students have achieved exceptional results and progressed to top
                  universities worldwide. We take pride in not just preparing students for
                  examinations, but in fostering a lasting appreciation for
                  learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-12 text-white text-center opacity-0 animate-scale-in" style={{ animationDelay: '600ms' }}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join the ShaDemy Community
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the difference that expert instruction and genuine passion for teaching can
            make in your educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('admission')}
              className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Apply for Admission
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
