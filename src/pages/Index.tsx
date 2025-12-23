import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, FileText, Clock, ArrowRight, Sparkles, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const scrollRef = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <div ref={scrollRef} className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-primary blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6 backdrop-blur-sm border border-accent/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">{t('home.welcome')}</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
              {t('home.title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              {t('home.subtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/mavzular">
                <Button size="lg" className="btn-gold text-lg px-8 py-6 rounded-xl font-semibold">
                  <BookOpen className="w-5 h-5 mr-2" /> {t('home.learnTopics')}
                </Button>
              </Link>
              <Link to="/test">
                <Button variant="outline" size="lg" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6 rounded-xl">
                  <FileText className="w-5 h-5 mr-2" /> {t('home.startTest')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto fill-background">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* Professor Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto animate-on-scroll">
            <div className="card-elegant p-8 md:p-12 hover-glow">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-36 h-36 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow animate-glow-pulse">
                    <GraduationCap className="w-20 h-20 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                    <Award className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <div className="text-center lg:text-left flex-1">
                  <div className="decoration-line mx-auto lg:mx-0 mb-4" />
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {t('home.professorName')}
                  </h2>
                  <p className="text-accent font-semibold mb-4 text-lg">{t('home.professorTitle')}</p>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {t('home.professorDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('home.aboutSubject')}
              </h2>
              <div className="decoration-line mx-auto" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: BookOpen, title: `60 ${t('home.topics')}`, desc: t('home.topicsDesc'), color: 'primary' },
                { icon: FileText, title: `90 ${t('home.tests')}`, desc: t('home.testsDesc'), color: 'accent' },
                { icon: Clock, title: `30 ${t('home.minutes')}`, desc: t('home.minutesDesc'), color: 'primary' },
                { icon: Users, title: t('home.certificate'), desc: t('home.certificateDesc'), color: 'accent' },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="animate-on-scroll card-elegant p-8 hover-lift group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center transition-all ${
                    item.color === 'accent' 
                      ? 'bg-gradient-gold shadow-gold group-hover:scale-110' 
                      : 'bg-gradient-primary shadow-glow group-hover:scale-110'
                  }`}>
                    <item.icon className={`w-7 h-7 ${item.color === 'accent' ? 'text-foreground' : 'text-primary-foreground'}`} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-1/4 w-40 h-40 rounded-full bg-accent blur-3xl animate-float" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-on-scroll">
          <Sparkles className="w-10 h-10 text-accent mx-auto mb-6 animate-bounce-gentle" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t('home.startNow')}
          </h2>
          <p className="mb-10 text-primary-foreground/80 text-lg max-w-xl mx-auto">
            {t('home.testYourKnowledge')}
          </p>
          <Link to="/test">
            <Button size="lg" className="btn-gold text-lg px-10 py-6 rounded-xl font-semibold">
              {t('home.startTest')} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-lg">Akademik Yozuv</span>
            </div>
            <p className="text-sm opacity-70">{t('home.footer')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;