import { motion } from 'motion/react';
import { UserPlus, Search, Gavel, Trophy } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up Instantly',
    description: 'Create your account in seconds through Telegram. No lengthy forms or verification delays.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Search,
    title: 'Browse Items',
    description: 'Explore thousands of items across categories. Filter by price, time, or popularity.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Gavel,
    title: 'Place Your Bid',
    description: 'Bid with confidence. Set auto-bids or manually compete in real-time with other bidders.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Trophy,
    title: 'Win & Celebrate',
    description: 'Win amazing items at unbeatable prices. Fast shipping and secure payment guaranteed.',
    color: 'from-green-500 to-emerald-500',
  },
];

export function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl text-white mb-4">
          How It Works
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Start bidding in just 4 simple steps. It's fast, secure, and exciting!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mt-2`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-700 to-transparent" />
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg shadow-xl shadow-purple-500/50"
        >
          🚀 Get Started Now
        </motion.button>
      </motion.div>
    </div>
  );
}
