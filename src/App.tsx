import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import QuizResult from "./pages/QuizResult";
import Colleges from "./pages/Colleges";
import CollegeDetail from "./pages/CollegeDetail";
import Careers from "./pages/Careers";
import Profile from "./pages/Profile";
import Timeline from "./pages/Timeline";
import ParentGuide from "./pages/ParentGuide";
import Admin from "./pages/Admin";
import Resources from "./pages/Resources";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/result" element={<QuizResult />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/colleges/:id" element={<CollegeDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/parents" element={<ParentGuide />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
