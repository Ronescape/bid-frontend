import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Users, TrendingUp, Zap } from 'lucide-react';

interface AuctionCardProps {
  id: number;
  title: string;
  image: string;
  currentBid: number;
  startingBid: number;
  bidders: number;
  status: 'live' | 'upcoming' | 'ended';
  startDate: Date;
  endDate: Date;
  category: string;
}

export function AuctionCard({
  title,
  image,
  currentBid,
  startingBid,
  bidders,
  status,
  endDate,
  category,
}: AuctionCardProps) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const end = endDate.getTime();
      const distance = end - now;

      if (distance < 0) {
        setTimeLeft('Ended');
        clearInterval(timer);
      } else {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const priceIncrease = ((currentBid - startingBid) / startingBid * 100).toFixed(0);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          {status === 'live' && (
            <div className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-full text-sm animate-pulse">
              <Zap className="w-3 h-3" />
              LIVE
            </div>
          )}
          {status === 'upcoming' && (
            <div className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
              Upcoming
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white rounded-full text-sm">
            {category}
          </div>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl text-white mb-4">{title}</h3>

        {/* Current Bid */}
        <div className="mb-4">
          <div className="text-sm text-slate-400 mb-1">Current Bid</div>
          <div className="flex items-center justify-between">
            <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              ${currentBid.toLocaleString()}
            </div>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <TrendingUp className="w-4 h-4" />
              +{priceIncrease}%
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-700">
          <div className="flex items-center gap-2 text-slate-300">
            <Users className="w-4 h-4 text-blue-400" />
            <div>
              <div className="text-sm text-slate-400">Bidders</div>
              <div>{bidders}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Clock className="w-4 h-4 text-purple-400" />
            <div>
              <div className="text-sm text-slate-400">Time Left</div>
              <div className="text-sm">{timeLeft}</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          {status === 'live' ? '⚡ Place Bid Now' : '🔔 Notify Me'}
        </motion.button>
      </div>
    </motion.div>
  );
}
