import { Paw, Heart, Bone, DogBowl, Scissors, FirstAid } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DogCard = ({ icon: Icon, title, description }) => (
  <Card className="w-full sm:w-64">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Icon className="h-6 w-6" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Paw-some Dog Care</h1>
        <p className="text-xl text-gray-600">Everything you need for your furry friend!</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <DogCard
          icon={Paw}
          title="Daily Walks"
          description="Regular exercise keeps your dog healthy and happy."
        />
        <DogCard
          icon={Heart}
          title="Love & Care"
          description="Shower your furry friend with affection and attention."
        />
        <DogCard
          icon={Bone}
          title="Nutrition"
          description="Provide a balanced diet for optimal health and energy."
        />
        <DogCard
          icon={DogBowl}
          title="Feeding Time"
          description="Establish a consistent feeding schedule for your pup."
        />
        <DogCard
          icon={Scissors}
          title="Grooming"
          description="Regular grooming keeps your dog clean and comfortable."
        />
        <DogCard
          icon={FirstAid}
          title="Health Check"
          description="Regular vet visits ensure your dog stays in top shape."
        />
      </div>
    </div>
  );
};

export default Index;
