import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import Button from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import {
  Users,
  User,
  Briefcase,
  AlertCircle,
  ArrowLeft,
  Shield,
  Heart,
  Trophy,
  Bus,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router";
import { assets } from "../assets/assets";

type PortalType =
  | "parent"
  | "student"
  | "staff"
  | "admin"
  | "nurse"
  | "coach"
  | "transport"
  | "vendor";

const portalConfig: Record<
  PortalType,
  {
    title: string;
    description: string;
    icon: any;
    gradient: string;
  }
> = {
  parent: {
    title: "Parent Portal",
    description:
      "Access your child's academic progress, attendance, and school updates",
    icon: Users,
    gradient: "from-blue-600 to-purple-600",
  },
  student: {
    title: "Student Portal",
    description:
      "View your classes, assignments, grades, and school activities",
    icon: User,
    gradient: "from-purple-600 to-pink-600",
  },
  staff: {
    title: "Staff Portal",
    description: "Manage classes, student records, and administrative tasks",
    icon: Briefcase,
    gradient: "from-blue-600 to-cyan-600",
  },
  admin: {
    title: "Admin Portal",
    description: "School management, analytics, and system administration",
    icon: Shield,
    gradient: "from-indigo-600 to-blue-600",
  },
  nurse: {
    title: "Nurse Portal",
    description: "Student health records, appointments, and medical management",
    icon: Heart,
    gradient: "from-pink-600 to-red-600",
  },
  coach: {
    title: "Coach Portal",
    description:
      "Team management, training schedules, and performance tracking",
    icon: Trophy,
    gradient: "from-orange-600 to-yellow-600",
  },
  transport: {
    title: "Transport Portal",
    description: "Fleet management, route planning, and bus tracking",
    icon: Bus,
    gradient: "from-green-600 to-teal-600",
  },
  vendor: {
    title: "Vendor Portal",
    description: "Marketplace orders, inventory, and sales management",
    icon: ShoppingCart,
    gradient: "from-yellow-600 to-orange-600",
  },
};

export function PortalLogin() {
  const { portalType } = useParams<{ portalType: PortalType }>();
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const config = portalConfig[portalType || "student"];
  const Icon = config.icon;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    console.log(
      `[LOGIN] Attempting login for ${email} to ${portalType} portal`
    );

    const result = await signIn(email, password, portalType || "student");

    if (result.success) {
      console.log(`[LOGIN] Success! Redirecting to ${portalType} portal`);
      navigate(`/portal/${portalType}`);
    } else {
      console.error(`[LOGIN] Failed:`, result.error);

      // Enhanced error message with helpful guidance
      let errorMessage = result.error || "Login failed. Please try again.";

      if (errorMessage.includes("Invalid login credentials")) {
        errorMessage =
          "Invalid credentials. Make sure you have created demo accounts first at /setup page. Use credentials: " +
          `${portalType}@arenasschool.com / demo123`;
      }

      setError(errorMessage);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div
              className="flex h-14 w-14 items-center justify-center"
              // className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${config.gradient}`}
            >
              <img src={assets.logo} alt="school logo" />
            </div>
          </Link>
          <h1 className="text-gray-900 mt-2">ARENAS GROUP OF SCHOOLS</h1>
        </div>

        {/* Login Card */}
        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${config.gradient}`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle>{config.title}</CardTitle>
                <CardDescription className="text-xs mt-1">
                  {config.description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>

              <Button
              text={loading ? "Logging in..." : "Log In"}
                type="submit"
                className={`w-full bg-gradient-to-r ${config.gradient}`}
                disabled={loading}
              />
              <div className="text-center text-sm text-gray-600">
                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                  onClick={() =>
                    alert("Password reset functionality coming soon")
                  }
                >
                  Forgot your password?
                </button>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Homepage
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
