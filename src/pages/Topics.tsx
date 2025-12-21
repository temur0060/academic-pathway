import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { sections } from '@/data/topicsData';
import { ChevronRight, BookOpen, Layers, ArrowRight } from 'lucide-react';

const Topics = () => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
              <Layers className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mavzular
            </h1>
            <p className="text-muted-foreground mt-2">4 ta bo'lim, 60 ta mavzu</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-4">
            {sections.map((section, idx) => (
              <div key={section.id} className="animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <button
                  onClick={() => setSelectedSection(selectedSection === section.id ? null : section.id)}
                  className={`w-full rounded-2xl p-6 shadow-elegant text-left flex items-center justify-between transition-all border-2 ${
                    selectedSection === section.id 
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30' 
                      : 'bg-card border-transparent hover:border-primary/20 hover:shadow-glow/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                      selectedSection === section.id 
                        ? 'bg-gradient-primary shadow-glow' 
                        : 'bg-primary/10'
                    }`}>
                      <BookOpen className={`w-7 h-7 ${
                        selectedSection === section.id ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                    </div>
                    <div>
                      <h2 className="font-serif text-lg font-bold text-foreground">{section.title}</h2>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                      <p className="text-xs text-primary mt-1">{section.topics.length} ta mavzu</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-6 h-6 text-primary transition-transform duration-300 ${
                    selectedSection === section.id ? 'rotate-90' : ''
                  }`} />
                </button>
                
                {selectedSection === section.id && (
                  <div className="mt-3 ml-4 grid gap-2 animate-fade-up">
                    {section.topics.map((topic, topicIdx) => (
                      <Link
                        key={topic.id}
                        to={`/mavzu/${section.id}/${topic.id}`}
                        className="group bg-card rounded-xl p-4 transition-all duration-300 flex items-center gap-4 border-2 border-transparent hover:border-secondary hover:bg-secondary/5 hover:shadow-md"
                        style={{ animationDelay: `${topicIdx * 30}ms` }}
                      >
                        <span className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-sm font-bold text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                          {topic.id}
                        </span>
                        <span className="font-medium text-foreground flex-1 group-hover:text-secondary transition-colors">
                          {topic.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
