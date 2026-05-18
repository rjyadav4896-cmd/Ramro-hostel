import { motion } from 'motion/react';
import { BatteryCharging, Bike, Home, Shirt, Sparkles, Utensils, GlassWater } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    { icon: Home, title: 'Location', description: 'Narephat, Close to colleges, stationery, library, mall access, and daily student needs.' },
    { icon: Utensils, title: 'Meal', description: 'Four meals: Breakfast, lunch, snacks, and dinner are scheduled through the day.' },
    { icon: Shirt, title: 'Laundry', description: 'laundry support two times per week.' },
    { icon: Sparkles, title: 'Bathroom Cleaning', description: 'Bathroom cleaning service is provided once every week.' },
    { icon: GlassWater, title: 'Drinking water', description: 'hot/cold drinking water are available.' },
    { icon: Bike, title: 'Parking', description: 'Parking is available for bikes and scooters inside the hostel block.' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Why Ramro Hostel</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-slate-950">Built for student life</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            with transparent fees, essential services, a convenient location, and simple, practical living
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
