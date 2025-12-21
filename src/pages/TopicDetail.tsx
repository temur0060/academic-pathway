import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { sections } from '@/data/topicsData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TopicDetail = () => {
  const { sectionId, topicId } = useParams();
  const section = sections.find(s => s.id === Number(sectionId));
  const topic = section?.topics.find(t => t.id === Number(topicId));
  
  const prevTopic = section?.topics.find(t => t.id === Number(topicId) - 1);
  const nextTopic = section?.topics.find(t => t.id === Number(topicId) + 1);

  if (!topic || !section) {
    return <div className="min-h-screen flex items-center justify-center">Mavzu topilmadi</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/mavzular" className="inline-flex items-center text-primary mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Mavzularga qaytish
            </Link>
            
            <div className="bg-card rounded-2xl shadow-elegant p-8 animate-fade-up">
              <span className="text-sm text-muted-foreground">{section.title}</span>
              <h1 className="font-serif text-2xl md:text-3xl font-bold mt-2 mb-6">{topic.title}</h1>
              <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
                {topic.content}
              </div>
            </div>

            <div className="flex justify-between mt-8">
              {prevTopic ? (
                <Link to={`/mavzu/${sectionId}/${prevTopic.id}`}>
                  <Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" /> Oldingi</Button>
                </Link>
              ) : <div />}
              {nextTopic ? (
                <Link to={`/mavzu/${sectionId}/${nextTopic.id}`}>
                  <Button variant="outline">Keyingi <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
