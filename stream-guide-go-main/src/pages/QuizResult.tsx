import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, BookOpen, MapPin, TrendingUp } from "lucide-react";
import { type QuizResult, courses, sampleColleges } from "@/data/sampleData";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const QuizResult = () => {
  const [result, setResult] = useState<QuizResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedResult = sessionStorage.getItem('quizResult');
    if (savedResult) {
      const parsedResult = JSON.parse(savedResult) as QuizResult;
      
      // Enhance results with course and career recommendations
      const topSubjects = Object.entries(parsedResult.scores)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([subject]) => subject);

      const recommendedCourses = courses.filter(course => 
        topSubjects.some(subject => 
          course.streams.some(stream => 
            stream.toLowerCase().includes(subject) || 
            subject.includes(stream.toLowerCase())
          )
        )
      ).slice(0, 3);

      const careerPaths = recommendedCourses.flatMap(course => 
        course.typicalCareers.slice(0, 2)
      ).slice(0, 5);

      setResult({
        ...parsedResult,
        recommendedCourses,
        careerPaths
      });
    } else {
      navigate('/quiz');
    }
  }, [navigate]);

  if (!result) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading your results...</p>
        </div>
      </div>
    );
  }

  const topScores = Object.entries(result.scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const nearbyColleges = sampleColleges.filter(college => 
    result.recommendedCourses.some(course => 
      college.courses.includes(course.title.split('(')[1]?.replace(')', '') || course.id.toUpperCase())
    )
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-success flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-2">
              Your Career Path Results
            </h1>
            <p className="text-lg text-muted-foreground">
              Based on your responses, here are your personalized recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interest Scores */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Your Interest Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topScores.map(([subject, score]) => (
                    <div key={subject} className="flex justify-between items-center">
                      <span className="capitalize font-medium">{subject.replace('_', ' ')}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-hero"
                            style={{ width: `${(score / Math.max(...Object.values(result.scores))) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">{score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommended Courses */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Recommended Degree Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {result.recommendedCourses.map((course) => (
                    <div key={course.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <h4 className="font-semibold text-primary">{course.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{course.duration} • {course.salaryRange}</p>
                      <div className="flex flex-wrap gap-1">
                        {course.streams.slice(0, 2).map((stream) => (
                          <Badge key={stream} variant="secondary" className="text-xs">
                            {stream}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Paths */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Potential Career Paths</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {result.careerPaths.map((career, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Colleges */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Nearby Colleges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {nearbyColleges.map((college) => (
                    <div key={college.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium text-primary text-sm">{college.name}</h4>
                      <p className="text-xs text-muted-foreground">{college.district}, {college.state}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {college.courses.slice(0, 3).map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4" onClick={() => navigate('/colleges')}>
                  View All Colleges
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate('/colleges')}>
              Find Colleges Near You
              <MapPin className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline-primary" size="lg" onClick={() => navigate('/careers')}>
              Explore Career Paths
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Download PDF Report
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Next Steps */}
          <Card className="mt-8 bg-muted/30 border-0">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                Your Next Steps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Research your recommended courses and their requirements
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Visit nearby colleges and speak with admission counselors
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Plan your admission timeline and required documents
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;