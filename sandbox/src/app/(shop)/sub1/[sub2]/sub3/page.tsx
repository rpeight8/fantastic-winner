export default function Page({
  params: { sub2 },
}: {
  params: { sub2: string };
}) {
  console.log(sub2);
  return <div>My Sub: {sub2}</div>;
}
