import { Card, CardContent } from "../../ui/card";
// import { Badge } from "../components/ui/badge";
import { Leaf, Sun, Droplet, Recycle, TrendingUp, Zap } from "lucide-react";

export function SustainabilityPage() {
  const initiatives = [
    {
      icon: Sun,
      title: "Solar Energy",
      description:
        "600kW solar panel array generating 60% of campus electricity",
      impact: "240 tons CO₂ saved annually",
    },
    {
      icon: Droplet,
      title: "Water Conservation",
      description: "Rainwater harvesting and greywater recycling systems",
      impact: "500,000 liters saved monthly",
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description:
        "Comprehensive recycling program and composting of food waste",
      impact: "75% waste diverted from landfill",
    },
    {
      icon: Leaf,
      title: "Green Spaces",
      description:
        "Campus gardens, tree-planting program, and biodiversity initiatives",
      impact: "200+ trees planted since 2020",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-green-900 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              Sustainability
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Building a Greener Future
            </h1>
            <p className="text-xl text-gray-200">
              Our commitment to environmental responsibility through renewable
              energy, conservation, and education.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Our Initiatives
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {initiatives.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <span>{item.impact}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
            <h2 className="text-4xl mb-6 text-gray-900">
              Live Energy Dashboard
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Students can track real-time solar generation and campus energy
              usage through our interactive dashboard.
            </p>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <div className="text-4xl text-green-600 mb-2">342 kW</div>
                    <div className="text-gray-600">Currently Generating</div>
                  </div>
                  <div>
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-4xl text-blue-600 mb-2">218 kW</div>
                    <div className="text-gray-600">Current Consumption</div>
                  </div>
                  <div>
                    <Sun className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                    <div className="text-4xl text-yellow-600 mb-2">4.2 MWh</div>
                    <div className="text-gray-600">Generated Today</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
