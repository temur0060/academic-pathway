import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { sections } from '@/data/topicsData';
import { ChevronRight, BookOpen, Layers, ArrowRight, Sparkles } from 'lucide-react';

const Topics = () => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">O'rganish materiallari</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-3">
              Mavzular
            </h1>
            <div className="decoration-line mx-auto my-4" />
            <p className="text-muted-foreground">4 ta bo'lim, 60 ta mavzu</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-5">
            {sections.map((section, idx) => (
              <div key={section.id} className="animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <button
                  onClick={() => setSelectedSection(selectedSection === section.id ? null : section.id)}
                  className={`w-full rounded-2xl p-6 text-left flex items-center justify-between transition-all duration-300 group ${
                    selectedSection === section.id 
                      ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                      : 'card-elegant hover-lift hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all ${
                      selectedSection === section.id 
                        ? 'bg-primary-foreground/20' 
                        : 'bg-gradient-primary shadow-glow'
                    }`}>
                      <BookOpen className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className={`font-serif text-xl font-bold mb-1 ${
                        selectedSection === section.id ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {section.title}
                      </h2>
                      <p className={`text-sm ${
                        selectedSection === section.id ? 'text-primary-foreground/80' : 'text-muted-foreground'
                      }`}>
                        {section.description}
                      </p>
                      <div className={`inline-flex items-center gap-1 mt-2 text-xs font-medium px-2 py-1 rounded-full ${
                        selectedSection === section.id 
                          ? 'bg-primary-foreground/20 text-primary-foreground' 
                          : 'bg-accent/20 text-accent'
                      }`}>
                        <Layers className="w-3 h-3" />
                        {section.topics.length} ta mavzu
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${
                    selectedSection === section.id ? 'rotate-90 text-primary-foreground' : 'text-primary group-hover:translate-x-1'
                  }`} />
                </button>
                
                {selectedSection === section.id && (
                  <div className="mt-4 ml-6 grid gap-3 animate-fade-up">
                    {section.topics.map((topic, topicIdx) => (
                      <Link
                        key={topic.id}
                        to={`/mavzu/${section.id}/${topic.id}`}
                        className="group card-elegant p-5 flex items-center gap-4 hover:border-accent/50 hover:shadow-rose/30"
                        style={{ animationDelay: `${topicIdx * 30}ms` }}
                      >
                        <span className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center text-sm font-bold text-accent-foreground shadow-rose group-hover:scale-110 transition-transform">
                          {topic.id}
                        </span>
                        <span className="font-medium text-foreground flex-1 group-hover:text-primary transition-colors">
                          {topic.title}
                        </span>
                        <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-accent" />
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