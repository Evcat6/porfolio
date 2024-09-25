import { Experience } from "@/components/experience";
import { Overview } from "@/components/overview";
import { TimeLine } from "@/types/time-line.type";

export default async function Home() {
  const res = await fetch(process.env.TIMELINE_URL as string);
  const timeLine: TimeLine = await res.json();
  return (
    <>
      <Overview name={timeLine.name} />
      <Experience timeLine={timeLine} />
    </>
  );
}
