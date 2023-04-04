import "./globals.css";

export async function generateMetadata() {
  return { title: "Next.js", description: "Generated by create next app" };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Root Layout</h1>
        {children}
      </body>
    </html>
  );
}
