export default function Page({
  params: { country, cities },
}: {
  params: { country: string; cities: string[] | undefined };
}) {
  console.log(country);
  console.log(cities);

  return (
    <div>
      My Counrty: {country} <br /> My cities: {cities}
    </div>
  );
}
