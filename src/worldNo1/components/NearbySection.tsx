import { motion } from "motion/react";
import {
  BookOpen,
  MapPinned,
  ShoppingBag,
  Trees,
  University,
} from "lucide-react";
import building from "../../assets/hstl_001/main-building-hd.jpg";

const places = [
  { icon: University, name: "KMC College", time: "1 min walk" },
  { icon: ShoppingBag, name: "Mall", time: "4 min walk" },
  { icon: Trees, name: "Ratna Park", time: "8 min walk" },
  { icon: BookOpen, name: "Library", time: "3 min walk" },
  { icon: MapPinned, name: "Stationery", time: "1 min walk" },
];

export default function NearbySection() {
  return (
    <section
      id="nearby"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={building}
              alt="Ramro Hostel building near student essentials"
              className="h-[520px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Nearby Places
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold text-slate-950">
              Everything students need is close
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              “Our location keeps your daily life effortless — from shopping and
              entertainment to every important service you may need, everything
              is just a minute away, so you can focus completely on your
              dreams.”
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {places.map((place, index) => {
                const Icon = place.icon;
                return (
                  <motion.div
                    key={place.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
                  >
                    <Icon className="h-7 w-7 text-emerald-700 mb-3" />
                    <div className="font-bold text-slate-950">{place.name}</div>
                    <div className="text-sm text-slate-600">{place.time}</div>
                  </motion.div>
                );
              })}
            </div>

            <a
              href="https://maps.app.goo.gl/a716n7ezm3S7fvxF7"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-lg bg-slate-950 px-6 py-3 font-bold text-white hover:bg-slate-800 transition-colors"
            >
              View on Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
