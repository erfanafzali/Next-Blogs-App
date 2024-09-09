import Header from "@/components/Header";
import vazirFont from "@/constants/localFonts";
import "@/styles/globals.css";

// meta tags for seo
export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "وب اپ مدیریت بلاگ ها و نظرات کاربران",
};

// set dir and lng
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans  min-h-screen`}>
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html> 
  );
}
