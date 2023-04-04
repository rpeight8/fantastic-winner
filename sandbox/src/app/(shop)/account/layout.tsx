export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: "sky-blue" }}>
      <h2>account-layout</h2>
      {children}
    </div>
  );
}
