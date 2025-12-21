import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { defaultTestSettings, Question } from '@/data/testData';
import { Clock, CheckCircle, XCircle, Play, ChevronLeft, ChevronRight, Trophy, Target, Timer, BookCheck } from 'lucide-react';
import { toast } from 'sonner';

const Test = () => {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [finished, setFinished] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('test_settings');
    const settings = saved ? JSON.parse(saved) : defaultTestSettings;
    setQuestions(settings.questions);
    setTimeLeft(settings.timeLimit * 60);
    setAnswers(new Array(settings.questions.length).fill(null));
  }, []);

  useEffect(() => {
    if (started && !finished && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0 && started && !finished) {
      finishTest();
    }
  }, [started, finished, timeLeft]);

  const startTest = () => {
    setStarted(true);
    toast.info('Test boshlandi! Omad!');
  };

  const selectAnswer = (idx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);
  };

  const finishTest = () => {
    setFinished(true);
  };

  const score = answers.reduce((acc, ans, idx) => 
    ans === questions[idx]?.correctAnswer ? acc + 1 : acc, 0);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const answeredCount = answers.filter(a => a !== null).length;

  if (!started) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-lg mx-auto">
              {/* Hero Card */}
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 rounded-3xl p-8 md:p-10 shadow-elegant animate-fade-up border border-primary/20">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <BookCheck className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Akademik Yozuv Testi
                </h1>
                <p className="text-muted-foreground mb-8 text-lg">
                  Bilimingizni sinab ko'ring!
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                    <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{questions.length}</p>
                    <p className="text-sm text-muted-foreground">Savollar</p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                    <Timer className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{Math.floor(timeLeft / 60)}</p>
                    <p className="text-sm text-muted-foreground">Daqiqa</p>
                  </div>
                </div>

                <Button onClick={startTest} size="xl" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Testni Boshlash
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    const isSuccess = percent >= 60;
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto">
              <div className={`rounded-3xl p-8 md:p-10 text-center animate-scale-in shadow-elegant border ${
                isSuccess 
                  ? 'bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-green-500/10 border-green-500/20' 
                  : 'bg-gradient-to-br from-red-500/10 via-rose-500/5 to-red-500/10 border-red-500/20'
              }`}>
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isSuccess ? 'bg-green-500/20' : 'bg-red-500/20'
                }`}>
                  {isSuccess ? (
                    <Trophy className="w-12 h-12 text-green-500" />
                  ) : (
                    <XCircle className="w-12 h-12 text-red-500" />
                  )}
                </div>
                
                <h1 className="font-serif text-3xl font-bold mb-2">
                  {isSuccess ? 'Tabriklaymiz!' : 'Qayta urinib ko\'ring!'}
                </h1>
                
                <div className="my-6">
                  <p className={`text-6xl font-bold ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                    {score}/{questions.length}
                  </p>
                  <p className="text-xl text-muted-foreground mt-2">{percent}% to'g'ri javob</p>
                </div>

                <div className="bg-card/50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">To'g'ri</span>
                    <span className="font-medium text-green-500">{score}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-muted-foreground">Noto'g'ri</span>
                    <span className="font-medium text-red-500">{questions.length - score}</span>
                  </div>
                </div>
                
                <Button onClick={() => window.location.reload()} variant="outline" size="lg" className="w-full">
                  Qayta urinish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Top Bar */}
            <div className="bg-card rounded-2xl shadow-elegant p-4 mb-4 animate-fade-up">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Javob berildi</p>
                    <p className="font-bold text-foreground">{answeredCount}/{questions.length}</p>
                  </div>
                </div>
                
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-lg ${
                  timeLeft < 60 ? 'bg-red-500/10 text-red-500' : 'bg-primary/10 text-primary'
                }`}>
                  <Clock className="w-5 h-5" />
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_280px] gap-4">
              {/* Question Card */}
              <div className="bg-card rounded-2xl shadow-elegant p-6 md:p-8 animate-fade-up">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Savol {currentQ + 1}
                  </span>
                </div>
                
                <h2 className="font-serif text-xl md:text-2xl font-bold mb-6 leading-relaxed">{q?.question}</h2>
                
                <div className="space-y-3">
                  {q?.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectAnswer(idx)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all group ${
                        answers[currentQ] === idx 
                          ? 'border-primary bg-primary/10 shadow-md' 
                          : 'border-border hover:border-primary/50 hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                          answers[currentQ] === idx 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="font-medium flex-1">{opt}</span>
                        {answers[currentQ] === idx && (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentQ(c => c - 1)} 
                    disabled={currentQ === 0}
                    className="gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" /> Oldingi
                  </Button>
                  {currentQ === questions.length - 1 ? (
                    <Button onClick={finishTest} className="bg-gradient-primary text-primary-foreground gap-2">
                      Tugatish <CheckCircle className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button onClick={() => setCurrentQ(c => c + 1)} className="gap-2">
                      Keyingi <ChevronRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Question Navigator */}
              <div className="bg-card rounded-2xl shadow-elegant p-4 animate-fade-up h-fit">
                <h3 className="font-serif text-lg font-bold mb-4 flex items-center gap-2">
                  <BookCheck className="w-5 h-5 text-primary" />
                  Savollar
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentQ(idx)}
                      className={`w-10 h-10 rounded-lg font-medium text-sm transition-all ${
                        currentQ === idx
                          ? 'bg-gradient-primary text-primary-foreground shadow-md scale-110'
                          : answers[idx] !== null
                            ? 'bg-green-500/20 text-green-600 border border-green-500/30'
                            : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
                
                {/* Legend */}
                <div className="mt-4 pt-4 border-t border-border space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded bg-gradient-primary" />
                    <span className="text-muted-foreground">Hozirgi</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500/30" />
                    <span className="text-muted-foreground">Javob berilgan</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded bg-muted" />
                    <span className="text-muted-foreground">Javob berilmagan</span>
                  </div>
                </div>

                {/* Finish Button */}
                <Button 
                  onClick={finishTest} 
                  className="w-full mt-4 bg-gradient-primary text-primary-foreground"
                  disabled={answeredCount === 0}
                >
                  Testni Tugatish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
