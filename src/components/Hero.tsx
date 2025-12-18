import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-purple-200">Trusted by 50,000+ bidders worldwide</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl text-white mb-6 tracking-tight">
            Bid. Win. Own.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Exclusive Items
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Join the most exciting live auction platform on Telegram. Discover rare items, 
            place real-time bids, and win incredible deals on luxury goods, electronics, 
            collectibles, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
            >
              🎯 Start Bidding Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              View Live Auctions
            </motion.button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-2xl text-white">$2.5M+</div>
              <div className="text-sm text-slate-400">Total Bids</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl text-white">50K+</div>
              <div className="text-sm text-slate-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-2xl text-white">1,200+</div>
              <div className="text-sm text-slate-400">Items Sold</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
