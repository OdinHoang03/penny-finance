import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Bell, Check, PieChart, Wallet } from "lucide-react";
import { WordsPullUpMultiStyle } from "./animations";

// Organizing cash into budgets — fits "Tiền của bạn — rõ ràng từng đồng".
// Royalty-free stock (Mixkit, free license, no attribution required).
const FEATURE_VIDEO = "https://assets.mixkit.co/videos/23524/23524-720.mp4";

const CARD_EASE = [0.22, 1, 0.36, 1] as const;

const CARDS = [
  {
    num: "01",
    title: "Báo cáo tuần.",
    Icon: PieChart,
    items: [
      "Biết tuần này tiêu nhiều hơn hay ít hơn tuần trước",
      "Tự động phân loại: ăn uống, đi lại, mua sắm",
      "Cảnh báo khi sắp vượt ngân sách",
      "Xuất báo cáo chỉ trong 1 chạm",
    ],
  },
  {
    num: "02",
    title: "3 bước là xong.",
    Icon: Wallet,
    items: [
      "Tải app & tạo tài khoản",
      "Nhập khoản chi đầu tiên",
      "Xem báo cáo tuần ngay lập tức",
    ],
  },
  {
    num: "03",
    title: "Giữ bạn đúng hướng.",
    Icon: Bell,
    items: [
      "Nhắc nhập chi tiêu mỗi tối",
      "Đặt mục tiêu tiết kiệm theo tuần",
      "Đồng bộ trên mọi thiết bị",
    ],
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-screen bg-black px-4 py-24 md:px-6 md:py-32">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            className="!justify-start text-left"
            segments={[
              {
                text: "Nhìn một cái là biết đã tiêu bao nhiêu.",
                className: "text-primary",
              },
              {
                text: "Đơn giản đến mức bạn sẽ thật sự dùng mỗi ngày.",
                className: "text-gray-500",
              },
            ]}
          />
        </h2>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4"
        >
          {/* Card 1 — video */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0, ease: CARD_EASE }}
            className="relative min-h-[260px] overflow-hidden rounded-xl"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={FEATURE_VIDEO}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p
              className="absolute bottom-5 left-5 right-5 text-lg"
              style={{ color: "#E1E0CC" }}
            >
              Tiền của bạn — rõ ràng từng đồng.
            </p>
          </motion.div>

          {/* Cards 2-4 */}
          {CARDS.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: (i + 1) * 0.15,
                ease: CARD_EASE,
              }}
              className="flex flex-col rounded-xl bg-[#212121] p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/40 sm:h-12 sm:w-12">
                <card.Icon className="h-5 w-5 text-primary" />
              </div>

              <h3 className="mt-5 text-lg text-primary">
                {card.title}{" "}
                <span className="text-gray-500">{card.num}</span>
              </h3>

              <ul className="mt-4 flex flex-1 flex-col gap-3">
                {card.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-xs text-gray-400 sm:text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1 text-xs text-primary sm:text-sm"
              >
                Tìm hiểu thêm
                <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 flex flex-col items-center gap-5 text-center">
          <p
            className="max-w-xl text-2xl text-primary sm:text-3xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Bắt đầu kiểm soát tiền của bạn — ngay tuần này.
          </p>
          <button className="group flex items-center gap-2 rounded-full bg-primary py-1.5 pl-6 pr-1.5 font-medium text-black transition-all hover:gap-3">
            Đăng ký miễn phí
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
              <ArrowRight className="h-4 w-4 text-primary" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
