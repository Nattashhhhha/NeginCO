import { Factory, Casting, Furnace, Completion , stt , fur , lightMill , cast } from "../assets";

export const navLinks = [
  {
    id: "contact",
    title: "ارتباط با ما",
  },

  {
    id: "factories",
    title: "کارخانه ها",
  },
  {
    id: "labs",
    title: "آزمایشگاه ها",
  },
  {
    id: "equipment",
    title: "تجهیزات",
  },
  {
    id: "about",
    title: "درباره ی ما",
  },
];

const services = [
  {
    title: "کارخانجات فولادسازی",
    icon: Factory,
  },
  {
    title: "نورد مقاطع سبک",
    icon: Casting,
  },
  {
    title: "عملیات حرارتی",
    icon: Furnace,
  },
  {
    title: "تکمیل کاری",
    icon: Completion,
  },
];



const Factories = [
  {
    title: "کارخانه فولادسازی",
    company_name: "NEGIN STEEL COMPANY",
    icon: stt,
    iconBg: "#383E56",
    date: "",
    points: [
      "کارخانه‌های فولاد یکی از اقسام اصلی صنعت فلزات هستند",
      "فولاد به عنوان یک ماده ساختمانی اساسی، در ساخت و سازهای مختلف مانند ساختمان‌ها، پل‌ها، خودروها، و ماشین‌آلات مورد استفاده قرار می‌گیرد        ",
      "کارخانه‌های فولاد به دلیل اندازه بزرگ و نیاز به نیروی انسانی در حجم بالا، ایجاد اشتغال زیادی در جامعه محلی و توسعه اقتصادی را تسهیل می‌کنند        ",
      "تلاش برای بهره‌گیری از فناوری‌های پایدار و کاهش اثرات منفی بر محیط زیست می‌تواند کارخانه‌های فولاد را در جهت توسعه پایدار هدایت کند        ",
    ],
  },
  {
    title: "کارخانه نورد سبک",
    company_name: "(Light Section Mill)",
    icon: lightMill,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "نورد سبک قابلیت تولید محصولات چند منظوره از جمله میلگرد، نبشی، و تیرآهن را دارد. این امکان به کارخانه این امکان را می‌دهد که محصولات متنوعی با استفاده از یک تجهیزات را تولید کند        ",
      "نورد سبک با تنظیمات دقیق و استفاده از تکنولوژی‌های پیشرفته، به کاهش هدر رفت مواد می‌انجامد و از بهره‌وری بهتری در تولید بهره‌مند می‌شود        ",
      "نورد سبک معمولاً سرعت بالایی در تولید دارد که این امر منجر به افزایش حجم تولید در یک دوره زمانی مشخص و کاهش هزینه‌های تولید می‌شود",
      "مهمترین عوامل در تولید محصولات فولادی، درجه حرارت است نورد سبک با تجهیز به سیستم‌های کنترل دقیق درجه حرارت، به تولید محصولات با ویژگی‌های مشخص کمک می‌کند",
    ],
  },
  {
    title: "کارگاه ذوب",
    company_name:
      "   (VOD)ویک واحد(VD) یک واحد ،(LF)استفاده از یک کورة قوس الکتریکی، یک کوره پاتیلی",
    icon: fur,
    iconBg: "#383E56",
    date: "",
    points: [
      "کارگاه ذوب مسئولیت تولید آهن مایع (فولاد) از مواد خام مثل خاکسترو سایر فلزات را دارد این فرآیند اولیه اساسی برای تولید فولاد است",
      "کارگاه ذوب امکان تولید فولاد با ترکیبات مختلف را فراهم می‌کند که این امکان را به کارخانه می‌دهد تا محصولات با خصوصیات مختلف را تولید کند",
      "استفاده از تجهیزات مدرن و به‌روز در کارگاه ذوب، منجر به افزایش بهره‌وری و کاهش هدر رفت منابع می‌شود        ",
      "کارگاه ذوب مجهز به تجهیزات پیشرفته برای کنترل دقیق فرآیند ذوب فلزات می‌باشد. این کنترل دقیق بهبود کیفیت فلزات تولید شده را تضمین می‌کند        ",
    ],
  },
  {
    title: "کارگاه ریخته گری",
    company_name: "(continuous casting) ماشین ریخته گری مداوم",
    icon: cast,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "با ابعاد 150*150- 125*125 *100*100 میلیمتر",
      "افزایش بهره‌وری و کاهش هدر رفت مواد",
      " استفاده از ماشین ریخته‌گری مداوم باعث کاهش نیاز به پردازشهای متقابل برای اصلاح شکل و ابعاد می شود که این مزیت به کاهش هزینه‌ها و زمان تولید کمک می‌کن",
      " ماشین ریخته‌گری مداوم به دلیل اتوماسیون بالا و کنترل دقیق پارامترهای بهود کیفیت نهایی محصولات را فراهم می‌کند. این امر شامل کاهش ناخالصی‌ها، تسطیح بهتر سطح، و کنترل دقیق ابعاد می‌شود",
    ],
  },
];
export { services , Factories };
