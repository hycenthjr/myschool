import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Button from "../../components/ui/button";
// import { Badge } from "../../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  ShoppingCart,
  Package,
  DollarSign,
  TrendingUp,
  Star,
  Bell,
  LogOut,
  Home,
  BarChart3,
  MessageSquare,
  FileText,
} from "lucide-react";

export function VendorPortal() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const recentOrders = [
    {
      id: "#ORD-5678",
      product: "School Uniform Set",
      buyer: "Parent - Okafor",
      amount: 45000,
      status: "pending",
    },
    {
      id: "#ORD-5677",
      product: "Textbooks Bundle",
      buyer: "Parent - Adeyemi",
      amount: 28000,
      status: "processing",
    },
    {
      id: "#ORD-5676",
      product: "Sports Equipment",
      buyer: "School Admin",
      amount: 150000,
      status: "completed",
    },
    {
      id: "#ORD-5675",
      product: "Laptop Sleeve",
      buyer: "Student - Chioma",
      amount: 4000,
      status: "completed",
    },
  ];

  const products = [
    { name: "School Uniforms", stock: 45, sold: 128, revenue: 5760000 },
    { name: "Textbooks", stock: 23, sold: 89, revenue: 2492000 },
    { name: "Sports Gear", stock: 12, sold: 34, revenue: 1020000 },
    { name: "Stationery Sets", stock: 67, sold: 156, revenue: 468000 },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="bg-yellow-100 text-yellow-700">Pending</span>;
      case "processing":
        return <span className="bg-blue-100 text-blue-700">Processing</span>;
      case "completed":
        return <span className="bg-green-100 text-green-700">Completed</span>;
      case "cancelled":
        return <span className="bg-red-100 text-red-700">Cancelled</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Vendor Portal</h1>
              <p className="text-sm text-gray-600">
                Marketplace & Orders Management
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                text=""
                variant="ghost"
                icon={<Bell className="h-5 w-5" />}
              />
              <Link to="/">
                <Button variant="outline" text="Back to Website" />
              </Link>
              <Button
                variant="ghost"
                text="Sign Out"
                icon={<LogOut className="h-4 w-4" />}
                onClick={handleSignOut}
                className="gap-2"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full"> */}
        <Tabs defaultValue={activeTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview" className="gap-2">
              <Home className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="orders" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="products" className="gap-2">
              <Package className="h-4 w-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="messages" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
            </TabsTrigger>
            <TabsTrigger value="reports" className="gap-2">
              <FileText className="h-4 w-4" />
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <ShoppingCart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900">42</div>
                  <p className="text-sm text-gray-600">Total Orders (Month)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900">₦9.7M</div>
                  <p className="text-sm text-gray-600">Revenue (Month)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Package className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900">147</div>
                  <p className="text-sm text-gray-600">Products Listed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900">4.8</div>
                  <p className="text-sm text-gray-600">Vendor Rating</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentOrders.map((order, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-gray-900">{order.id}</p>
                              {getStatusBadge(order.status)}
                            </div>
                            <p className="text-sm text-gray-600">
                              {order.product}
                            </p>
                            <p className="text-xs text-gray-500">
                              {order.buyer}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-900">
                              ₦{order.amount.toLocaleString()}
                            </p>
                            <Button
                              text="View"
                              variant="outline"
                              className="mt-2"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {products.map((product, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex-1">
                            <p className="text-gray-900">{product.name}</p>
                            <p className="text-sm text-gray-600">
                              Stock: {product.stock} • Sold: {product.sold}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-900">
                              ₦{(product.revenue / 1000000).toFixed(1)}M
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button
                        text="Add New Product"
                        icon={<Package className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                      <Button
                        text="Manage Orders"
                        icon={<ShoppingCart className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                      <Button
                        text="View Analytics"
                        icon={<BarChart3 className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                      <Button
                        text="Download Reports"
                        icon={<FileText className="h-4 w-4" />}
                        iconPosition="left"
                        variant="outline"
                        className="w-full justify-start gap-2"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Sales Growth
                        </p>
                        <p className="text-gray-900">↑ 23% vs last month</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Order Fulfillment
                        </p>
                        <p className="text-gray-900">98% on-time</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Customer Satisfaction
                        </p>
                        <p className="text-gray-900">4.8/5 stars</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Action Required</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Pending Orders</span>
                        <span className="bg-yellow-100 text-yellow-700">5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Low Stock Items</span>
                        <span className="bg-red-100 text-red-700">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span>New Messages</span>
                        <span className="bg-blue-100 text-blue-700">7</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete order management system would be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Product Catalog</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Product listing, editing, and inventory management would be
                  displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Sales Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Detailed sales analytics and performance metrics would be
                  displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Customer Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customer inquiries and communication would be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sales reports, revenue analytics, and financial statements
                  would be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
