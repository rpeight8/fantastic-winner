export default function Page({
  params,
}: {
  params: { sub3: string; sub4: string[] };
}) {
  console.log(params);
  return (
    <div>
      My sub3: {params.sub2} <br /> My sub4: {params.sub4}
    </div>
  );
}
