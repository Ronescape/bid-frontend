import { motion } from 'motion/react';
import { AuctionCard } from './AuctionCard';

const featuredItems = [
  {
    id: 1,
    title: 'Rolex Submariner 2024',
    image: 'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjU4OTExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    currentBid: 8500,
    startingBid: 5000,
    bidders: 47,
    status: 'live' as const,
    startDate: new Date('2025-12-17T10:00:00'),
    endDate: new Date('2025-12-18T22:00:00'),
    category: 'Luxury Watches',
  },
  {
    id: 2,
    title: 'Vintage Leica M3 Camera',
    image: 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FtZXJhfGVufDF8fHx8MTc2NTkwMDA2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    currentBid: 2300,
    startingBid: 1200,
    bidders: 29,
    status: 'live' as const,
    startDate: new Date('2025-12-17T08:00:00'),
    endDate: new Date('2025-12-17T20:00:00'),
    category: 'Photography',
  },
  {
    id: 3,
    title: 'Limited Edition Yeezy 350',
    image: 'https://images.unsplash.com/photo-1686783695684-7b8351fdebbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNuZWFrZXJzfGVufDF8fHx8MTc2NTkzNjMxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    currentBid: 650,
    startingBid: 300,
    bidders: 83,
    status: 'live' as const,
    startDate: new Date('2025-12-17T09:00:00'),
    endDate: new Date('2025-12-17T23:59:00'),
    category: 'Fashion',
  },
  {
    id: 4,
    title: 'Gaming Laptop RTX 4090',
    image: 'https://images.unsplash.com/photo-1640955014216-75201056c829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY1ODg1NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    currentBid: 1850,
    startingBid: 1200,
    bidders: 56,
    status: 'live' as const,
    startDate: new Date('2025-12-17T11:00:00'),
    endDate: new Date('2025-12-18T15:00:00'),
    category: 'Electronics',
  },
  {
    id: 5,
    title: 'Abstract Canvas Art',
    image: 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBwYWludGluZ3xlbnwxfHx8fDE3NjU4NDA0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    currentBid: 4200,
    startingBid: 2500,
    bidders: 34,
    status: 'upcoming' as const,
    startDate: new Date('2025-12-18T10:00:00'),
    endDate: new Date('2025-12-19T18:00:00'),
    category: 'Art',
  },
  {
    id: 6,
    title: 'Diamond Tennis Bracelet',
    image: 'https://images.unsplash.com/photo-1481980235850-66e47651e431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwamV3ZWxyeXxlbnwxfHx8fDE3NjU4NzE0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    currentBid: 12500,
    startingBid: 8000,
    bidders: 19,
    status: 'upcoming' as const,
    startDate: new Date('2025-12-19T12:00:00'),
    endDate: new Date('2025-12-20T20:00:00'),
    category: 'Jewelry',
  },
];

export function FeaturedAuctions() {
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
          🔥 Featured Auctions
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Don't miss out on these hot items! Place your bid now before time runs out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <AuctionCard {...item} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl shadow-blue-500/50"
        >
          View All Auctions →
        </motion.button>
      </motion.div>
    </div>
  );
}
