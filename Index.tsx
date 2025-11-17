import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Youtube, Send, Linkedin, Twitter, Facebook, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-pharmacy.jpg";
import logoImage from "@/assets/mk-pharmacy-logo.jpg";

const Index = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/mkpharmacyhub",
      bgColor: "from-purple-600 via-pink-600 to-orange-500",
      iconColor: "text-white",
      description: "Follow for daily pharmacy updates",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@mkpharmacyhub",
      bgColor: "from-red-600 to-red-700",
      iconColor: "text-white",
      description: "Watch educational videos",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/MkPharmacyHub",
      bgColor: "from-blue-400 to-blue-600",
      iconColor: "text-white",
      description: "Join our community channel",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mk-pharmacy-hub-686031360",
      bgColor: "from-blue-600 to-blue-800",
      iconColor: "text-white",
      description: "Professional networking",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/MkPharmacyHub",
      bgColor: "from-slate-800 to-slate-950",
      iconColor: "text-white",
      description: "Latest news and updates",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/MkPharmacyHub1",
      bgColor: "from-blue-500 to-blue-700",
      iconColor: "text-white",
      description: "Connect with our community",
    },
    {
      name: "Snapchat",
      icon: Send,
      url: "https://www.snapchat.com/add/mkpharmacyhub1",
      bgColor: "from-yellow-300 to-yellow-500",
      iconColor: "text-slate-900",
      description: "Daily stories and content",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 110, 139, 0.85), rgba(13, 110, 139, 0.75)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center">
          <img 
            src={logoImage} 
            alt="MK Pharmacy Hub Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 animate-fade-in"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            MK Pharmacy Hub
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your trusted source for pharmaceutical knowledge, updates, and professional insights
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Connect With Us
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground animate-fade-in">
            About MK Pharmacy Hub
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed animate-fade-in">
            MK Pharmacy Hub is dedicated to providing comprehensive pharmaceutical education, 
            industry updates, and professional development resources for pharmacy professionals 
            and students. Join our growing community across multiple platforms to stay informed 
            and connected with the latest in pharmaceutical sciences.
          </p>
        </div>
      </section>

      {/* Social Links Section */}
      <section id="connect" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
            Connect With Us
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 animate-fade-in">
            Follow us on your favorite platform and join our growing community
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social) => (
              <Card 
                key={social.name}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 hover:scale-105"
                onClick={() => window.open(social.url, '_blank')}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.bgColor} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-4 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className={`w-8 h-8 ${social.iconColor}`} />
                    </div>
                    <ExternalLink className={`w-5 h-5 ${social.iconColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <h3 className={`font-bold text-xl mb-2 ${social.iconColor}`}>
                    {social.name}
                  </h3>
                  <p className={`text-sm ${social.iconColor} opacity-90`}>
                    {social.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* ATO Play Special Card */}
          <Card 
            className="mt-8 group relative overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 hover:scale-105"
            onClick={() => window.open('https://atoplay.com/channels/479e37e1-f0c0-4864-b1f7-99d5e9c1a906', '_blank')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white mb-1">
                      ATOplay Channel
                    </h3>
                    <p className="text-sm text-white/90">
                      Exclusive pharmacy content
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgMTBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTIyIDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDEwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00ek04IDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDEwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 text-white/90 animate-fade-in">
            Join thousands of pharmacy professionals and students who trust MK Pharmacy Hub 
            for the latest pharmaceutical insights and resources.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-cyan-700 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all hover:scale-105 font-semibold"
            onClick={() => window.open('https://www.instagram.com/mkpharmacyhub', '_blank')}
          >
            Follow Us Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} MK Pharmacy Hub owner - Mukesh Kumar Deshmukh
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
