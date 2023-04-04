"use client";

import { useRouter } from "next/navigation";

export default function Page({
  params: { shop },
}: {
  params: { shop: string[] };
}) {
  console.log(shop);
  const router = useRouter();
  return (
    <div>
      My Shop: {shop}
      <br />{" "}
      <button type="button" onClick={() => router.push(`/items/1/2/3`)}>
        To items
      </button>
    </div>
  );
}
