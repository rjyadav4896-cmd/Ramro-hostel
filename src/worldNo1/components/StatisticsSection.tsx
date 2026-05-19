import { motion } from "motion/react";
import { CalendarDays, IndianRupee, MoonIcon, Sunrise } from "lucide-react";

export default function StatisticsSection() {
  const details = [
    {
      icon: IndianRupee,
      label: "Admission Fee",
      value: "Rs. 2,000",
      tone: "bg-amber-100 text-amber-800",
    },
    {
      icon: MoonIcon,
      label: "Night In Time",
      value: "9:00 PM",
      tone: "bg-sky-100 text-sky-800",
    },
    {
      icon: Sunrise,
      label: "Morning Out Time",
      value: "5:00 AM",
      tone: "bg-emerald-100 text-emerald-800",
    },
    {
      icon: CalendarDays,
      label: "Festivals",
      value: "Remains open in Dashain and Tihar",
      tone: "bg-rose-100 text-rose-800",
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-bold uppercase tracking-wide text-amber-300">
            Quick Facts
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white">
            Important hostel details at a glance
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${detail.tone}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-sm text-slate-300">{detail.label}</div>
                <div className="mt-2 text-3xl font-black text-white">
                  {detail.value}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
