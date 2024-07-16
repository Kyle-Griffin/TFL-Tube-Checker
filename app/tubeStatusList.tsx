type tubeLineTypes = {
  id: string;
  name: string;
  lineStatuses: [{ statusSeverityDescription: string }];
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
            className={`tubeLine-${tubeLine.id} w-full py-1 px-4 font-bold flex justify-between`}
          >
            <span>{tubeLine.name}</span>
            <span>{tubeLine.lineStatuses[0].statusSeverityDescription}</span>
          </div>
        );
      })}
    </>
  );
};

export default TubeStatusList;
