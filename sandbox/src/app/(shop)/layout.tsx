import "../globals.css";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>(shop) Layout</h1>
      {children}
    </div>
  );
}
