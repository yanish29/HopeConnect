import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/Navigation";
import { MapPin, Users, Calendar, CheckCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { StatCard } from "@/components/StatCard";

export default function NGODetail() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [donationItems, setDonationItems] = useState("");
  const [donationAmount, setDonationAmount] = useState("");

  const categories = ["Education", "Health", "Food", "Arts", "Shelter"];
  const presetAmounts = ["₹500", "₹1,000", "₹2,500", "₹5,000"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="dashboard" />
      
      {/* Hero Header */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Udaan Educational Trust</h1>
            <p className="text-xl opacity-90 mb-6">Lifting communities through the power of education in Delhi.</p>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <CheckCircle className="h-4 w-4 mr-1" />
                Verified Organization
              </Badge>
              <div className="flex items-center space-x-1 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>Delhi, Mumbai, Bangalore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Us */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Udaan Educational Trust has been dedicated to transforming communities through education since 2015. 
                  We believe that every child deserves access to quality education, regardless of their economic background. 
                  Our programs focus on providing educational resources, building schools, and training teachers in 
                  underserved communities across India.
                </p>
              </CardContent>
            </Card>

            {/* Child Spotlight */}
            <Card className="card-hover border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Child Spotlight</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                    👦
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Rohan, Age 10</h3>
                    <p className="text-muted-foreground mb-2">Loves drawing and dreams of becoming an artist</p>
                    <p className="text-sm"><strong>Current Need:</strong> Art supplies including crayons, sketch books, and drawing pencils</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Information */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Key Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <Badge variant="outline" className="mt-1">Education</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Founded</p>
                    <p className="font-medium">2015</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Locations</p>
                    <p className="font-medium">Delhi, Mumbai, Bangalore</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-success font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Stats */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Our Impact So Far</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <StatCard icon="👨‍🎓" value="12500+" label="Students Supported" />
                  </div>
                  <div className="text-center">
                    <StatCard icon="🏫" value="45" label="Community Schools" />
                  </div>
                  <div className="text-center">
                    <StatCard icon="⏰" value="8000+" label="Volunteer Hours" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donation Widget - Sticky */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Make a Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="goods" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="goods">Donate Goods</TabsTrigger>
                    <TabsTrigger value="money">Donate Money</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="goods" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Select Category</label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Specify Items</label>
                      <Textarea
                        placeholder="e.g., 10 notebooks, 5 geometry boxes..."
                        value={donationItems}
                        onChange={(e) => setDonationItems(e.target.value)}
                        rows={4}
                      />
                    </div>
                    
                    <Button className="w-full" size="lg" variant="cta">
                      Arrange Donation
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="money" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Choose Amount</label>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {presetAmounts.map((amount) => (
                          <Button
                            key={amount}
                            variant={donationAmount === amount ? "default" : "outline"}
                            size="sm"
                            onClick={() => setDonationAmount(amount)}
                          >
                            {amount}
                          </Button>
                        ))}
                      </div>
                      <input
                        type="text"
                        placeholder="Custom amount"
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={donationAmount.startsWith('₹') ? '' : donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                      />
                    </div>
                    
                    <Button asChild className="w-full" size="lg" variant="success">
                      <Link to="/payment">Donate Now</Link>
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}