import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronRight, Images, PartyPopper, UsersRound } from 'lucide-react';
import holiImage from '../../assets/hstl_001/festival-holi.jpg';
import festivalImage from '../../assets/hstl_001/festival-2.jpg';
import messImage from '../../assets/hstl_001/mess.avif';
import roomThreeImage from '../../assets/hstl_001/room-3sharing.png';
import roomFourImage from '../../assets/hstl_001/room-4sharing.jpg';
import studentImage from '../../assets/hstl_001/student-life.jpg';
import studentImageTwo from '../../assets/hstl_001/student-life-2.jpg';

type GalleryKey = 'festival' | 'student';

const galleries = {
  festival: {
    title: 'Festival Images',
    description: 'Holi colors, festival meals, and Dashain-Tihar moments together.',
    cover: holiImage,
    accent: 'from-rose-500/70 via-amber-400/35 to-slate-950/90',
    icon: PartyPopper,
    photos: [
      { title: 'Holi Celebration', image: holiImage },
      { title: 'Dashain & Tihar Stay', image: festivalImage },
      { title: 'Festival Meals', image: messImage }
    ]
  },
  student: {
    title: 'Student Images',
    description: 'Daily community, room life, and shared hostel routines.',
    cover: studentImage,
    accent: 'from-emerald-500/65 via-sky-400/30 to-slate-950/90',
    icon: UsersRound,
    photos: [
      { title: 'Student Community', image: studentImage },
      { title: 'Shared Living', image: studentImageTwo },
      { title: 'Four Sharing Room', image: roomFourImage },
      { title: 'Three Sharing Room', image: roomThreeImage }
    ]
  }
} satisfies Record<
  GalleryKey,
  {
    title: string;
    description: string;
    cover: string;
    accent: string;
    icon: typeof PartyPopper;
    photos: { title: string; image: string }[];
  }
>;

export default function EventsSection() {
  const [activeGallery, setActiveGallery] = useState<GalleryKey | null>(null);
  const active = activeGallery ? galleries[activeGallery] : null;
  const galleryGridClass = activeGallery === 'student' ? 'lg:grid-cols-4' : 'lg:grid-cols-3';

  return (
    <section id="events" className="scroll-mt-16 bg-gradient-to-b from-white via-emerald-50/30 to-white pb-14 pt-8 sm:pb-16 sm:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto mb-7 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-emerald-700">Community</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">Festival and student life in photos</h2>
          <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">Ramro Hostel keeps students supported during ordinary weeks and major Nepali festivals.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {(Object.keys(galleries) as GalleryKey[]).map((key, index) => {
            const gallery = galleries[key];
            const Icon = gallery.icon;
            const isActive = activeGallery === key;

            return (
              <motion.button
                key={gallery.title}
                type="button"
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                onClick={() => setActiveGallery((current) => (current === key ? null : key))}
                aria-pressed={isActive}
                className={`group relative h-64 overflow-hidden rounded-lg bg-slate-950 text-left shadow-lg outline-none transition-shadow duration-500 sm:h-72 focus-visible:ring-4 focus-visible:ring-emerald-300 ${
                  isActive ? 'ring-4 ring-emerald-500/25 shadow-2xl' : 'hover:shadow-2xl'
                }`}
              >
                <img src={gallery.cover} alt={gallery.title} className="h-full w-full object-cover object-center opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                <div className={`absolute inset-0 bg-gradient-to-t ${gallery.accent}`} />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 text-amber-100 backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur transition duration-300 ${isActive ? 'translate-x-1 bg-white/25' : ''}`}>
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{gallery.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate-100 sm:text-base">{gallery.description}</p>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
                    <Images className="h-4 w-4" />
                    {gallery.photos.length} photos
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={activeGallery}
              initial={{ opacity: 0, y: 28, scale: 0.98, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -18, scale: 0.98, filter: 'blur(8px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 overflow-hidden"
            >
              <div className={`grid gap-4 sm:grid-cols-2 ${galleryGridClass}`}>
                {active.photos.map((photo, index) => (
                  <motion.figure
                    key={`${activeGallery}-${photo.title}`}
                    initial={{ opacity: 0, y: 22, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.42, delay: index * 0.07 }}
                    className="group relative h-56 overflow-hidden rounded-lg bg-slate-950 shadow-md sm:h-60"
                  >
                    <img src={photo.image} alt={photo.title} className="h-full w-full object-cover object-center opacity-95 transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-base font-bold leading-tight text-white sm:text-lg">{photo.title}</p>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
