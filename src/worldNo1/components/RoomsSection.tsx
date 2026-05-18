import { motion } from 'motion/react';
import room2 from '../../assets/hstl_001/room-2sharing.jpg';
import room3 from '../../assets/hstl_001/room-3sharing.png';
import room4 from '../../assets/hstl_001/room-4sharing.jpg';

export default function RoomsSection() {
  const rooms = [
    {
      type: '2 Sharing',
      image: room2,
      price: 'Rs. 13,000',
      note: 'More personal space with a shared wardrobe setup.',
      facilities: ['Beds and mattress', 'Shared wardrobe', 'Room light and fan', 'Bring bedsheet, pillow and blanket']
    },
    {
      type: '3 Sharing',
      image: room3,
      price: 'Rs. 12,000',
      note: 'A balanced option for students who want comfort and community.',
      facilities: ['Three-bed layout', 'Study-friendly room', 'Shared storage', 'Bring pillow cover and blanket']
    },
    {
      type: '4 Sharing',
      image: room4,
      price: 'Rs. 11,000',
      note: 'Budget-friendly sharing option for students.',
      facilities: ['Shared room setup', 'Fan and light', 'Basic storage', 'Student keeps room clean']
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold text-slate-950">Room Options</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <motion.div
              key={room.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/70"
            >
              <div className="h-56 overflow-hidden">
                <img src={room.image} alt={`${room.type} room at Ramro Hostel`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">{room.type}</h3>
                    <p className="mt-1 text-sm text-slate-600">{room.note}</p>
                  </div>
                  <div className="rounded-xl bg-amber-100 px-3 py-2 text-right">
                    <div className="text-lg font-black text-slate-950">{room.price}</div>
                    <div className="text-xs text-slate-600">per month</div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  {room.facilities.map((facility) => (
                    <div key={facility} className="flex items-center text-sm text-slate-700">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      {facility}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
