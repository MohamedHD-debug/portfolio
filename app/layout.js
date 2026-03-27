import "./globals.css";

export const metadata = {
  title: "Mohamed Halloud — Data Science & AI Student",
  description:
    "Portfolio of Mohamed Halloud, 3rd-year SDBDIA student at ENSA Agadir. Seeking a summer internship in Data Science, Machine Learning, and AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
