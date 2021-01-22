import React from "react";
import QuestionContext from "../QuestionContext";
import Flags from "./Flags";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  const { activeQuestionId } = React.useContext(QuestionContext);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setData([
      { username: "Pawan", country: "NP", points: "1234" },
      { username: "Prabhat", country: "NP", points: "5949" },
      { username: "Usha", country: "US", points: "2323" },
      { username: "Rita", country: "IN", points: "0993" },
      { username: "Hari", country: "IO", points: "1232" },
      { username: "Masbdhas", country: "IO", points: "1232" },
      { username: "Megan", country: "KY", points: "1232" },
      { username: "Dward", country: "AF", points: "1232" },
      { username: "Mashy", country: "AR", points: "1232" },
      { username: "Lorry", country: "AM", points: "1232" },
      { username: "Evan", country: "NE", points: "1232" },
      { username: "Helsinki", country: "JP", points: "1232" },
      { username: "Tokyo", country: "MO", points: "1232" },
      { username: "Dora", country: "NA", points: "1232" },
      { username: "Dora", country: "SI", points: "1232" },
      { username: "Dora", country: "SI", points: "1232" },
      { username: "Dora", country: "SI", points: "1232" },
      { username: "Dora", country: "SI", points: "1232" },
      { username: "Dora", country: "SI", points: "1232" },
    ]);
  }, [activeQuestionId]);

  return (
    data && (
      <>
        <div className="grid-leaderboard border m-4 rounded shadow-lg overflow-y-auto">
          <div className="grid-title text-gray-500 "></div>
          <div className="grid-title text-gray-500 ">Username</div>
          <div className="grid-title text-gray-500 ">Points</div>

          {data.map((challenger, i) => (
            <React.Fragment key={i}>
              <Flags country={challenger.country} />
              <div>{challenger.username}</div>
              <div>{challenger.points}</div>
            </React.Fragment>
          ))}
        </div>
      </>
    )
  );
};

export default LeaderBoard;
