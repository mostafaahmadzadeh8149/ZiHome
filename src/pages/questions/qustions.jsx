import { Link } from "react-router-dom";

function FAQ() {
  const questions = [
    {
      id: 1,
      title: "چگونه سفارش خود را ثبت کنم؟",
      desc: "پس از انتخاب محصول، آن را به سبد خرید اضافه کرده و مراحل ثبت سفارش را تکمیل کنید.",
    },
    {
      id: 2,
      title: "آیا امکان بازگشت کالا وجود دارد؟",
      desc: "در نسخه واقعی فروشگاه امکان مرجوعی طبق قوانین فروشگاه وجود خواهد داشت.",
    },
    {
      id: 3,
      title: "روش‌های پرداخت چگونه است؟",
      desc: "در این پروژه از API فیک استفاده شده و پرداخت واقعی انجام نمی‌شود.",
    },
    {
      id: 4,
      title: "چگونه وضعیت سفارش را پیگیری کنم؟",
      desc: "در نسخه نهایی امکان مشاهده وضعیت سفارش از طریق حساب کاربری فراهم خواهد شد.",
    },
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-zinc-50 flex justify-center px-5 py-12"
    >
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 border border-zinc-200">
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#DC2655]/10 flex items-center justify-center mb-4">
            <span className="text-4xl">❓</span>
          </div>

          <h1 className="text-3xl font-black text-zinc-900">سوالات متداول</h1>

          <p className="text-zinc-500 mt-3 leading-7">
            پاسخ رایج‌ترین سوالات کاربران درباره فروشگاه
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item) => (
            <div
              key={item.id}
              className="
                border border-zinc-200
                rounded-2xl
                p-5
                bg-zinc-50
                hover:border-[#DC2655]
                transition-all
              "
            >
              <h3 className="font-bold text-zinc-800 mb-3">{item.title}</h3>

              <p className="text-sm text-zinc-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#DC2655]/5 border border-[#DC2655]/20 rounded-2xl p-5">
          <p className="text-sm text-zinc-700 leading-7">
            به دلیل استفاده از API فیک در این پروژه تمرینی، امکاناتی مانند ثبت
            سفارش واقعی، پرداخت آنلاین و رهگیری سفارش به صورت نمایشی پیاده‌سازی
            شده‌اند.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="
              h-12
              px-6
              rounded-2xl
              bg-[#DC2655]
              text-white
              font-bold
              flex
              items-center
              justify-center
              hover:bg-[#c81f4b]
              transition
            "
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
