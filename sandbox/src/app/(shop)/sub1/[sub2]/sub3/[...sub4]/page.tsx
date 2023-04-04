export default function Page({
  params,
}: {
  params: { sub2: string; sub4: string[] };
}) {
  console.log(params);
  return (
    <div>
      My sub2: {params.sub2} <br /> My sub4: {params.sub4}
    </div>
  );
}
