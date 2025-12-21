import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { sections } from '@/data/topicsData';
import { ArrowLeft, ArrowRight, BookOpen, Lightbulb, CheckCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TopicDetail = () => {
  const { sectionId, topicId } = useParams();
  const section = sections.find(s => s.id === Number(sectionId));
  const topic = section?.topics.find(t => t.id === Number(topicId));
  
  const prevTopic = section?.topics.find(t => t.id === Number(topicId) - 1);
  const nextTopic = section?.topics.find(t => t.id === Number(topicId) + 1);

  if (!topic || !section) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground">Mavzu topilmadi</p>
          <Link to="/mavzular" className="text-primary hover:underline mt-2 inline-block">
            Mavzularga qaytish
          </Link>
        </div>
      </div>
    );
  }

  // Parse content into sections for better formatting
  const contentParts = topic.content.split('. ');
  const introduction = contentParts.slice(0, 3).join('. ') + '.';
  const mainPoints = contentParts.slice(3, -2);
  const conclusion = contentParts.slice(-2).join('. ');

  // Extract key terms (words with numbers or specific patterns)
  const keyTerms = topic.content.match(/\d\)\s[^.]+/g) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link 
              to="/mavzular" 
              className="inline-flex items-center text-primary mb-6 hover:underline font-medium group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
              Mavzularga qaytish
            </Link>
            
            {/* Main Content Card */}
            <article className="bg-card rounded-3xl shadow-elegant overflow-hidden animate-fade-up">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 p-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>{section.title}</span>
                </div>
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {topic.title}
                </h1>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Mavzu {topic.id}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Introduction */}
                <div className="bg-primary/5 rounded-2xl p-6 mb-8 border-l-4 border-primary">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Asosiy tushuncha</h3>
                      <p className="text-foreground leading-relaxed">{introduction}</p>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground leading-relaxed text-lg mb-6">
                    {topic.content}
                  </p>
                </div>

                {/* Key Points if available */}
                {keyTerms.length > 0 && (
                  <div className="mt-8 bg-secondary/5 rounded-2xl p-6 border border-secondary/20">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-secondary" />
                      Muhim nuqtalar
                    </h3>
                    <ul className="space-y-3">
                      {keyTerms.slice(0, 5).map((term, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border"
                        >
                          <span className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-foreground">{term.replace(/^\d\)\s/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Summary Box */}
                <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">Xulosa</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bu mavzuda {topic.title.toLowerCase()} haqida to'liq ma'lumot berildi. 
                    Ushbu bilimlar akademik yozuv malakangizni oshirishda yordam beradi.
                  </p>
                </div>
              </div>
            </article>

            {/* Navigation */}
            <div className="flex justify-between mt-8 gap-4">
              {prevTopic ? (
                <Link to={`/mavzu/${sectionId}/${prevTopic.id}`} className="flex-1">
                  <Button variant="outline" className="w-full justify-start gap-2 h-auto py-4 px-6">
                    <ArrowLeft className="w-5 h-5" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Oldingi</p>
                      <p className="font-medium truncate">{prevTopic.title}</p>
                    </div>
                  </Button>
                </Link>
              ) : <div className="flex-1" />}
              
              {nextTopic ? (
                <Link to={`/mavzu/${sectionId}/${nextTopic.id}`} className="flex-1">
                  <Button variant="outline" className="w-full justify-end gap-2 h-auto py-4 px-6">
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Keyingi</p>
                      <p className="font-medium truncate">{nextTopic.title}</p>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              ) : <div className="flex-1" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
