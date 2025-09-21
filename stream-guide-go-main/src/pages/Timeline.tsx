import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, AlertCircle, CheckCircle, Bell } from "lucide-react";
import Header from "@/components/Header";

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  deadline: string;
  type: 'admission' | 'exam' | 'counseling' | 'scholarship';
  status: 'upcoming' | 'active' | 'completed' | 'missed';
  priority: 'high' | 'medium' | 'low';
}

const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      id: "1",
      title: "Karnataka CET Application",
      description: "Application deadline for Karnataka Common Entrance Test for engineering and medical courses",
      date: "2024-02-15",
      deadline: "15 days left",
      type: "exam",
      status: "upcoming",
      priority: "high"
    },
    {
      id: "2", 
      title: "Government College Admission",
      description: "Online application process begins for government degree colleges across Karnataka",
      date: "2024-03-01",
      deadline: "30 days left", 
      type: "admission",
      status: "upcoming",
      priority: "high"
    },
    {
      id: "3",
      title: "Merit Scholarship Application",
      description: "Apply for state merit scholarships for economically weaker sections",
      date: "2024-02-28",
      deadline: "28 days left",
      type: "scholarship", 
      status: "upcoming",
      priority: "medium"
    },
    {
      id: "4",
      title: "Career Counseling Session",
      description: "Free career guidance session at district education office",
      date: "2024-02-20",
      deadline: "20 days left",
      type: "counseling",
      status: "active",
      priority: "medium"
    },
    {
      id: "5",
      title: "Class 12 Board Exam Registration",
      description: "Last date for board exam registration and fee payment",
      date: "2024-01-30",
      deadline: "Completed",
      type: "exam",
      status: "completed",
      priority: "high"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-blue-600 bg-blue-50';
      case 'active': return 'text-orange-600 bg-orange-50';
      case 'completed': return 'text-green-600 bg-green-50';
      case 'missed': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityIcon = (priority: string, status: string) => {
    if (status === 'completed') return <CheckCircle className="h-5 w-5 text-green-600" />;
    if (priority === 'high') return <AlertCircle className="h-5 w-5 text-red-500" />;
    return <Clock className="h-5 w-5 text-orange-500" />;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'admission': return 'bg-blue-100 text-blue-800';
      case 'exam': return 'bg-purple-100 text-purple-800';
      case 'counseling': return 'bg-green-100 text-green-800';
      case 'scholarship': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const upcomingEvents = events.filter(e => e.status === 'upcoming' || e.status === 'active');
  const completedEvents = events.filter(e => e.status === 'completed');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">
              Your Education Timeline
            </h1>
            <p className="text-lg text-muted-foreground">
              Never miss important admission deadlines and opportunities
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-soft border-0">
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {events.filter(e => e.status === 'upcoming').length}
                </div>
                <p className="text-sm text-muted-foreground">Upcoming Events</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-0">
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  {events.filter(e => e.status === 'active').length}
                </div>
                <p className="text-sm text-muted-foreground">Active Now</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-0">
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">
                  {events.filter(e => e.priority === 'high' && e.status !== 'completed').length}
                </div>
                <p className="text-sm text-muted-foreground">High Priority</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-0">
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {events.filter(e => e.status === 'completed').length}
                </div>
                <p className="text-sm text-muted-foreground">Completed</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Timeline */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming Events & Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            {getPriorityIcon(event.priority, event.status)}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="font-semibold text-primary">{event.title}</h3>
                              <Badge className={getTypeColor(event.type)}>
                                {event.type}
                              </Badge>
                              <Badge variant="outline" className={getStatusColor(event.status)}>
                                {event.deadline}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Bell className="h-4 w-4 mr-1" />
                                Remind Me
                              </Button>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Completed Events */}
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Completed Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {completedEvents.map((event) => (
                      <div key={event.id} className="border rounded-lg p-3 bg-muted/30">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-medium text-primary">{event.title}</h4>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </div>
                          <Badge className={getTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline-primary" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Add Personal Event
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Notification Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Export Timeline
                  </Button>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="shadow-soft border-0 bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-accent">💡 Pro Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="p-3 bg-white rounded-lg">
                    <h4 className="font-semibold text-primary mb-1">Set Reminders</h4>
                    <p className="text-muted-foreground">Enable notifications to get alerts 7 days before deadlines</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <h4 className="font-semibold text-primary mb-1">Prepare Documents</h4>
                    <p className="text-muted-foreground">Keep all certificates and mark sheets ready before application dates</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <h4 className="font-semibold text-primary mb-1">Multiple Options</h4>
                    <p className="text-muted-foreground">Apply to multiple colleges to increase admission chances</p>
                  </div>
                </CardContent>
              </Card>

              {/* Important Dates */}
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle>Important Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Board Results</span>
                      <span className="font-medium">May 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span>College Admission</span>
                      <span className="font-medium">June 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Classes Begin</span>
                      <span className="font-medium">July 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;