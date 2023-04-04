export default function Page({
  params: { item },
}: {
  params: { item: string };
}) {
  console.log(item);
  return <div>My Post: {item}</div>;
}
