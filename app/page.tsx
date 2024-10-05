import { Experience } from "@/components/experience";
import { Overview } from "@/components/overview";
import { TimeLine } from "@/types";
import { envConfig } from '@/config';

export default async function Home() {
  const res = await fetch(envConfig.TIMELINE.URL);
  const timeLine: TimeLine = await res.json();
  return (
    <>
      <Overview name={timeLine.name} />
      <Experience timeLine={timeLine} />
    </>
  );
}
