import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/about">About FoodHub</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">For Restaurants</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/partner">Partner with us</Link></li>
              <li><Link to="/apps">Apps For You</Link></li>
              <li><Link to="/business">Business</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Learn More</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/security">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Social Links</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Twitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Instagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Mail />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} FoodHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;