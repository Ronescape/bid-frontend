import { motion } from 'motion/react';
import { TrendingUp, Flame } from 'lucide-react';

const liveBidActivity = [
  { user: 'Sarah M.', item: 'Rolex Submariner 2024', amount: 8500, time: '2 sec ago', avatar: '👩‍💼' },
  { user: 'Mike T.', item: 'Limited Edition Yeezy 350', amount: 650, time: '5 sec ago', avatar: '👨‍💻' },
  { user: 'Alex K.', item: 'Vintage Leica M3 Camera', amount: 2300, time: '8 sec ago', avatar: '🧑‍🎨' },
  { user: 'Emma R.', item: 'Gaming Laptop RTX 4090', amount: 1850, time: '12 sec ago', avatar: '👩‍🔬' },
  { user: 'David L.', item: 'Rolex Submariner 2024', amount: 8450, time: '15 sec ago', avatar: '👨‍🚀' },
];

export function LiveBids() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
            <Flame className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-sm text-red-300">Live Bidding Activity</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Real-Time Action
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Watch as bids come in live! Don't let others snatch your dream items.
          </p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
          <div className="space-y-4">
            {liveBidActivity.map((bid, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all"
              >
                <div className="text-3xl">{bid.avatar}</div>
                <div className="flex-1">
                  <div className="text-white">{bid.user}</div>
                  <div className="text-sm text-slate-400">{bid.item}</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-lg">${bid.amount.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-slate-500">{bid.time}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-8 text-center"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl shadow-xl shadow-red-500/50 hover:shadow-red-500/70 transition-all">
              💰 Join the Action Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
