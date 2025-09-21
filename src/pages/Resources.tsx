import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Download, 
  Video, 
  FileText, 
  Search,
  Star,
  Clock,
  Users,
  Heart
} from "lucide-react";
import { useState } from "react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const resources = {
    ebooks: [
      {
        id: "1",
        title: "Complete Guide to Government College Admissions",
        description: "Everything you need to know about applying to government colleges in India",
        downloadCount: "12.5k",
        rating: 4.8,
        size: "2.5 MB",
        pages: 120,
        category: "Admissions"
      },
      {
        id: "2", 
        title: "Career Paths After Class 12",
        description: "Detailed analysis of career options for science, commerce, and arts students",
        downloadCount: "8.9k",
        rating: 4.6,
        size: "3.1 MB", 
        pages: 85,
        category: "Career Planning"
      },
      {
        id: "3",
        title: "Scholarship and Financial Aid Guide",
        description: "Comprehensive list of scholarships, grants, and financial aid options",
        downloadCount: "15.2k",
        rating: 4.9,
        size: "1.8 MB",
        pages: 65,
        category: "Financial Aid"
      }
    ],
    videos: [
      {
        id: "4",
        title: "How to Choose the Right Stream After Class 10",
        description: "Expert guidance on selecting science, commerce, or arts stream",
        duration: "12:30",
        views: "45k",
        rating: 4.7,
        category: "Stream Selection"
      },
      {
        id: "5",
        title: "Top Government Colleges in India - Complete Tour",
        description: "Virtual tour of the best government colleges across different states",
        duration: "25:45", 
        views: "78k",
        rating: 4.8,
        category: "College Tours"
      },
      {
        id: "6",
        title: "Application Process Walkthrough",
        description: "Step-by-step guide to fill college application forms correctly",
        duration: "18:20",
        views: "32k",
        rating: 4.5,
        category: "Applications"
      }
    ],
    courses: [
      {
        id: "7",
        title: "Digital Skills for Modern Careers",
        description: "Essential computer and digital literacy skills for college students",
        lessons: 12,
        duration: "4 hours",
        students: "1.2k",
        rating: 4.6,
        category: "Skills Development"
      },
      {
        id: "8",
        title: "Communication Skills Enhancement",
        description: "Improve your English communication for better career prospects",
        lessons: 8,
        duration: "3 hours", 
        students: "856",
        rating: 4.4,
        category: "Language Skills"
      },
      {
        id: "9",
        title: "Study Techniques and Time Management",
        description: "Proven methods to study effectively and manage time in college",
        lessons: 6,
        duration: "2.5 hours",
        students: "2.1k", 
        rating: 4.7,
        category: "Study Skills"
      }
    ]
  };

  const filteredResources = (items: any[]) => 
    items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Learning Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Free educational content to help you make informed decisions about your future
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Resource Tabs */}
        <Tabs defaultValue="ebooks" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="ebooks" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              E-Books
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Mini Courses
            </TabsTrigger>
          </TabsList>

          {/* E-Books Tab */}
          <TabsContent value="ebooks">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources(resources.ebooks).map((book) => (
                <Card key={book.id} className="hover:shadow-soft transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary">{book.category}</Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(book.id)}
                        className="h-8 w-8 p-0"
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            favorites.includes(book.id) ? 'fill-current text-red-500' : ''
                          }`} 
                        />
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{book.title}</CardTitle>
                    <CardDescription>{book.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <span>{book.pages} pages</span>
                      <span>{book.size}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current text-yellow-500" />
                        {book.rating}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {book.downloadCount} downloads
                      </span>
                      <Button size="sm" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources(resources.videos).map((video) => (
                <Card key={video.id} className="hover:shadow-soft transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary">{video.category}</Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(video.id)}
                        className="h-8 w-8 p-0"
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            favorites.includes(video.id) ? 'fill-current text-red-500' : ''
                          }`} 
                        />
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {video.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current text-yellow-500" />
                        {video.rating}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {video.views} views
                      </span>
                      <Button size="sm" className="flex items-center gap-2">
                        <Video className="h-4 w-4" />
                        Watch
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources(resources.courses).map((course) => (
                <Card key={course.id} className="hover:shadow-soft transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary">{course.category}</Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(course.id)}
                        className="h-8 w-8 p-0"
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            favorites.includes(course.id) ? 'fill-current text-red-500' : ''
                          }`} 
                        />
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <span>{course.lessons} lessons</span>
                      <span>{course.duration}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current text-yellow-500" />
                        {course.rating}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-3 w-3" />
                        {course.students} enrolled
                      </div>
                      <Button size="sm">
                        Start Course
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;