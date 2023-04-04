export default function Page({
  params: { shop },
}: {
  params: { shop: string[] };
}) {
  console.log(shop);
  return <div>My Shop: {shop}</div>;
}
