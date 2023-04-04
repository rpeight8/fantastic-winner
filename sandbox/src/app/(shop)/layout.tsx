export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <h2>shop-layout</h2>
      {children}
    </div>
  );
}
