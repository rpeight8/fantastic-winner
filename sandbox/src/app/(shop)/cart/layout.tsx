export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: "sky-blue" }}>
      <h2>cart-layout</h2>
      {children}
    </div>
  );
}
