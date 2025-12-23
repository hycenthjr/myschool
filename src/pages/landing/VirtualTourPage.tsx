import { Card } from "../../ui/card";
// import { Badge } from "../components/ui/badge";
import Button from "../../ui/button";
import { Play, Map, Calendar } from "lucide-react";

const locations = [
  {
    name: "Main Academic Block",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MTQ4NzA4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Smart classrooms, science labs, library, and study areas",
  },
  {
    name: "Sports Complex",
    image:
      "https://images.unsplash.com/photo-1668068873075-cf3e9925eae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMGZpZWxkfGVufDF8fHx8MTc2MTUyMDg3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "FIFA-standard pitch, indoor courts, gym, and recovery rooms",
  },
  {
    name: "Maker Labs & Incubator",
    image:
      "https://images.unsplash.com/photo-1605781231474-f60dea478e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlY2hub2xvZ3klMjBsYWJ8ZW58MXx8fHwxNzYxNDg3OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Robotics lab, fashion studio, auto workshop, media production",
  },
  {
    name: "Boarding Houses",
    image:
      "https://images.unsplash.com/photo-1552598810-e76dd2eb05e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZGluZyUyMHNjaG9vbCUyMGNhbXB1c3xlbnwxfHx8fDE3NjE1MjA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Modern rooms, common areas, sickbay, and dining facilities",
  },
];

export function VirtualTourPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
              Virtual Tour
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Explore Arenas From Anywhere
            </h1>
            <p className="text-xl text-gray-200">
              Take a 360° immersive tour of our world-class campus, or schedule
              a live virtual or in-person visit with our admissions team.
            </p>
          </div>
        </div>
      </section>

      {/* Main 360 Tour */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="relative aspect-video bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1552598810-e76dd2eb05e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZGluZyUyMHNjaG9vbCUyMGNhbXB1c3xlbnwxfHx8fDE3NjE1MjA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Virtual tour"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    text="Launch 360° Virtual Tour"
                    icon={<Play className="h-6 w-6" />}
                    iconPosition="left"
                    className="gap-2 bg-white text-blue-900 hover:bg-gray-100 shadow-lg"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="mb-4 bg-white/20 border-white/30 rounded-lg px-3 py-1 text-sm font-medium">
                    Interactive 360° Experience
                  </span>
                </div>
              </div>
            </Card>
            <p className="text-center text-gray-600 mt-6">
              Click and drag to explore every corner of our campus. Use
              navigation hotspots to move between locations.
            </p>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Tour Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Jump to specific areas of campus
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl mb-2">{location.name}</h3>
                      <p className="text-gray-200">{location.description}</p>
                    </div>
                  </div>
                  <Button
                    text="View"
                    icon={<Play className="h-4 w-4" />}
                    iconPosition="left"
                    className="absolute top-4 right-4 gap-1"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
                Campus Map
              </h2>
              <p className="text-xl text-gray-600">
                Interactive layout of all facilities
              </p>
            </div>
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-[16/10] bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Interactive campus map will load here
                    </p>
                    <Button
                      text="View Full Map"
                      variant="outline"
                      className="mt-4"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Visit CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Visit in Person?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Book a guided campus tour with our admissions team. Available
            weekdays and select Saturdays.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              text="Schedule Campus Visit"
              icon={<Calendar className="h-5 w-5" />}
              iconPosition="left"
              className="bg-white text-blue-900 hover:bg-gray-100 gap-2"
            />
            <Button
              text="Book Virtual Q&A Session"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white gap-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
