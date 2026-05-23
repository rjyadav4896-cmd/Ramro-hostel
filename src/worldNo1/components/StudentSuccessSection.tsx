import { useCallback, useEffect, useRef, useState } from "react";
import studentLifeImage from "../../assets/hstl_001/student-life-hd.jpg";
import studentTerraceImage from "../../assets/hstl_001/student-life-2-hd.jpg";

const testimonials = [
  {
    photo: studentLifeImage,
    photoPosition: "18% 58%",
    name: "Arjun Sharma",
    college: "IIT Delhi \u00B7 CSE",
    rank: "AIR 47",
    exam: "JEE Advanced 2025",
    quote:
      "The supportive environment and dedicated study spaces at Ramro Hostel helped me stay focused on my goals.",
  },
  {
    photo: studentTerraceImage,
    photoPosition: "40% 45%",
    name: "Priya Patel",
    college: "AIIMS Delhi \u00B7 MBBS",
    rank: "AIR 124",
    exam: "NEET 2025",
    quote:
      "The peaceful atmosphere and nutritious meals gave me the energy I needed during my preparation.",
  },
  {
    photo: studentLifeImage,
    photoPosition: "52% 54%",
    name: "Rahul Kumar",
    college: "IIM Bangalore \u00B7 MBA",
    rank: "99.89 Percentile",
    exam: "CAT 2024",
    quote:
      "Living here connected me with like-minded aspirants. The group study sessions were invaluable.",
  },
];

export default function StudentSuccessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const transitionTimer = useRef<number | null>(null);
  const activeTestimonial = testimonials[activeIndex];

  const showTestimonial = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex) return;

      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current);
      }

      setIsVisible(false);
      transitionTimer.current = window.setTimeout(() => {
        setActiveIndex(nextIndex);
        window.requestAnimationFrame(() => setIsVisible(true));
      }, 180);
    },
    [activeIndex],
  );

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      showTestimonial((activeIndex + 1) % testimonials.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, showTestimonial]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  return (
    <section
      id="success"
      className="scroll-mt-16 bg-slate-50 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-sm font-bold uppercase tracking-wide text-emerald-700">
          Topper Stories
        </h2>
        <div
          className="relative mx-auto min-h-[188px] max-w-[888px] rounded-2xl bg-white px-6 py-6 shadow-xl ring-1 ring-slate-200 sm:h-[188px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex flex-col gap-4 pr-2 transition-all duration-300 ease-out sm:flex-row sm:items-start sm:gap-5 sm:pr-16 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <div className="h-16 w-16 flex-none overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
              <img
                src={activeTestimonial.photo}
                alt={`${activeTestimonial.name} testimonial`}
                style={{ objectPosition: activeTestimonial.photoPosition }}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <blockquote className="max-w-[690px] text-base font-medium italic leading-7 text-slate-700">
                "{activeTestimonial.quote}"
              </blockquote>

              <div className="mt-5 text-base font-bold leading-6 text-slate-950">
                {activeTestimonial.name}
              </div>

              <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm font-semibold leading-5 text-slate-600">
                <span>{activeTestimonial.college}</span>
                <span aria-hidden="true">{"\u00B7"}</span>
                <span className="text-emerald-700">
                  {activeTestimonial.rank}
                </span>
                <span aria-hidden="true">{"\u00B7"}</span>
                <span>{activeTestimonial.exam}</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => showTestimonial(index)}
                  aria-label={`Show ${testimonial.name}'s testimonial`}
                  aria-current={isActive}
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    isActive ? "bg-emerald-700" : "bg-slate-300"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
