import { motion } from 'motion/react';
import { DollarSign, Package, Users, Zap } from 'lucide-react';

const stats = [
  {
    icon: DollarSign,
    value: '$2.5M+',
    label: 'Total Bid Value',
    color: 'text-green-400',
  },
  {
    icon: Package,
    value: '1,200+',
    label: 'Items Sold',
    color: 'text-blue-400',
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Active Bidders',
    color: 'text-purple-400',
  },
  {
    icon: Zap,
    value: '98%',
    label: 'Success Rate',
    color: 'text-yellow-400',
  },
];

export function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center"
            >
              <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
              <div className="text-2xl sm:text-3xl text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
