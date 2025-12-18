import { motion } from 'motion/react';
import { Heart, Shield, Zap, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 mt-24">
      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-sm text-slate-300">Secure Payments</div>
          </div>
          <div className="text-center">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-sm text-slate-300">Instant Notifications</div>
          </div>
          <div className="text-center">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-sm text-slate-300">Verified Items</div>
          </div>
          <div className="text-center">
            <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-sm text-slate-300">24/7 Support</div>
          </div>
        </div>

        {/* About Company */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl text-white mb-4">About BidWin</h3>
          <p className="text-slate-400 mb-6">
            BidWin is the leading Telegram-based auction platform, connecting thousands of buyers 
            and sellers worldwide. Since 2023, we've revolutionized online bidding with real-time 
            auctions, secure transactions, and an unbeatable user experience. Our mission is to make 
            premium items accessible to everyone through fair and exciting auctions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <span>🏆 Award-Winning Platform</span>
            <span>•</span>
            <span>🔒 Bank-Level Security</span>
            <span>•</span>
            <span>🌍 Global Shipping</span>
            <span>•</span>
            <span>💎 Premium Quality</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-full text-lg shadow-2xl shadow-purple-500/50"
          >
            🎯 Open BidWin App on Telegram
          </motion.button>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-6">
          <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400 transition-colors">FAQ</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-slate-500">
          © 2025 BidWin. All rights reserved. Made with ❤️ for bidders worldwide.
        </div>
      </div>
    </footer>
  );
}
