import { navLinks, contactUs } from "@/lib/helpers/displayData";
import MovingMessage from "@/components/MovingMessage/MovingMessage";
import { notFound } from "next/navigation";
import SideEnquire from "@/components/Layout/FrontendView/Stickers/SideEnquire";
import ScrollToTop from "@/components/Layout/FrontendView/Stickers/ScrollToTop";
import Navbar from "@/components/Layout/FrontendView/Navbar/Navbar";
import FooterTop from "@/components/Layout/FrontendView/Footer/FooterTop";
import FooterBottom from "@/components/Layout/FrontendView/Footer/FooterBottom";

let year = new Date().getFullYear();
let nextYear = year + 1;
let admissionYear = year + "-" + nextYear.toString().slice(2);

export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  navLinks.gallery.dropDown = [
    { name: "2023-24", link: "/gallery/2023-24" },
    { name: "2022-23", link: "/gallery/2022-23" },
  ];

  return (
    <div className="bg-white">
      <Navbar contactUs={contactUs} navLinks={navLinks} />
      <MovingMessage
        message="&ldquo;Admissions Open 2024-25&rdquo;"
        classes="text-secondary-red1 bg-[#F8F4E1]"
      />
      <main>{children}</main>
      <SideEnquire admissionYear={admissionYear} />
      <ScrollToTop />
      <footer id="footer">
        <FooterTop />
        <FooterBottom />
      </footer>
    </div>
  );
}
