import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "./animations";

// Coins falling onto a calculator — money + calculation, fits "biết tiền đi đâu".
// Royalty-free stock (Mixkit, free license, no attribution required).
const VIDEO_SRC = "https://assets.mixkit.co/videos/47014/47014-720.mp4";

const NAV = ["Tính năng", "Cách dùng", "Bảng giá", "Về Penny", "Liên hệ"];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="h-screen w-full p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar — black pill hanging from top edge */}
        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8">
          <ul className="flex items-center gap-3 text-[10px] sm:gap-6 sm:text-xs md:gap-12 md:text-sm lg:gap-14">
            {NAV.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="whitespace-nowrap transition-colors"
                  style={{ color: "rgba(225,224,204,0.8)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#E1E0CC";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(225,224,204,0.8)";
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero content — bottom aligned 12-col grid */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-12 items-end gap-4 p-5 sm:p-8 md:p-10">
          <div className="col-span-12 md:col-span-8">
            <WordsPullUp
              text="Penny"
              showAsterisk
              className="block font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] text-[#E1E0CC] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
            />
          </div>

          <div className="col-span-12 flex flex-col gap-6 md:col-span-4 md:pb-4">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base"
            >
              Penny giúp bạn biết tiền đi đâu mỗi tuần — chỉ 30 giây mỗi ngày.
              Không bảng tính rối rắm, không cần là dân kế toán. Mở app ra là
              thấy rõ.
            </motion.p>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              className="group flex items-center gap-2 self-start rounded-full bg-primary py-1.5 pl-6 pr-1.5 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
            >
              Tải app miễn phí
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                <ArrowRight className="h-4 w-4 text-primary" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
