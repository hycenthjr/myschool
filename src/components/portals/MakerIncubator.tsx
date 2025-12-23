import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import Badge from "../../ui/badge";
import Button from "../../ui/button";
import { Progress } from "../../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Lightbulb,
  TrendingUp,
  ShoppingCart,
  Users,
  Package,
  BarChart3,
  Award,
  Target,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Business {
  name: string;
  category: string;
  status: "active" | "planning" | "paused";
  revenue: number;
  orders: number;
  rating: number;
}

export function MakerIncubator() {
  const business: Business = {
    name: "TechCraft Accessories",
    category: "Technology & Gadgets",
    status: "active",
    revenue: 125000,
    orders: 34,
    rating: 4.8,
  };

  const salesData = [
    { month: "Jul", revenue: 15000, orders: 8 },
    { month: "Aug", revenue: 28000, orders: 12 },
    { month: "Sep", revenue: 42000, orders: 18 },
    { month: "Oct", revenue: 40000, orders: 14 },
  ];

  const topProducts = [
    {
      name: "Custom Phone Cases",
      sold: 12,
      revenue: 36000,
      stock: 8,
    },
    {
      name: "Laptop Sleeves",
      sold: 8,
      revenue: 32000,
      stock: 5,
    },
    {
      name: "Wireless Earbuds Holder",
      sold: 14,
      revenue: 28000,
      stock: 12,
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-1234",
      customer: "Year 12 Student",
      product: "Custom Phone Case",
      amount: 3000,
      status: "completed",
      date: "Oct 30, 2025",
    },
    {
      id: "#ORD-1233",
      customer: "Staff Member",
      product: "Laptop Sleeve",
      amount: 4000,
      status: "processing",
      date: "Oct 29, 2025",
    },
    {
      id: "#ORD-1232",
      customer: "Year 10 Student",
      product: "Earbuds Holder",
      amount: 2000,
      status: "completed",
      date: "Oct 28, 2025",
    },
  ];

  const milestones = [
    { title: "First Sale", completed: true, date: "Jul 15, 2025" },
    { title: "₦50,000 Revenue", completed: true, date: "Aug 20, 2025" },
    { title: "₦100,000 Revenue", completed: true, date: "Oct 10, 2025" },
    { title: "50 Orders", completed: false, progress: 68 },
    { title: "5-Star Rating", completed: false, progress: 96 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "planning":
        return "bg-blue-100 text-blue-700";
      case "paused":
        return "bg-gray-100 text-gray-700";
      case "completed":
        return "bg-green-100 text-green-700";
      case "processing":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  return (
    <div className="space-y-6">
      {/* Business Overview */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl mb-2">{business.name}</h2>
              <p className="opacity-90">{business.category}</p>
            </div>
            <Badge className={getStatusColor(business.status)}>
              {business.status}
            </Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <p className="opacity-90 mb-1">Total Revenue</p>
              <p className="text-3xl">{formatCurrency(business.revenue)}</p>
            </div>
            <div>
              <p className="opacity-90 mb-1">Total Orders</p>
              <p className="text-3xl">{business.orders}</p>
            </div>
            <div>
              <p className="opacity-90 mb-1">Customer Rating</p>
              <p className="text-3xl">{business.rating} ⭐</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue & Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="revenue"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      name="Revenue (₦)"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="orders"
                      stroke="#ec4899"
                      strokeWidth={2}
                      name="Orders"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={topProducts}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#8b5cf6" name="Revenue (₦)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Business Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          milestone.completed ? "bg-green-500" : "bg-purple-100"
                        }`}
                      >
                        {milestone.completed ? (
                          <Award className="h-4 w-4 text-white" />
                        ) : (
                          <Target className="h-4 w-4 text-purple-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 mb-1">{milestone.title}</p>
                        {milestone.completed ? (
                          <p className="text-sm text-gray-600">
                            {milestone.date}
                          </p>
                        ) : (
                          <div>
                            <Progress
                              value={milestone.progress}
                              className="mt-1"
                            />
                            <p className="text-sm text-gray-600 mt-1">
                              {milestone.progress}% Complete
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Business Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-900 mb-1">
                          Revenue Growing
                        </p>
                        <p className="text-sm text-gray-600">
                          43% increase from last month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Package className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-900 mb-1">
                          Inventory Alert
                        </p>
                        <p className="text-sm text-gray-600">
                          Laptop Sleeves running low (5 left)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-900 mb-1">
                          Customer Satisfaction
                        </p>
                        <p className="text-sm text-gray-600">
                          4.8/5 rating from 28 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Product Inventory</CardTitle>
                <Button
                  text="Add Product"
                  icon={<Package className="h-4 w-4" />}
                  iconPosition="left"
                  className="gap-2"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Package className="h-8 w-8 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 mb-1">{product.name}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Sold: {product.sold}</span>
                          <span>Stock: {product.stock}</span>
                          <span>
                            Revenue: {formatCurrency(product.revenue)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button text="Edit" variant="outline" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <ShoppingCart className="h-5 w-5 text-gray-600 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <p className="text-gray-900">{order.id}</p>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          {order.product} • {order.customer}
                        </p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-900 mb-2">
                        {formatCurrency(order.amount)}
                      </p>
                      <Button text="View Details" variant="outline" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Entrepreneurship Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Business Fundamentals",
                    progress: 100,
                    status: "completed",
                  },
                  {
                    title: "Marketing & Sales",
                    progress: 75,
                    status: "in-progress",
                  },
                  {
                    title: "Financial Management",
                    progress: 40,
                    status: "in-progress",
                  },
                  {
                    title: "Digital Commerce",
                    progress: 0,
                    status: "not-started",
                  },
                ].map((course, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <p className="text-gray-900 mb-1">{course.title}</p>
                        <Badge
                          className={
                            course.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : course.status === "in-progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                          }
                        >
                          {course.status}
                        </Badge>
                      </div>
                      <Button
                        variant="outline"
                        text={
                          course.status === "completed"
                            ? "Review"
                            : course.status === "in-progress"
                            ? "Continue"
                            : "Start"
                        }
                      />
                    </div>
                    <Progress value={course.progress} />
                    <p className="text-sm text-gray-600 mt-1">
                      {course.progress}% Complete
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="h-5 w-5" />
                Mentorship Program
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                Get guidance from successful entrepreneurs and industry experts.
              </p>
              <Button
                text="Request a Mentor"
                className="bg-gradient-to-r from-purple-600 to-pink-600"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
