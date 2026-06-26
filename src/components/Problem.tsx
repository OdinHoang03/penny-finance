import { ScrollReveal, WordsPullUpMultiStyle } from "./animations";

export default function Problem() {
  return (
    <section className="bg-black px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-20 text-center md:rounded-[2rem] md:px-12 md:py-28">
        <p className="text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs">
          Sự thật
        </p>

        <h2 className="mx-auto mt-8 max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Bạn nhận tiền đầu tuần,", className: "font-normal" },
              {
                text: "đến thứ Năm đã không biết còn bao nhiêu.",
                className: "font-serif italic",
              },
              {
                text: "Cảm giác mất kiểm soát mỗi khi nhìn vào ví.",
                className: "font-normal",
              },
            ]}
          />
        </h2>

        <ScrollReveal
          className="mx-auto mt-12 max-w-2xl text-xs leading-relaxed text-[#DEDBC8] sm:text-sm md:text-base"
          text="Và cuối tháng lại phải nhờ bố mẹ thêm tiền. Penny sinh ra để chấm dứt vòng lặp đó — mỗi ngày chỉ 30 giây, bạn luôn biết chính xác tiền của mình đang đi đâu và còn lại bao nhiêu."
        />
      </div>
    </section>
  );
}
