export default function Page({
  params,
}: {
  params: { sub2: string; sub4: string[] };
}) {
  console.log(params);
  if (params.sub2 === "heheSUB2") throw new Error("Error");
  return (
    <div>
      My sub2: {params.sub2} <br /> My sub4: {params.sub4}
    </div>
  );
}
