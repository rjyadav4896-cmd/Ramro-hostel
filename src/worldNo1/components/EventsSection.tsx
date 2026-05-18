import { motion } from 'motion/react';
import { HeartHandshake, PartyPopper, Sparkles } from 'lucide-react';
import holiImage from '../../assets/hstl_001/festival-holi.jpg';
import festivalImage from '../../assets/hstl_001/festival-2.jpg';
import studentImage from '../../assets/hstl_001/student-life.jpg';

export default function EventsSection() {
  const events = [
    { title: 'Holi Celebration', description: 'Festival meals include Thakali set on Holi.', image: holiImage },
    { title: 'Dashain & Tihar Stay', description: 'The hostel remains open during major festivals.', image: festivalImage },
    { title: 'Student Community', description: 'Shared living designed around parents-approved visits and hostel discipline.', image: studentImage }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Community</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-slate-950">Festivals, food, and hostel life</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Ramro Hostel keeps students supported during ordinary weeks and major Nepali festivals.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-slate-950 shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                    {index === 0 ? <PartyPopper className="h-6 w-6 text-amber-200" /> : index === 1 ? <Sparkles className="h-6 w-6 text-amber-200" /> : <HeartHandshake className="h-6 w-6 text-amber-200" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                  <p className="mt-2 text-sm text-slate-200">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
