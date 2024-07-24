import TubeStatusList from "./tubeStatusList";
import TubeStopSearch from "./tubeStopSearch";
import Header from "./Header";
import { ChangeEventHandler } from "react";

/* Type inference for Tube Line Status */
type TubeLineTypes = {
  id: string;
  name: string;
  lineStatuses: [{ statusSeverityDescription: string; reason?: string }];
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
    <div className="bg-slate-200 min-h-dvh">
      <Header />
      <main className="grid md:grid-cols-2 gap-4 p-4 md:mt-4">
        <div className="bg-white p-4 rounded-lg">
          <h1 className="text-3xl mb-4">When is your next train?</h1>
          <p className="mb-1">
            Select your tube station from the dropdown to see upcoming trains
            for that station:
          </p>
          <TubeStopSearch />
        </div>

        <div className="flex items-center justify-center flex-col p-4 bg-white rounded-lg">
          <h2 className="text-black text-2xl mb-4">Current Tube Status</h2>
          <TubeStatusList tubeLineData={tubeLineData} />
        </div>
      </main>
    </div>
  );
}
