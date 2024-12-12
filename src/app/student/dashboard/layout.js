import NavbarStudent from "@/components/NavbarStudent";

export const metadata = {
  title: "Sage LMS",
  description: "-",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarStudent/>
        {children}
      </body>
    </html>
  );
}
