import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, BookOpen, Star, Bell, MapPin, Calendar, Download } from "lucide-react";
import Header from "@/components/Header";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Patric Batman",
    email: "patric.batman@example.com",
    phone: "+91 9876543210",
    class: "Class 12",
    state: "Gotham",
    district: "Gotham City"
  });

  const savedColleges = [
    { id: "1", name: "Government Degree College, Hyderabad", courses: ["B.A.", "B.Sc.", "B.Com"] },
    { id: "2", name: "Dr. B.R. Ambedkar Government Degree College", courses: ["B.A.", "B.Sc.", "BBA"] }
  ];

  const quizHistory = [
    { date: "2024-01-15", result: "Science Stream", score: "85%" },
    { date: "2024-01-10", result: "Commerce Stream", score: "78%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="shadow-soft border-0 mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-primary mb-2">{userInfo.name}</h1>
                  <p className="text-muted-foreground mb-2">{userInfo.class} Student</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="outline">{userInfo.district}, {userInfo.state}</Badge>
                    <Badge variant="secondary">Quiz Completed</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="colleges">Saved Colleges</TabsTrigger>
              <TabsTrigger value="quiz">Quiz History</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-soft border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Quiz Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">Science</div>
                      <p className="text-muted-foreground">Recommended Stream</p>
                      <p className="text-sm text-accent mt-2">85% Match Score</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      Saved Items
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Colleges</span>
                        <span className="font-bold">2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Careers</span>
                        <span className="font-bold">5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-primary" />
                      Notifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium">3 New</span>
                        <p className="text-muted-foreground">Admission deadlines</p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        View All
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="colleges" className="space-y-6">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>Saved Colleges ({savedColleges.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {savedColleges.map((college) => (
                      <div key={college.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <h4 className="font-semibold text-primary mb-2">{college.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {college.courses.map((course) => (
                            <Badge key={course} variant="secondary" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button variant="outline" size="sm">Remove</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quiz" className="space-y-6">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>Quiz History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quizHistory.map((quiz, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-primary">{quiz.result}</h4>
                            <p className="text-sm text-muted-foreground">Completed on {quiz.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-accent">{quiz.score}</p>
                            <Button variant="outline" size="sm" className="mt-2">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-6">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Personal Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-2 border-accent pl-4 pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Dec 31, 2024</span>
                      </div>
                      <h4 className="font-semibold text-primary">College Application Deadline</h4>
                      <p className="text-sm text-muted-foreground">Submit applications for government colleges</p>
                    </div>
                    <div className="border-l-2 border-muted pl-4 pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Jan 15, 2025</span>
                      </div>
                      <h4 className="font-semibold text-primary">Counseling Process</h4>
                      <p className="text-sm text-muted-foreground">Attend state-level counseling sessions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="class">Current Class</Label>
                      <Input
                        id="class"
                        value={userInfo.class}
                        onChange={(e) => setUserInfo({ ...userInfo, class: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={userInfo.state}
                        onChange={(e) => setUserInfo({ ...userInfo, state: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="district">District</Label>
                      <Input
                        id="district"
                        value={userInfo.district}
                        onChange={(e) => setUserInfo({ ...userInfo, district: e.target.value })}
                      />
                    </div>
                  </div>
                  <Button variant="hero" className="w-full md:w-auto">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;