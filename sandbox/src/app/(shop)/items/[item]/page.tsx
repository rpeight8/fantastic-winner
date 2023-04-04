export default function Page({
  params: { item },
}: {
  params: { item: string };
}) {
  return <div>My Post: {item}</div>;
}
