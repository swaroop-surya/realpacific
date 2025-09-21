import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Building, DollarSign, Clock, Users } from "lucide-react";
import { courses, type Course } from "@/data/sampleData";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Careers = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Career Path Explorer
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover where each degree can take you and plan your future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course List */}
          <div className="lg:col-span-1">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Select a Course</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {courses.map((course) => (
                  <Button
                    key={course.id}
                    variant={selectedCourse?.id === course.id ? "default" : "outline"}
                    className="w-full justify-start h-auto py-3 px-4"
                    onClick={() => setSelectedCourse(course)}
                  >
                    <div className="text-left">
                      <div className="font-medium">{course.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {course.duration} • {course.salaryRange}
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Course Details */}
          <div className="lg:col-span-2">
            {selectedCourse ? (
              <CourseDetails course={selectedCourse} navigate={navigate} />
            ) : (
              <Card className="shadow-soft border-0 h-96">
                <CardContent className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Explore Career Paths
                    </h3>
                    <p className="text-muted-foreground">
                      Select a course from the left to see detailed career information
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseDetails = ({ course, navigate }: { course: Course; navigate: any }) => {
  return (
    <div className="space-y-6">
      {/* Course Overview */}
      <Card className="shadow-soft border-0">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">{course.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Salary Range</p>
                <p className="font-medium">{course.salaryRange}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="font-medium">{course.degreeType}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Eligibility</p>
                <p className="font-medium">{course.eligibility}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-primary mb-2">Specialization Streams</h4>
              <div className="flex flex-wrap gap-2">
                {course.streams.map((stream) => (
                  <span key={stream} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {stream}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Career Paths */}
      <Card className="shadow-soft border-0">
        <CardHeader>
          <CardTitle>Career Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.typicalCareers.map((career, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <h4 className="font-semibold text-primary mb-2">{career}</h4>
                <p className="text-sm text-muted-foreground">
                  Typical entry-level position in this field with growth opportunities
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skills Required */}
      <Card className="shadow-soft border-0">
        <CardHeader>
          <CardTitle>Key Skills Developed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {course.skills.map((skill) => (
              <div key={skill} className="p-3 bg-accent/10 rounded-lg text-center">
                <p className="text-sm font-medium text-accent">{skill}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="shadow-soft border-0">
        <CardHeader>
          <CardTitle>What's Next After Graduation?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {course.nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm font-bold">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-medium text-primary">{step}</h4>
                  <p className="text-sm text-muted-foreground">
                    Continue your education or start your career in this direction
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="shadow-soft border-0 bg-muted/30">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Ready to Start Your Journey?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" onClick={() => navigate('/colleges')}>
                Find Colleges Offering This Course
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline-primary" onClick={() => navigate('/quiz')}>
                Take Career Quiz
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Careers;