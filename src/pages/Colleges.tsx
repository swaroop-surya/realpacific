import { useState, useMemo } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Search, Filter, Phone, Mail, ExternalLink, Wifi, Home, BookOpen, Users, Loader2, Star } from "lucide-react";
import { fetchRealTimeColleges, getUniqueStates, getUniqueCourses, type RealCollege } from "@/data/realColleges";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [hostelFilter, setHostelFilter] = useState("all");
  const [view, setView] = useState<"list" | "map">("list");
  const [colleges, setColleges] = useState<RealCollege[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Get unique states and courses for filters
  const states = useMemo(() => getUniqueStates(), []);
  const courses = useMemo(() => getUniqueCourses(), []);

  // Fetch colleges with real-time data
  const fetchColleges = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const filters = {
        state: selectedState !== "all" ? selectedState : undefined,
        course: selectedCourse !== "all" ? selectedCourse : undefined,
        hasHostel: hostelFilter === "yes" ? true : hostelFilter === "no" ? false : undefined,
        searchTerm: searchTerm || undefined
      };
      
      const data = await fetchRealTimeColleges(filters);
      setColleges(data);
    } catch (err) {
      setError("Failed to load colleges. Please try again.");
      console.error("Error fetching colleges:", err);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchColleges();
  }, []);

  // Refetch when filters change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchColleges();
    }, 500); // Debounce search

    return () => clearTimeout(timeoutId);
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
              {loading ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading colleges...
                </div>
              ) : error ? (
                <div className="text-sm text-red-600">
                  {error}
                  <Button variant="outline" size="sm" className="ml-2" onClick={fetchColleges}>
                    Retry
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing {colleges.length} government colleges
                    {colleges.length === 0 && (
                      <span className="block mt-2 text-primary font-medium">
                        No government colleges found with current filters — try adjusting your search criteria.
                      </span>
                    )}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Live Data
                  </div>
                </div>
              )}
            </div>

            {/* College List */}
            {loading ? (
              <div className="grid gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="shadow-soft border-0">
                    <CardContent className="p-6">
                      <div className="animate-pulse">
                        <div className="flex gap-6">
                          <div className="w-48 h-48 bg-muted rounded-lg"></div>
                          <div className="flex-1 space-y-4">
                            <div className="h-6 bg-muted rounded w-3/4"></div>
                            <div className="h-4 bg-muted rounded w-1/2"></div>
                            <div className="flex gap-2">
                              <div className="h-6 bg-muted rounded w-16"></div>
                              <div className="h-6 bg-muted rounded w-16"></div>
                              <div className="h-6 bg-muted rounded w-16"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid gap-6">
                {colleges.map((college) => (
                  <RealCollegeCard key={college.id} college={college} navigate={navigate} />
                ))}
              </div>
            )}
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

const RealCollegeCard = ({ college, navigate }: { college: RealCollege; navigate: any }) => {
  return (
    <Card className="shadow-soft hover:shadow-medium transition-all duration-300 border-0">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* College Image */}
          <div className="lg:w-48 h-48 rounded-lg overflow-hidden">
            <img 
              src={college.images[0]} 
              alt={`${college.name} campus`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="w-full h-full bg-muted flex items-center justify-center">
                    <div class="text-center">
                      <svg class="h-12 w-12 text-muted-foreground mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                      <p class="text-sm text-muted-foreground">College Campus</p>
                    </div>
                  </div>
                `;
              }}
            />
          </div>

          {/* College Details */}
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{college.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{college.district}, {college.state}</span>
                  <div className="flex gap-2 ml-2">
                    <Badge variant="outline">Est. {college.established}</Badge>
                    {college.ranking && (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        <Star className="h-3 w-3 mr-1" />
                        Rank #{college.ranking}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium">Affiliation:</span> {college.affiliation}
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

            {/* Fees Information */}
            <div className="mb-4">
              <h4 className="font-semibold text-sm text-primary mb-2">Fee Structure:</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-muted-foreground">Annual:</span>
                  <span className="font-medium text-green-600">{college.fees.annual}</span>
                </div>
                {college.fees.hostel && (
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Hostel:</span>
                    <span className="font-medium text-blue-600">{college.fees.hostel}</span>
                  </div>
                )}
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
                <div className="text-xs text-muted-foreground">
                  Affiliated to: {college.affiliation}
                </div>
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