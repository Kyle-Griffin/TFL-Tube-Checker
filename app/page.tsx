import TubeStatusList from "./tubeStatusList";
import TubeStopSearch from "./tubeStopSearch";
import { ChangeEventHandler } from "react";

/* Type inference for Tube Line Status */
type TubeLineTypes = {
  id: string;
  name: string;
  lineStatuses: [{ statusSeverityDescription: string }];
};

type StatusProps = {
  tubeLineData: TubeLineTypes[];
};

async function getTubeData() {
  const res = await fetch("https://api.tfl.gov.uk/line/mode/tube/status");

  return res.json();
}

export default async function Home() {
  const tubeLineData: TubeLineTypes[] = await getTubeData();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl text-center mb-12">When is your next train?</h1>

      <div className="flex items-center justify-center flex-col w-full mb-16">
        <TubeStopSearch />
      </div>

      <div className="flex items-center justify-center flex-col w-full p-4 bg-white rounded-lg">
        <h2 className="text-black text-2xl mb-4">Current Tube Status</h2>
        <TubeStatusList tubeLineData={tubeLineData} />
      </div>
    </main>
  );
}
