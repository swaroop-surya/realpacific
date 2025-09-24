import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Phone, Mail, ExternalLink, BookOpen, Home, Users, Wifi, Calendar, Star } from "lucide-react";
import { realColleges } from "@/data/realColleges";
import Header from "@/components/Header";

const CollegeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const college = realColleges.find(c => c.id === id);

  if (!college) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">College Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The college you're looking for doesn't exist in our database.
          </p>
          <Button onClick={() => navigate('/colleges')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Colleges
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate('/colleges')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Colleges
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* College Header */}
            <Card className="shadow-soft border-0">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* College Image */}
                  <div className="md:w-64 h-48 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">College Campus</p>
                    </div>
                  </div>

                  {/* College Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-primary mb-2">{college.name}</h1>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{college.district}, {college.state}</span>
                        </div>
                      </div>
                      <Badge variant={college.type === 'government' ? 'default' : 'secondary'} className="text-sm">
                        {college.type === 'government' ? 'Government College' : 'Government Aided'}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Established:</span>
                        <p className="font-medium">{college.established}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Type:</span>
                        <p className="font-medium capitalize">{college.type}</p>
                      </div>
                    </div>

                    {college.cutoffInfo && (
                      <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                        <h4 className="font-semibold text-primary text-sm mb-1">Admission Requirement</h4>
                        <p className="text-sm">{college.cutoffInfo}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Courses Offered */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Courses Offered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {college.courses.map((course) => (
                    <div key={course} className="p-4 border rounded-lg text-center hover:bg-muted/50 transition-colors">
                      <h4 className="font-semibold text-primary">{course}</h4>
                      <p className="text-sm text-muted-foreground mt-1">3 years</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Campus Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className={`p-4 rounded-lg border text-center ${college.hostel ? 'bg-success/10 border-success/20' : 'bg-muted/50'}`}>
                    <Home className={`h-8 w-8 mx-auto mb-2 ${college.hostel ? 'text-success' : 'text-muted-foreground'}`} />
                    <p className="text-sm font-medium">Hostel</p>
                    <p className="text-xs text-muted-foreground">
                      {college.hostel ? 'Available' : 'Not Available'}
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg border text-center ${college.lab ? 'bg-success/10 border-success/20' : 'bg-muted/50'}`}>
                    <Users className={`h-8 w-8 mx-auto mb-2 ${college.lab ? 'text-success' : 'text-muted-foreground'}`} />
                    <p className="text-sm font-medium">Laboratory</p>
                    <p className="text-xs text-muted-foreground">
                      {college.lab ? 'Well Equipped' : 'Not Available'}
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg border text-center ${college.library ? 'bg-success/10 border-success/20' : 'bg-muted/50'}`}>
                    <BookOpen className={`h-8 w-8 mx-auto mb-2 ${college.library ? 'text-success' : 'text-muted-foreground'}`} />
                    <p className="text-sm font-medium">Library</p>
                    <p className="text-xs text-muted-foreground">
                      {college.library ? 'Digital & Books' : 'Not Available'}
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg border text-center ${college.internet ? 'bg-success/10 border-success/20' : 'bg-muted/50'}`}>
                    <Wifi className={`h-8 w-8 mx-auto mb-2 ${college.internet ? 'text-success' : 'text-muted-foreground'}`} />
                    <p className="text-sm font-medium">Internet</p>
                    <p className="text-xs text-muted-foreground">
                      {college.internet ? 'WiFi Campus' : 'Not Available'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Campus Gallery */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Campus Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Campus Photo {i}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="shadow-soft border-0 sticky top-4">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{college.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{college.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{college.district}, {college.state}</p>
                  </div>
                </div>

                {college.contact.website && (
                  <Button variant="outline-primary" className="w-full" asChild>
                    <a href={college.contact.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                    </a>
                  </Button>
                )}

                <Button variant="hero" className="w-full">
                  <Star className="mr-2 h-4 w-4" />
                  Save to Favorites
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Admission Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </CardContent>
            </Card>

            {/* Similar Colleges */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Similar Colleges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {realColleges
                    .filter(c => c.id !== college.id && c.state === college.state)
                    .slice(0, 2)
                    .map((similarCollege) => (
                      <div
                        key={similarCollege.id}
                        className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                        onClick={() => navigate(`/colleges/${similarCollege.id}`)}
                      >
                        <h4 className="font-medium text-primary text-sm mb-1">
                          {similarCollege.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {similarCollege.district}, {similarCollege.state}
                        </p>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetail;