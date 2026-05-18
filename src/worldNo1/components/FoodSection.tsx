import { motion } from 'motion/react';
import { Clock, Drumstick, Soup, UtensilsCrossed } from 'lucide-react';
import messImage from '../../assets/hstl_001/mess.avif';

export default function FoodSection() {
  const timings = [
    { label: 'Breakfast', time: '7:30 AM - 8:40 AM' },
    { label: 'Lunch', time: '9:00 AM - 12:30 PM' },
    { label: 'Snacks', time: '4:00 PM - 5:00 PM' },
    { label: 'Dinner', time: '7:40 PM - 9:00 PM' }
  ];

  const specials = [
    'End of the month: mutton for non-veg students and paneer for veg students',
    'Holi: Thakali set',
    'Dashain and Tihar: hostel remains open'
  ];

  return (
    <section id="food" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Food Schedule</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-slate-950">Daily meals with festival specials</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Ramro Hostel provides four daily meal windows and special menus for monthly and festival occasions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-2xl shadow-xl">
            <img src={messImage} alt="Ramro Hostel mess area" className="h-full min-h-[420px] w-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-white p-6 md:p-8 shadow-xl ring-1 ring-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-950">Meal Timings</h3>
                <p className="text-sm text-slate-600">Submitted schedule for HSTL_001</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {timings.map((item) => (
                <div key={item.label} className="rounded-xl bg-slate-50 p-4">
                  <Clock className="w-5 h-5 text-emerald-700 mb-2" />
                  <div className="font-bold text-slate-950">{item.label}</div>
                  <div className="text-sm text-slate-600">{item.time}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-amber-100 to-emerald-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Drumstick className="w-6 h-6 text-amber-700" />
                <h4 className="text-xl font-bold text-slate-950">Special meals</h4>
              </div>
              <div className="space-y-3">
                {specials.map((special) => (
                  <div key={special} className="flex items-start text-slate-700">
                    <Soup className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-700" />
                    {special}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
