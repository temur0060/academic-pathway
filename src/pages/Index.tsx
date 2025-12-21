import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, FileText, Clock, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Akademik Yozuv Fani
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Ilmiy yozuv san'atini o'rganing va professional darajaga ko'tariling
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/mavzular">
                <Button variant="glass" size="lg">
                  <BookOpen className="w-5 h-5 mr-2" /> Mavzularni o'rganing
                </Button>
              </Link>
              <Link to="/test">
                <Button variant="glass" size="lg">
                  <FileText className="w-5 h-5 mr-2" /> Testni boshlash
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professor Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-primary-foreground" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Professor Bazarov</h2>
                  <p className="text-primary font-medium mb-4">Akademik Yozuv Fani O'qituvchisi</p>
                  <p className="text-muted-foreground">
                    Ko'p yillik tajribaga ega mutaxassis. Talabalarga ilmiy yozuv san'atini o'rgatish va ularni professional darajaga olib chiqish ustida ishlaydi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Subject */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8">Fan Haqida</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: BookOpen, title: "60 ta Mavzu", desc: "4 bo'limda to'liq ma'lumotlar" },
                { icon: FileText, title: "90 ta Test", desc: "Bilimingizni sinab ko'ring" },
                { icon: Clock, title: "30 Daqiqa", desc: "Test uchun ajratilgan vaqt" },
                { icon: GraduationCap, title: "Sertifikat", desc: "Muvaffaqiyatli tugatganlar uchun" },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-6 shadow-elegant hover-lift">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="font-serif text-3xl font-bold mb-4">Hoziroq Boshlang!</h2>
          <p className="mb-8 opacity-90">Akademik yozuv bo'yicha bilimingizni sinab ko'ring</p>
          <Link to="/test">
            <Button variant="glass" size="xl">
              Testni Boshlash <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">© 2024 Akademik Yozuv Platformasi. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
