import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Download, 
  Trash2,
  Eye,
  EyeOff,
  Save,
  Smartphone,
  Mail,
  MapPin
} from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    admissionDeadlines: true,
    newColleges: false,
    careerUpdates: true,
    weeklyDigest: true,
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false
  });

  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    class: "12th",
    state: "Maharashtra",
    district: "Mumbai",
    language: "English"
  });

  const toggleNotification = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const downloadData = () => {
    // Simulate data download
    const data = {
      profile,
      quizResults: ["Science stream recommended", "Engineering focus"],
      savedColleges: ["IIT Mumbai", "Mumbai University", "Tata Institute"],
      preferences: notifications
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pacific-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Account Settings
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your profile, preferences, and privacy settings
          </p>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Preferences
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your basic profile information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="class">Current Class</Label>
                      <Select value={profile.class} onValueChange={(value) => setProfile(prev => ({ ...prev, class: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10th">Class 10th</SelectItem>
                          <SelectItem value="11th">Class 11th</SelectItem>
                          <SelectItem value="12th">Class 12th</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select value={profile.state} onValueChange={(value) => setProfile(prev => ({ ...prev, state: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="Karnataka">Karnataka</SelectItem>
                          <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                          <SelectItem value="Gujarat">Gujarat</SelectItem>
                          <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <Input
                        id="district"
                        value={profile.district}
                        onChange={(e) => setProfile(prev => ({ ...prev, district: e.target.value }))}
                      />
                    </div>
                  </div>
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>
                    Update your password to keep your account secure
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter current password"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm new password"
                    />
                  </div>
                  <Button>Update Password</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Choose how you want to receive updates and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Delivery Methods */}
                  <div>
                    <h4 className="font-medium mb-4">Delivery Methods</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Smartphone className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Push Notifications</div>
                            <div className="text-sm text-muted-foreground">Receive notifications in your browser</div>
                          </div>
                        </div>
                        <Switch
                          checked={notifications.pushNotifications}
                          onCheckedChange={() => toggleNotification('pushNotifications')}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Email Notifications</div>
                            <div className="text-sm text-muted-foreground">Get updates via email</div>
                          </div>
                        </div>
                        <Switch
                          checked={notifications.emailNotifications}
                          onCheckedChange={() => toggleNotification('emailNotifications')}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Smartphone className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">SMS Notifications</div>
                            <div className="text-sm text-muted-foreground">Important updates via SMS</div>
                          </div>
                        </div>
                        <Switch
                          checked={notifications.smsNotifications}
                          onCheckedChange={() => toggleNotification('smsNotifications')}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Content Types */}
                  <div>
                    <h4 className="font-medium mb-4">What to notify about</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Admission Deadlines</div>
                          <div className="text-sm text-muted-foreground">Never miss important application dates</div>
                        </div>
                        <Switch
                          checked={notifications.admissionDeadlines}
                          onCheckedChange={() => toggleNotification('admissionDeadlines')}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">New Colleges Added</div>
                          <div className="text-sm text-muted-foreground">Get notified about new college options</div>
                        </div>
                        <Switch
                          checked={notifications.newColleges}
                          onCheckedChange={() => toggleNotification('newColleges')}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Career Updates</div>
                          <div className="text-sm text-muted-foreground">New career insights and opportunities</div>
                        </div>
                        <Switch
                          checked={notifications.careerUpdates}
                          onCheckedChange={() => toggleNotification('careerUpdates')}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Weekly Digest</div>
                          <div className="text-sm text-muted-foreground">Summary of important updates</div>
                        </div>
                        <Switch
                          checked={notifications.weeklyDigest}
                          onCheckedChange={() => toggleNotification('weeklyDigest')}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data & Privacy</CardTitle>
                  <CardDescription>
                    Control how your data is used and manage your privacy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Allow location access</div>
                        <div className="text-sm text-muted-foreground">Help us show nearby colleges</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Analytics and insights</div>
                        <div className="text-sm text-muted-foreground">Help improve Pacific with anonymous usage data</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Personalized recommendations</div>
                        <div className="text-sm text-muted-foreground">Use your quiz results to personalize content</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                  <CardDescription>
                    Download or delete your personal data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">Download your data</div>
                      <div className="text-sm text-muted-foreground">
                        Get a copy of your profile, quiz results, and saved preferences
                      </div>
                    </div>
                    <Button variant="outline" onClick={downloadData} className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg border-destructive/20">
                    <div>
                      <div className="font-medium text-destructive">Delete account</div>
                      <div className="text-sm text-muted-foreground">
                        Permanently delete your account and all associated data
                      </div>
                    </div>
                    <Button variant="destructive" className="flex items-center gap-2">
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Language & Region</CardTitle>
                  <CardDescription>
                    Customize your language and regional preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Preferred Language</Label>
                    <Select value={profile.language} onValueChange={(value) => setProfile(prev => ({ ...prev, language: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Hindi">हिंदी (Hindi)</SelectItem>
                        <SelectItem value="Marathi">मराठी (Marathi)</SelectItem>
                        <SelectItem value="Tamil">தமிழ் (Tamil)</SelectItem>
                        <SelectItem value="Telugu">తెలుగు (Telugu)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Select defaultValue="in">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in">India</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>App Preferences</CardTitle>
                  <CardDescription>
                    Customize your Pacific experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Dark mode</div>
                      <div className="text-sm text-muted-foreground">Switch to dark theme</div>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Offline mode</div>
                      <div className="text-sm text-muted-foreground">Save content for offline access</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Auto-sync</div>
                      <div className="text-sm text-muted-foreground">Automatically sync data when online</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Settings;