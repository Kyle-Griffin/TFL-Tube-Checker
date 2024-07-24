"use client";

import { TubeStopData } from "../data/naptanTubeStops";
import { useState } from "react";

/* Type inference for Tube Stops */
type TubeStopTypes = {
  naptanID: string;
  commonName: string;
};

function TubeStopSearch() {
  const [tubeStop, setTubeStop] = useState<string>();

  async function onTubeStopChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const select = event.target;
    setTubeStop(select.children[select.selectedIndex].commonName);

    await fetch(`https://api.tfl.gov.uk/Line/piccadilly/Arrivals/${tubeStop}`)
      .then((data: any) => data.json())
      .then((data: any) => {
        console.log(data);
      });

    /* todo: type infer data, output train times for selected station, include line in naptanTubeStops data */
  }

  return (
    <div className="pt-2 relative text-gray-600">
      <select
        onChange={onTubeStopChange}
        className="p-3 rounded-md border-black border-2"
        name="tube-stops"
        value={tubeStop || ""}
        id="tube-stops"
      >
        <option key="default" disabled>
          Select a tube stop
        </option>
        {TubeStopData.map((tubeStopItem) => (
          <option
            id={tubeStopItem.naptanID}
            key={tubeStopItem.naptanID}
            value={tubeStopItem.commonName}
          >
            {tubeStopItem.commonName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TubeStopSearch;
