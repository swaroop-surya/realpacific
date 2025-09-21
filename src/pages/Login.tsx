import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login - redirect to profile
    navigate("/profile");
  };

  const handleDemoLogin = () => {
    // Demo login as Patric Batman
    setFormData({
      email: "patric.batman@example.com",
      password: "demo123"
    });
    setTimeout(() => navigate("/profile"), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-hero mx-auto mb-4">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-primary">Pacific</h1>
          <p className="text-muted-foreground">Welcome back to your education journey</p>
        </div>

        <Card className="shadow-elegant border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Sign In</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <a href="#" className="text-sm text-accent hover:text-primary transition-colors">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" variant="hero" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or try demo</span>
              </div>
            </div>

            <Button 
              onClick={handleDemoLogin}
              variant="outline" 
              className="w-full border-primary/20 hover:bg-primary/5"
            >
              Demo Login as Patric Batman
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <a href="#" className="text-accent hover:text-primary transition-colors">
                  Sign up
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button variant="ghost" onClick={() => navigate("/")} className="text-muted-foreground hover:text-primary">
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;