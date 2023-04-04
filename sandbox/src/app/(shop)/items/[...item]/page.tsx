import Link from "next/link";

export default function Page({
  params: { item },
}: {
  params: { item: string };
}) {
  console.log(item);
  const sub2 = "heheSUB2";
  return (
    <div>
      My Post: {item} <br />{" "}
      <Link href={`/sub1/${sub2}/sub3/${item}`}>To SUB</Link>
    </div>
  );
}
