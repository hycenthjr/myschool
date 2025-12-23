import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const Competitions = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Competitions & Tournaments</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Competition schedule, results, and tournament management would be
            displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Competitions;
