import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { defaultTestSettings, Question } from '@/data/testData';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
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

  if (!started) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-lg mx-auto bg-card rounded-2xl shadow-elegant p-8 animate-fade-up">
              <h1 className="font-serif text-3xl font-bold mb-4">Akademik Yozuv Testi</h1>
              <p className="text-muted-foreground mb-6">
                {questions.length} ta savol • {Math.floor(timeLeft / 60)} daqiqa
              </p>
              <Button onClick={startTest} variant="hero" size="xl">Testni Boshlash</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto bg-card rounded-2xl shadow-elegant p-8 text-center animate-scale-in">
              {percent >= 60 ? (
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              ) : (
                <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
              )}
              <h1 className="font-serif text-3xl font-bold mb-2">Natija</h1>
              <p className="text-5xl font-bold text-primary mb-4">{score}/{questions.length}</p>
              <p className="text-muted-foreground mb-6">{percent}% to'g'ri javob</p>
              <Button onClick={() => window.location.reload()} variant="outline">Qayta urinish</Button>
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
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Timer & Progress */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-muted-foreground">Savol {currentQ + 1}/{questions.length}</span>
              <div className="flex items-center gap-2 text-primary font-medium">
                <Clock className="w-5 h-5" />
                {formatTime(timeLeft)}
              </div>
            </div>

            <div className="bg-card rounded-2xl shadow-elegant p-6 md:p-8 animate-fade-up">
              <h2 className="font-serif text-xl font-bold mb-6">{q?.question}</h2>
              <div className="space-y-3">
                {q?.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectAnswer(idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      answers[currentQ] === idx 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium mr-3">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Button 
                variant="outline" 
                onClick={() => setCurrentQ(c => c - 1)} 
                disabled={currentQ === 0}
              >
                Oldingi
              </Button>
              {currentQ === questions.length - 1 ? (
                <Button variant="hero" onClick={finishTest}>Tugatish</Button>
              ) : (
                <Button onClick={() => setCurrentQ(c => c + 1)}>Keyingi</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
