import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Users, 
  BookOpen, 
  MessageSquare, 
  BarChart3, 
  Plus,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import Header from "@/components/Header";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data
  const stats = {
    totalUsers: 12458,
    activeUsers: 3421,
    quizCompletions: 8732,
    collegeViews: 15634
  };

  const recentUsers = [
    { id: 1, name: "Priya Sharma", email: "priya@email.com", joinDate: "2024-01-15", status: "active" },
    { id: 2, name: "Rahul Kumar", email: "rahul@email.com", joinDate: "2024-01-14", status: "active" },
    { id: 3, name: "Anita Singh", email: "anita@email.com", joinDate: "2024-01-13", status: "inactive" }
  ];

  const colleges = [
    { id: 1, name: "Government Degree College, Hyderabad", state: "Telangana", status: "verified" },
    { id: 2, name: "Dr. B.R. Ambedkar Government Degree College", state: "Karnataka", status: "pending" },
    { id: 3, name: "Government Arts & Science College", state: "Tamil Nadu", status: "verified" }
  ];

  const notifications = [
    { id: 1, title: "Karnataka CET Registration", message: "Registration opens tomorrow", date: "2024-02-15", status: "scheduled" },
    { id: 2, title: "Scholarship Application", message: "Deadline reminder for merit scholarships", date: "2024-02-20", status: "active" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage Pacific platform</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="hero">
                <Plus className="mr-2 h-4 w-4" />
                Add Content
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="colleges">Colleges</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="shadow-soft border-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                        <p className="text-2xl font-bold text-primary">{stats.totalUsers.toLocaleString()}</p>
                      </div>
                      <Users className="h-8 w-8 text-primary/60" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">+12% from last month</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                        <p className="text-2xl font-bold text-primary">{stats.activeUsers.toLocaleString()}</p>
                      </div>
                      <BarChart3 className="h-8 w-8 text-accent/60" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">+8% from last week</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Quiz Completions</p>
                        <p className="text-2xl font-bold text-primary">{stats.quizCompletions.toLocaleString()}</p>
                      </div>
                      <BookOpen className="h-8 w-8 text-success/60" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">+23% from last month</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-0">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">College Views</p>
                        <p className="text-2xl font-bold text-primary">{stats.collegeViews.toLocaleString()}</p>
                      </div>
                      <Eye className="h-8 w-8 text-purple-500/60" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">+15% from last week</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-soft border-0">
                  <CardHeader>
                    <CardTitle>Recent User Registrations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentUsers.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium text-primary">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                              {user.status}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">{user.joinDate}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-0">
                  <CardHeader>
                    <CardTitle>System Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Server Status</span>
                        <Badge variant="default" className="bg-green-100 text-green-800">Online</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Database</span>
                        <Badge variant="default" className="bg-green-100 text-green-800">Connected</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Quiz Engine</span>
                        <Badge variant="default" className="bg-green-100 text-green-800">Running</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Notifications</span>
                        <Badge variant="default" className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>User Management</CardTitle>
                    <div className="flex gap-2">
                      <Input placeholder="Search users..." className="w-64" />
                      <Button variant="outline">Filter</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-primary">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                          <div className="flex gap-1">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="colleges" className="space-y-6">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>College Directory Management</CardTitle>
                    <Button variant="hero">
                      <Plus className="mr-2 h-4 w-4" />
                      Add College
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {colleges.map((college) => (
                      <div key={college.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium text-primary">{college.name}</p>
                          <p className="text-sm text-muted-foreground">{college.state}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={college.status === 'verified' ? 'default' : 'secondary'}>
                            {college.status}
                          </Badge>
                          <div className="flex gap-1">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">View</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Notification Management</CardTitle>
                    <Button variant="hero">
                      <Plus className="mr-2 h-4 w-4" />
                      Create Notification
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <MessageSquare className="h-8 w-8 text-accent" />
                          <div>
                            <p className="font-medium text-primary">{notification.title}</p>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                            <p className="text-xs text-muted-foreground">Scheduled: {notification.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={notification.status === 'active' ? 'default' : 'secondary'}>
                            {notification.status}
                          </Badge>
                          <div className="flex gap-1">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">Delete</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Analytics Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-primary mb-4">User Engagement</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Quiz Completion Rate</span>
                          <span className="font-medium">87%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">College Profile Views</span>
                          <span className="font-medium">2.3/user</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Session Duration</span>
                          <span className="font-medium">8.5 min</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold text-primary mb-4">Popular Content</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Career Quiz</span>
                          <span className="font-medium">68%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">College Directory</span>
                          <span className="font-medium">45%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Career Paths</span>
                          <span className="font-medium">32%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;