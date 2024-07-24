type tubeLineTypes = {
  id: string;
  name: string;
  lineStatuses: [{ statusSeverityDescription: string; reason?: string }];
};

type tubeStatusListProps = {
  tubeLineData: tubeLineTypes[];
};

const TubeStatusList: React.FC<tubeStatusListProps> = ({ tubeLineData }) => {
  return (
    <>
      {tubeLineData.map((tubeLine: tubeLineTypes) => {
        return (
          <div
            key={tubeLine.id}
            className="tubeLine w-full flex-col flex justify-between"
          >
            <div
              className={`tubeLine-item tubeLine-item--${tubeLine.id} py-1 px-4 flex justify-between`}
            >
              <span>{tubeLine.name}</span>
              <span
                className={
                  tubeLine.lineStatuses[0].statusSeverityDescription !==
                  "Good Service"
                    ? "font-bold"
                    : null
                }
              >
                {tubeLine.lineStatuses[0].statusSeverityDescription}
              </span>
            </div>
            {tubeLine.lineStatuses[0].reason ? (
              <div className="tubeLine-reason px-4 py-3 mx-4 mb-2 rounded-b-sm bg-slate-300 text-black">
                <p>{tubeLine.lineStatuses[0].reason}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default TubeStatusList;
