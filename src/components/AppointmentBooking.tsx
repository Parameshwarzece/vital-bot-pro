import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MapPin, Phone, Clock, Star } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const nearbyHospitals = [
  {
    id: 1,
    name: "City General Hospital",
    address: "123 Main Street, Downtown",
    phone: "+1 (555) 123-4567",
    rating: 4.5,
    distance: "0.8 miles",
    specialties: ["Cardiology", "Emergency", "Orthopedics", "Pediatrics"]
  },
  {
    id: 2,
    name: "St. Mary's Medical Center",
    address: "456 Oak Avenue, Midtown",
    phone: "+1 (555) 234-5678",
    rating: 4.3,
    distance: "1.2 miles",
    specialties: ["Neurology", "Oncology", "Surgery", "Radiology"]
  },
  {
    id: 3,
    name: "Regional Health Institute",
    address: "789 Pine Boulevard, Westside",
    phone: "+1 (555) 345-6789",
    rating: 4.7,
    distance: "2.1 miles",
    specialties: ["Dermatology", "Gastroenterology", "Pulmonology", "Endocrinology"]
  }
];

const timeSlots = [
  "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
];

const AppointmentBooking = () => {
  const [selectedHospital, setSelectedHospital] = useState<typeof nearbyHospitals[0] | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [healthProblem, setHealthProblem] = useState("");
  const [specialty, setSpecialty] = useState("");
  const { toast } = useToast();

  const handleBookAppointment = () => {
    if (!selectedHospital || !selectedDate || !selectedTime || !patientName || !patientPhone || !healthProblem) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to book your appointment.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Appointment Booked Successfully!",
      description: `Your appointment at ${selectedHospital.name} is scheduled for ${format(selectedDate, "PPP")} at ${selectedTime}.`,
    });

    // Reset form
    setSelectedHospital(null);
    setSelectedDate(undefined);
    setSelectedTime("");
    setPatientName("");
    setPatientPhone("");
    setHealthProblem("");
    setSpecialty("");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Book Hospital Appointment</h1>
        <p className="text-muted-foreground">Find and book appointments at nearby hospitals based on your health needs</p>
      </div>

      {/* Patient Information */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="patientName">Full Name *</Label>
              <Input
                id="patientName"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="patientPhone">Phone Number *</Label>
              <Input
                id="patientPhone"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="healthProblem">Health Problem/Symptoms *</Label>
            <Textarea
              id="healthProblem"
              value={healthProblem}
              onChange={(e) => setHealthProblem(e.target.value)}
              placeholder="Describe your health problem or symptoms..."
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="specialty">Preferred Specialty (Optional)</Label>
            <Select value={specialty} onValueChange={setSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Select a specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
                <SelectItem value="gastroenterology">Gastroenterology</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="oncology">Oncology</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="pulmonology">Pulmonology</SelectItem>
                <SelectItem value="radiology">Radiology</SelectItem>
                <SelectItem value="surgery">Surgery</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Hospital Selection */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Select Hospital</h2>
        <div className="grid gap-4">
          {nearbyHospitals.map((hospital) => (
            <Card 
              key={hospital.id}
              className={cn(
                "cursor-pointer transition-colors hover:bg-accent/50",
                selectedHospital?.id === hospital.id && "ring-2 ring-primary bg-accent/30"
              )}
              onClick={() => setSelectedHospital(hospital)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{hospital.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{hospital.address}</span>
                      <span className="text-xs bg-primary/10 px-2 py-1 rounded-full">{hospital.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{hospital.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{hospital.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {hospital.specialties.slice(0, 3).map((specialty) => (
                        <span key={specialty} className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                      {hospital.specialties.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{hospital.specialties.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Date and Time Selection */}
      {selectedHospital && (
        <Card>
          <CardHeader>
            <CardTitle>Select Date & Time</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Select Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label>Select Time *</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose appointment time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {time}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleBookAppointment}
              className="w-full" 
              size="lg"
            >
              Book Appointment at {selectedHospital.name}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AppointmentBooking;