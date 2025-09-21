import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Brain } from "lucide-react";
import { quizQuestions, type QuizResult } from "@/data/sampleData";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: string]: number }>({});
  const [userPreference, setUserPreference] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = {
      ...answers,
      [quizQuestions[currentQuestion].id]: optionIndex
    };
    setAnswers(newAnswers);

    // Auto-advance to next question
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Quiz complete - calculate results
        calculateResults(newAnswers);
      }
    }, 500);
  };

  const calculateResults = (finalAnswers: { [questionId: string]: number }) => {
    const scores: { [subject: string]: number } = {};
    
    // Calculate scores based on answers
    quizQuestions.forEach((question, qIndex) => {
      const answerIndex = finalAnswers[question.id];
      if (answerIndex !== undefined) {
        const scoring = question.scoring[answerIndex.toString()];
        Object.entries(scoring).forEach(([subject, points]) => {
          scores[subject] = (scores[subject] || 0) + points;
        });
      }
    });

    // Store results in sessionStorage and navigate
    const result: QuizResult = {
      scores,
      recommendedStreams: getTopStreams(scores),
      recommendedCourses: [],
      careerPaths: [],
      userPreference
    };

    sessionStorage.setItem('quizResult', JSON.stringify(result));
    navigate('/quiz/result');
  };

  const getTopStreams = (scores: { [subject: string]: number }) => {
    const sortedScores = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);
    
    return sortedScores.map(([stream]) => stream);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const startQuiz = () => {
    setIsStarted(true);
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              Career Aptitude Quiz
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover your ideal career path with our 5-minute quiz. Answer honestly 
              for the most accurate recommendations.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-primary mb-4">What you'll get:</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Personalized stream recommendations</li>
                <li>• Suitable degree courses for your interests</li>
                <li>• Career pathway suggestions</li>
                <li>• Nearby college recommendations</li>
              </ul>
            </div>
            <Button onClick={startQuiz} size="lg" variant="hero">
              Start Your Quiz Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary leading-relaxed">
                {question.text}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {question.options.map((option, index) => {
                const isSelected = answers[question.id] === index;
                return (
                  <Button
                    key={index}
                    variant={isSelected ? "default" : "outline"}
                    size="lg"
                    className={`w-full justify-start text-left h-auto py-4 px-6 transition-all duration-200 ${
                      isSelected 
                        ? "bg-primary text-primary-foreground border-primary" 
                        : "bg-background text-foreground border-border hover:bg-muted hover:text-foreground hover:border-muted-foreground"
                    }`}
                    onClick={() => handleAnswer(index)}
                  >
                    <span className="text-base">{option}</span>
                  </Button>
                );
              })}
              
              {/* User Preference Input */}
              {currentQuestion === quizQuestions.length - 1 && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                  <Label htmlFor="user-preference" className="text-sm font-medium text-foreground mb-2 block">
                    Additional Preferences (Optional)
                  </Label>
                  <Input
                    id="user-preference"
                    placeholder="Any specific career interests or preferences..."
                    value={userPreference}
                    onChange={(e) => setUserPreference(e.target.value)}
                    className="bg-background"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={goBack}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <div className="text-sm text-muted-foreground flex items-center">
              Questions answered: {Object.keys(answers).length}/{quizQuestions.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;