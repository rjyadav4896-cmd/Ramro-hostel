import { motion } from 'motion/react';
import { Facebook, Instagram, Mail, MapPin, Phone, UserRound } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    { icon: UserRound, title: 'Owner', content: 'Shyam Bahadur Karki', action: null },
    { icon: Phone, title: 'WhatsApp / Phone', content: '+977 9706666497', action: 'tel:+9779706666497' },
    { icon: Mail, title: 'Email', content: 'yadavniraj001122@gmail.com', action: 'mailto:yadavniraj001122@gmail.com' },
    { icon: MapPin, title: 'Address', content: 'Narephat, Kathmandu, Nepal', action: 'https://maps.app.goo.gl/a716n7ezm3S7fvxF7' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Contact</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-slate-950">Talk to Ramro Hostel</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Reach out directly for room details, fee confirmation, and visit timing.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-slate-950 p-8 text-white">
            <h3 className="text-3xl font-bold">Ramro Hostel</h3>
            <p className="mt-3 text-slate-300">Ramro Hostel· Narephat, Kathmandu</p>

            <div className="mt-8 space-y-5">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <>
                    <div className="text-sm text-slate-400">{info.title}</div>
                    <div className="font-bold text-white">{info.content}</div>
                  </>
                );
                return (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-6 w-6 text-amber-300" />
                    </div>
                    {info.action ? (
                      <a href={info.action} target={info.action.startsWith('http') ? '_blank' : undefined} rel={info.action.startsWith('http') ? 'noreferrer' : undefined} className="hover:text-amber-200">
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.facebook.com/share/p/1Cvgba2zXm/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-bold text-slate-950 hover:bg-amber-100">
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/reel/DXk7Cu2DJBQ/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 font-bold text-white hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
            <iframe
              title="Ramro Hostel Location"
              src="https://www.google.com/maps?q=Narephat%20Kathmandu%20Nepal&output=embed"
              width="100%"
              height="100%"
              className="min-h-[520px]"
              style={{ border: 0 }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
