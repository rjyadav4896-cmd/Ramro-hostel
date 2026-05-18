import { motion } from "motion/react";
import {
  Bike,
  GlassWater,
  BrushCleaning,
  Shirt,
  Sparkles,
  Sun,
  Users,
  Armchair,
  Columns3,
} from "lucide-react";
import parkingImage from "../../assets/hstl_001/parking.jpg";

export default function FacilitiesSection() {
  const available = [
    {
      icon: GlassWater,
      name: "Drinking water",
      description: "Hot and cold drinking water service is available.",
    },
    {
      icon: Shirt,
      name: "Laundry",
      description: "Laundry service is provided twice a week.",
    },
    {
      icon: Armchair,
      label: "Study Table",
      value: "Personal Study table is offered",
    },
    {
      icon: Columns3,
      label: "Cupboard",
      value: "Sharing Cupboard is provided",
    },
    {
      icon: Bike,
      name: "Parking",
      description: "Bike and scooter parking inside the hostel block.",
    },
    {
      icon: Sun,
      name: "Terrace access",
      description: "Students can study and spend time on the terrace.",
    },
    {
      icon: Sparkles,
      name: "Bathroom cleaning",
      description: "Bathrooms are cleaned once a week.",
    },
    {
      icon: Users,
      name: "Parent visits",
      description: "Students may meet visitors inside when they are parents.",
    },
    {
      icon: BrushCleaning,
      name: "Room responsibility",
      description: "Room cleaning is handled by students.",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Facilities
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold text-slate-950">
              Services that matter every week
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The Ramro Hostel submission confirms the core facilities students
              ask about most: power backup, drinking water, two-wheeler parking,
              terrace access, laundry, and cleaning support.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
              <img
                src={parkingImage}
                alt="Two-wheeler parking at Ramro Hostel"
                className="h-72 w-full object-cover"
              />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {available.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={facility.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <Icon className="w-7 h-7 text-emerald-700 mb-3" />
                  <h3 className="font-bold text-slate-950">{facility.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {facility.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
