import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send,
  Sparkles,
  Film,
  Users,
  Shield,
  Heart
} from "lucide-react";

export const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log("Newsletter subscription");
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                CineTickets
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Your gateway to cinematic experiences. Book tickets, discover movies, and create unforgettable memories.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="group p-3 bg-gray-800/50 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="group p-3 bg-gray-800/50 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="group p-3 bg-gray-800/50 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="group p-3 bg-gray-800/50 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110">
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Film className="w-5 h-5 text-purple-400" />
              Services
            </h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                Movie Tickets
              </a>
              <a href="#" className="block text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                Premium Seating
              </a>
              <a href="#" className="block text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                Group Bookings
              </a>
              <a href="#" className="block text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                Event Hosting
              </a>
              <Link 
                to="/theater-owner/login" 
                className="block text-purple-400 hover:text-pink-400 hover:pl-2 transition-all duration-300 font-semibold"
              >
                Theater Partner Login
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              Company
            </h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                Contact
              </Link>
              <a href="#" className="block text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                Careers
              </a>
              <a href="#" className="block text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                Press Kit
              </a>
              <a href="#" className="block text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                Partner With Us
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Get the latest movie updates, exclusive offers, and early access to tickets.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  required
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-400" />
              Legal & Privacy
            </h4>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
              Cookie Policy
            </Link>
            <Link to="/refund" className="text-gray-400 hover:text-white transition-colors duration-300">
              Refund Policy
            </Link>
            <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors duration-300">
              Accessibility
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <Phone className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Call Us</p>
                <p className="text-white font-semibold">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email Us</p>
                <p className="text-white font-semibold">support@cinetickets.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Visit Us</p>
                <p className="text-white font-semibold">123 Cinema Street, Movie City</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-sm">
              © 2024 CineTickets. Made with love for movie enthusiasts.
            </span>
          </div>
          <div className="text-sm text-gray-500">
            All rights reserved. • Version 2.0
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </footer>
  );
};