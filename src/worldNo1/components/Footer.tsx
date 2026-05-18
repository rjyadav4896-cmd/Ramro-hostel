import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Food', href: '#food' },
    { name: 'Nearby', href: '#nearby' },
    { name: 'Contact', href: '#contact' }
  ];

  const rules = ['Gate in time: 9:00 PM', 'Gate out time: 5:00 PM', 'Visitors: parents only', 'Electric kettle allowed'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">R</span>
              </div>
              <span className="ml-2 font-black text-xl text-white">Ramro Hostel</span>
            </div>
            <p className="text-slate-400 mb-4">Ramro Hostel · Student living in Narephat, Kathmandu.</p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/p/1Cvgba2zXm/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 bg-white/10 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/reel/DXk7Cu2DJBQ/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => scrollToSection(link.href)} className="text-slate-400 hover:text-amber-300 transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Hostel Rules</h4>
            <ul className="space-y-2 text-slate-400">
              {rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-2">
                <Phone className="mt-1 h-4 w-4 text-amber-300" />
                <span>+977 9706666497</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-1 h-4 w-4 text-amber-300" />
                <span>Narephat, Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ramro Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
