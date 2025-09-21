import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Search, Filter, Phone, Mail, ExternalLink, Wifi, Home, BookOpen, Users } from "lucide-react";
import { sampleColleges, type College } from "@/data/sampleData";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [hostelFilter, setHostelFilter] = useState("all");
  const [view, setView] = useState<"list" | "map">("list");
  const navigate = useNavigate();

  // Get unique states and courses for filters
  const states = useMemo(() => 
    Array.from(new Set(sampleColleges.map(college => college.state))), 
    []
  );
  
  const courses = useMemo(() => 
    Array.from(new Set(sampleColleges.flatMap(college => college.courses))), 
    []
  );

  // Filter colleges based on search and filters
  const filteredColleges = useMemo(() => {
    return sampleColleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.district.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState = selectedState === "all" || college.state === selectedState;
      const matchesCourse = selectedCourse === "all" || college.courses.includes(selectedCourse);
      const matchesHostel = hostelFilter === "all" || 
                           (hostelFilter === "yes" && college.hostel) ||
                           (hostelFilter === "no" && !college.hostel);
      
      return matchesSearch && matchesState && matchesCourse && matchesHostel;
    });
  }, [searchTerm, selectedState, selectedCourse, hostelFilter]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedState("all");
    setSelectedCourse("all");
    setHostelFilter("all");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Government Colleges Directory
          </h1>
          <p className="text-lg text-muted-foreground">
            Find quality government colleges near you with detailed information
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter Colleges
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by college name or district..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {states.map(state => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  {courses.map(course => (
                    <SelectItem key={course} value={course}>{course}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={hostelFilter} onValueChange={setHostelFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Hostel Available" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="yes">With Hostel</SelectItem>
                  <SelectItem value="no">Without Hostel</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={clearFilters}>
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* View Toggle */}
        <Tabs value={view} onValueChange={(v) => setView(v as "list" | "map")} className="mb-6">
          <TabsList>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-6">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredColleges.length} colleges
                {filteredColleges.length === 0 && (
                  <span className="block mt-2 text-primary font-medium">
                    No government colleges found in this district — try another district or add a college (admin).
                  </span>
                )}
              </p>
            </div>

            {/* College List */}
            <div className="grid gap-6">
              {filteredColleges.map((college) => (
                <CollegeCard key={college.id} college={college} navigate={navigate} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map" className="mt-6">
            <Card className="h-96 shadow-soft">
              <CardContent className="p-6 h-full flex items-center justify-center bg-muted/30 rounded-lg">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Map integration coming soon! Will show college locations with interactive markers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const CollegeCard = ({ college, navigate }: { college: College; navigate: any }) => {
  return (
    <Card className="shadow-soft hover:shadow-medium transition-all duration-300 border-0">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* College Image */}
          <div className="lg:w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">College Photo</p>
            </div>
          </div>

          {/* College Details */}
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{college.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{college.district}, {college.state}</span>
                  <Badge variant="outline" className="ml-2">
                    Est. {college.established}
                  </Badge>
                </div>
              </div>
              <Badge variant={college.type === 'government' ? 'default' : 'secondary'} className="mb-2 lg:mb-0">
                {college.type === 'government' ? 'Government' : 'Government Aided'}
              </Badge>
            </div>

            {/* Courses */}
            <div className="mb-4">
              <h4 className="font-semibold text-sm text-primary mb-2">Available Courses:</h4>
              <div className="flex flex-wrap gap-2">
                {college.courses.map((course) => (
                  <Badge key={course} variant="secondary">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-4">
              <h4 className="font-semibold text-sm text-primary mb-2">Facilities:</h4>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                {college.hostel && (
                  <div className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    <span>Hostel</span>
                  </div>
                )}
                {college.lab && (
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Lab</span>
                  </div>
                )}
                {college.library && (
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>Library</span>
                  </div>
                )}
                {college.internet && (
                  <div className="flex items-center gap-1">
                    <Wifi className="h-4 w-4" />
                    <span>Internet</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact & Actions */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4">
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{college.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{college.contact.email}</span>
                </div>
                {college.cutoffInfo && (
                  <p className="text-primary font-medium">Cutoff: {college.cutoffInfo}</p>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => navigate(`/colleges/${college.id}`)}
                >
                  View Details
                </Button>
                {college.contact.website && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={college.contact.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Colleges;