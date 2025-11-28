import { useState } from "react";
import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Button from "../components/ui/button";
import { Alert, AlertDescription } from "../components/ui/alert";
// import { Badge } from "../components/ui/badge";
import {
  GraduationCap,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Loader2,
  Server,
  Database,
  Shield,
} from "lucide-react";
// Dummy Supabase credentials used for local diagnostics when the real
// `../utils/supabase/info` module isn't available. Replace these with
// real values or restore the import when deploying or testing against a
// live Supabase project.
const projectId = "demo-project";
const publicAnonKey = "demo-anon-key";

interface TestResult {
  name: string;
  status: "pending" | "success" | "error";
  message?: string;
  details?: any;
}

export function DiagnosticsPage() {
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);

  const runDiagnostics = async () => {
    setRunning(true);
    const testResults: TestResult[] = [];

    // Test 1: Check Supabase credentials
    testResults.push({
      name: "Supabase Configuration",
      status: "pending",
    });
    setResults([...testResults]);

    if (projectId && publicAnonKey) {
      testResults[0] = {
        name: "Supabase Configuration",
        status: "success",
        message: "Credentials loaded successfully",
        details: { projectId: projectId.substring(0, 8) + "..." },
      };
    } else {
      testResults[0] = {
        name: "Supabase Configuration",
        status: "error",
        message: "Missing Supabase credentials",
      };
    }
    setResults([...testResults]);

    // Test 2: Check server health
    testResults.push({
      name: "Server Health Check",
      status: "pending",
    });
    setResults([...testResults]);

    try {
      const healthResponse = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d252a42d/health`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (healthResponse.ok) {
        const data = await healthResponse.json();
        testResults[1] = {
          name: "Server Health Check",
          status: "success",
          message: "Server is responding",
          details: data,
        };
      } else {
        testResults[1] = {
          name: "Server Health Check",
          status: "error",
          message: `Server returned ${healthResponse.status}: ${healthResponse.statusText}`,
        };
      }
    } catch (error: any) {
      testResults[1] = {
        name: "Server Health Check",
        status: "error",
        message: `Failed to connect: ${error.message}`,
      };
    }
    setResults([...testResults]);

    // Test 3: Test signup endpoint
    testResults.push({
      name: "Signup Endpoint Test",
      status: "pending",
    });
    setResults([...testResults]);

    try {
      const testEmail = `test-${Date.now()}@arenasschool.com`;
      const signupResponse = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d252a42d/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            email: testEmail,
            password: "test123",
            role: "student",
            name: "Test User",
          }),
        }
      );

      const signupData = await signupResponse.json();

      if (signupResponse.ok) {
        testResults[2] = {
          name: "Signup Endpoint Test",
          status: "success",
          message: "Signup endpoint is working correctly",
          details: { email: testEmail },
        };
      } else {
        testResults[2] = {
          name: "Signup Endpoint Test",
          status: "error",
          message: `Signup failed: ${signupData.error || "Unknown error"}`,
          details: signupData,
        };
      }
    } catch (error: any) {
      testResults[2] = {
        name: "Signup Endpoint Test",
        status: "error",
        message: `Network error: ${error.message}`,
      };
    }
    setResults([...testResults]);

    setRunning(false);
  };

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "error":
        return <XCircle className="h-5 w-5 text-red-600" />;
      case "pending":
        return <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />;
    }
  };

  const getStatusBadge = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return (
          <span className="bg-green-100 text-green-800 border-green-200">
            Success
          </span>
        );
      case "error":
        return (
          <span className="bg-red-100 text-red-800 border-red-200">Error</span>
        );
      case "pending":
        return (
          <span className="bg-gray-100 text-gray-800 border-gray-200">
            Running...
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </Link>
          <h1 className="text-gray-900 mt-2">System Diagnostics</h1>
          <p className="text-sm text-gray-600 mt-1">
            Test server connectivity and authentication
          </p>
        </div>

        {/* Diagnostics Card */}
        <Card>
          <CardHeader>
            <CardTitle>System Health Check</CardTitle>
            <CardDescription>
              Run diagnostics to verify server, database, and authentication are
              working correctly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {results.length === 0 ? (
              <>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-lg">
                    <Server className="h-8 w-8 text-blue-600" />
                    <p className="text-sm text-center">Server Health</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-purple-50 rounded-lg">
                    <Database className="h-8 w-8 text-purple-600" />
                    <p className="text-sm text-center">Database</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-green-50 rounded-lg">
                    <Shield className="h-8 w-8 text-green-600" />
                    <p className="text-sm text-center">Authentication</p>
                  </div>
                </div>

                <Button
                  onClick={runDiagnostics}
                  disabled={running}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                  text={running ? "Running Diagnostics..." : "Run Diagnostics"}
                  icon={
                    running ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : null
                  }
                />
              </>
            ) : (
              <>
                <div className="space-y-3">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 p-4 rounded-lg border ${
                        result.status === "success"
                          ? "bg-green-50 border-green-200"
                          : result.status === "error"
                          ? "bg-red-50 border-red-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      {getStatusIcon(result.status)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium">{result.name}</p>
                          {getStatusBadge(result.status)}
                        </div>
                        {result.message && (
                          <p className="text-xs text-gray-600 mb-2">
                            {result.message}
                          </p>
                        )}
                        {result.details && (
                          <pre className="text-xs bg-white/50 p-2 rounded overflow-x-auto">
                            {JSON.stringify(result.details, null, 2)}
                          </pre>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <Alert
                  className={
                    results.every((r) => r.status === "success")
                      ? "border-green-200 bg-green-50"
                      : "border-amber-200 bg-amber-50"
                  }
                >
                  <AlertDescription>
                    {results.every((r) => r.status === "success") ? (
                      <>
                        ✅ All systems operational! You can proceed to{" "}
                        <Link to="/setup" className="underline font-bold">
                          /setup
                        </Link>{" "}
                        to create demo accounts.
                      </>
                    ) : (
                      <>
                        ⚠️ Some tests failed. Please check the error details
                        above or contact support.
                      </>
                    )}
                  </AlertDescription>
                </Alert>

                <div className="flex gap-3">
                  <Button
                    text="Run Again"
                    onClick={runDiagnostics}
                    disabled={running}
                    variant="outline"
                    className="flex-1"
                  />
                  <Link to="/setup" className="flex-1">
                    <Button
                      text="Go to Setup"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                    />
                  </Link>
                </div>
              </>
            )}

            <div className="pt-4 border-t">
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

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-4">
              <p className="text-xs text-blue-800">
                <strong>💡 Tip:</strong> Run diagnostics first to verify your
                system is properly configured before creating demo accounts.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="pt-4">
              <p className="text-xs text-purple-800">
                <strong>🔗 Quick Links:</strong>{" "}
                <Link to="/setup" className="underline">
                  Setup
                </Link>{" "}
                |{" "}
                <Link to="/portal/student/login" className="underline">
                  Login
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
