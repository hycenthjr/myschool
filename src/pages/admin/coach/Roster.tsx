import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import Button from "../../../ui/button";

const teamRoster = [
  {
    name: "Chioma Okafor",
    position: "Midfielder",
    attendance: 95,
    performance: 88,
  },
  {
    name: "Tunde Adeyemi",
    position: "Forward",
    attendance: 92,
    performance: 85,
  },
  {
    name: "David Okonkwo",
    position: "Defender",
    attendance: 98,
    performance: 90,
  },
  {
    name: "Grace Eze",
    position: "Goalkeeper",
    attendance: 100,
    performance: 92,
  },
];

const Roster = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Team Roster - Eagles U-17</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {teamRoster.map((player, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <p className="text-gray-900">{player.name}</p>
                  <p className="text-sm text-gray-600">{player.position}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Attendance</p>
                    <p className="text-gray-900">{player.attendance}%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Performance</p>
                    <p className="text-gray-900">{player.performance}%</p>
                  </div>
                </div>
                <Button
                  text="View Profile"
                  variant="outline"
                  className="ml-4"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Roster;
