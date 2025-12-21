import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { defaultTestSettings, Question } from '@/data/testData';
import { toast } from 'sonner';
import { Save, Clock, User } from 'lucide-react';

const Admin = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [timeLimit, setTimeLimit] = useState(30);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [editingQ, setEditingQ] = useState<number | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    const saved = localStorage.getItem('test_settings');
    if (saved) {
      const settings = JSON.parse(saved);
      setTimeLimit(settings.timeLimit);
      setQuestions(settings.questions);
    } else {
      setQuestions(defaultTestSettings.questions);
    }
  }, [isAuthenticated, navigate]);

  const saveSettings = () => {
    localStorage.setItem('test_settings', JSON.stringify({ timeLimit, questions }));
    toast.success('Sozlamalar saqlandi!');
  };

  const updateQuestion = (id: number, field: string, value: string | number) => {
    setQuestions(qs => qs.map(q => q.id === id ? { ...q, [field]: value } : q));
  };

  const updateOption = (qId: number, optIdx: number, value: string) => {
    setQuestions(qs => qs.map(q => {
      if (q.id === qId) {
        const newOpts = [...q.options];
        newOpts[optIdx] = value;
        return { ...q, options: newOpts };
      }
      return q;
    }));
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Profile */}
            <div className="bg-card rounded-2xl shadow-elegant p-6 mb-6 animate-fade-up">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold">Xush kelibsiz!</h2>
                  <p className="text-muted-foreground">{user?.username}</p>
                </div>
              </div>
            </div>

            {/* Time Settings */}
            <div className="bg-card rounded-2xl shadow-elegant p-6 mb-6 animate-fade-up">
              <h3 className="font-serif text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Vaqt Sozlamalari
              </h3>
              <div className="flex items-center gap-4">
                <label className="text-sm">Test vaqti (daqiqa):</label>
                <Input 
                  type="number" 
                  value={timeLimit} 
                  onChange={(e) => setTimeLimit(Number(e.target.value))}
                  className="w-24"
                  min={1}
                />
              </div>
            </div>

            {/* Questions */}
            <div className="bg-card rounded-2xl shadow-elegant p-6 animate-fade-up">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif text-lg font-bold">Savollar ({questions.length} ta)</h3>
                <Button onClick={saveSettings} variant="hero">
                  <Save className="w-4 h-4 mr-2" /> Saqlash
                </Button>
              </div>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                {questions.map((q) => (
                  <div key={q.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">#{q.id}</span>
                      <Button size="sm" variant="ghost" onClick={() => setEditingQ(editingQ === q.id ? null : q.id)}>
                        {editingQ === q.id ? 'Yopish' : 'Tahrirlash'}
                      </Button>
                    </div>
                    
                    {editingQ === q.id ? (
                      <div className="space-y-3">
                        <Input 
                          value={q.question} 
                          onChange={(e) => updateQuestion(q.id, 'question', e.target.value)}
                          placeholder="Savol"
                        />
                        {q.options.map((opt, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-6">{String.fromCharCode(65 + idx)}.</span>
                            <Input 
                              value={opt} 
                              onChange={(e) => updateOption(q.id, idx, e.target.value)}
                            />
                            <input 
                              type="radio" 
                              name={`correct-${q.id}`}
                              checked={q.correctAnswer === idx}
                              onChange={() => updateQuestion(q.id, 'correctAnswer', idx)}
                              className="w-5 h-5"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-sm">{q.question}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
