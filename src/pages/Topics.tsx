import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { sections } from '@/data/topicsData';
import { ChevronRight, BookOpen } from 'lucide-react';

const Topics = () => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8 animate-fade-up">Mavzular</h1>
          
          <div className="max-w-4xl mx-auto grid gap-4">
            {sections.map((section, idx) => (
              <div key={section.id} className="animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <button
                  onClick={() => setSelectedSection(selectedSection === section.id ? null : section.id)}
                  className="w-full bg-card rounded-xl p-6 shadow-elegant hover-lift text-left flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-serif text-lg font-bold">{section.title}</h2>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-6 h-6 transition-transform ${selectedSection === section.id ? 'rotate-90' : ''}`} />
                </button>
                
                {selectedSection === section.id && (
                  <div className="mt-2 ml-4 grid gap-2 animate-fade-up">
                    {section.topics.map((topic) => (
                      <Link
                        key={topic.id}
                        to={`/mavzu/${section.id}/${topic.id}`}
                        className="bg-muted rounded-lg p-4 hover:bg-accent transition-colors flex items-center gap-3"
                      >
                        <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-medium text-primary">
                          {topic.id}
                        </span>
                        <span className="font-medium">{topic.title}</span>
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
