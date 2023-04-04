import "../globals.css";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Checkout Root Layout</h1>
      {children}
    </div>
  );
}
