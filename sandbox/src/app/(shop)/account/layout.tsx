import "../../globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AccountRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Account Root Layout</h1>
      {children}
    </div>
  );
}
