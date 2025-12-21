import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { defaultTestSettings, Question } from '@/data/testData';
import { toast } from 'sonner';
import { 
  Save, Clock, User, Edit3, Check, X, Settings, 
  FileText, ChevronDown, ChevronUp, Trash2, Plus,
  CheckCircle, Timer, BookOpen, Shield
} from 'lucide-react';

const Admin = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [timeLimit, setTimeLimit] = useState(30);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [editingQ, setEditingQ] = useState<number | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [expandedSection, setExpandedSection] = useState<'time' | 'questions' | null>('questions');

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
    setHasChanges(false);
    toast.success('Barcha o\'zgarishlar saqlandi!');
  };

  const updateQuestion = (id: number, field: string, value: string | number) => {
    setQuestions(qs => qs.map(q => q.id === id ? { ...q, [field]: value } : q));
    setHasChanges(true);
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
    setHasChanges(true);
  };

  const handleTimeChange = (value: number) => {
    setTimeLimit(value);
    setHasChanges(true);
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Header */}
            <div className="mb-8 animate-fade-up">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Admin Panel
                  </h1>
                  <p className="text-muted-foreground mt-1">Test sozlamalarini boshqarish</p>
                </div>
                
                {hasChanges && (
                  <Button onClick={saveSettings} size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow animate-pulse">
                    <Save className="w-5 h-5 mr-2" /> Barchasini Saqlash
                  </Button>
                )}
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-card rounded-2xl shadow-elegant p-6 mb-6 animate-fade-up border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-bold text-foreground">Xush kelibsiz, Ustoz!</h2>
                  <p className="text-muted-foreground">{user?.username}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Savollar soni</p>
                  <p className="text-2xl font-bold text-primary">{questions.length}</p>
                </div>
              </div>
            </div>

            {/* Time Settings Section */}
            <div className="bg-card rounded-2xl shadow-elegant mb-6 animate-fade-up border border-border/50 overflow-hidden">
              <button 
                onClick={() => setExpandedSection(expandedSection === 'time' ? null : 'time')}
                className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Timer className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-serif text-lg font-bold text-foreground">Vaqt Sozlamalari</h3>
                    <p className="text-sm text-muted-foreground">Hozirgi vaqt: {timeLimit} daqiqa</p>
                  </div>
                </div>
                {expandedSection === 'time' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {expandedSection === 'time' && (
                <div className="px-6 pb-6 border-t border-border">
                  <div className="pt-6 space-y-4">
                    <label className="block">
                      <span className="text-sm font-medium text-foreground">Test vaqti (daqiqa)</span>
                      <Input 
                        type="number" 
                        value={timeLimit} 
                        onChange={(e) => handleTimeChange(Number(e.target.value))}
                        className="mt-2 max-w-xs"
                        min={1}
                        max={180}
                      />
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Talabalar testni {timeLimit} daqiqada yakunlashi kerak.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Questions Section */}
            <div className="bg-card rounded-2xl shadow-elegant animate-fade-up border border-border/50 overflow-hidden">
              <button 
                onClick={() => setExpandedSection(expandedSection === 'questions' ? null : 'questions')}
                className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-serif text-lg font-bold text-foreground">Savollar</h3>
                    <p className="text-sm text-muted-foreground">{questions.length} ta savol</p>
                  </div>
                </div>
                {expandedSection === 'questions' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {expandedSection === 'questions' && (
                <div className="px-6 pb-6 border-t border-border">
                  <div className="pt-6 space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {questions.map((q, index) => (
                      <div 
                        key={q.id} 
                        className={`rounded-xl border transition-all ${
                          editingQ === q.id 
                            ? 'border-primary bg-primary/5 shadow-md' 
                            : 'border-border hover:border-primary/30 bg-muted/30'
                        }`}
                      >
                        <div className="p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3 flex-1">
                              <span className="w-8 h-8 bg-gradient-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                                {index + 1}
                              </span>
                              {editingQ === q.id ? (
                                <Input 
                                  value={q.question} 
                                  onChange={(e) => updateQuestion(q.id, 'question', e.target.value)}
                                  className="flex-1 font-medium"
                                  placeholder="Savolni kiriting"
                                />
                              ) : (
                                <p className="font-medium text-foreground flex-1 pt-1">{q.question}</p>
                              )}
                            </div>
                            <Button 
                              size="sm" 
                              variant={editingQ === q.id ? "default" : "ghost"}
                              onClick={() => setEditingQ(editingQ === q.id ? null : q.id)}
                              className="shrink-0"
                            >
                              {editingQ === q.id ? (
                                <><Check className="w-4 h-4 mr-1" /> Tayyor</>
                              ) : (
                                <><Edit3 className="w-4 h-4 mr-1" /> Tahrir</>
                              )}
                            </Button>
                          </div>
                          
                          {editingQ === q.id && (
                            <div className="mt-4 space-y-3 pl-11">
                              <p className="text-sm font-medium text-muted-foreground mb-2">
                                Variantlar (to'g'ri javobni belgilang):
                              </p>
                              {q.options.map((opt, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <button
                                    onClick={() => updateQuestion(q.id, 'correctAnswer', idx)}
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all ${
                                      q.correctAnswer === idx 
                                        ? 'bg-green-500 text-white shadow-md' 
                                        : 'bg-muted text-muted-foreground hover:bg-green-500/20'
                                    }`}
                                  >
                                    {String.fromCharCode(65 + idx)}
                                  </button>
                                  <Input 
                                    value={opt} 
                                    onChange={(e) => updateOption(q.id, idx, e.target.value)}
                                    className="flex-1"
                                    placeholder={`${String.fromCharCode(65 + idx)} variantini kiriting`}
                                  />
                                  {q.correctAnswer === idx && (
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Floating Save Button */}
            {hasChanges && (
              <div className="fixed bottom-6 right-6 z-50 animate-fade-up">
                <Button 
                  onClick={saveSettings} 
                  size="lg" 
                  className="bg-gradient-primary text-primary-foreground shadow-glow rounded-full px-6"
                >
                  <Save className="w-5 h-5 mr-2" /> Saqlash
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
