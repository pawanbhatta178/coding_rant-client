import React from "react";
import QuestionContext from "../QuestionContext";
import Flags from "./Flags";
import Icon from "./Icon";
import "./LeaderBoard.css";
import UserContext from "../UserContext";

const LeaderBoard = () => {
  const { activeQuestionId } = React.useContext(QuestionContext);
  const [data, setData] = React.useState(null);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    const rankingData = [
      {
        rank: "1",
        prevRank: "2",
        username: "Pawan",
        country: "NP",
        points: "1234",
      },
      {
        rank: "2",
        prevRank: "3",
        username: "Prabhat",
        country: "NP",
        points: "5949",
      },
      {
        rank: "3",
        prevRank: "4",
        username: "Usha",
        country: "US",
        points: "2323",
      },
      {
        rank: "4",
        prevRank: "4",
        username: "Rita",
        country: "IN",
        points: "0993",
      },
      {
        rank: "5",
        prevRank: "2",
        username: "Hari",
        country: "IO",
        points: "1232",
      },
      {
        rank: "6",
        prevRank: "6",
        username: "Zair",
        country: "IO",
        points: "1232",
      },
      {
        rank: "7",
        prevRank: "1",
        username: "Megan",
        country: "KY",
        points: "1232",
      },
      {
        rank: "8",
        prevRank: "4",
        username: "Dwarf",
        country: "AF",
        points: "1232",
      },
      {
        rank: "9",
        prevRank: "4",
        username: "Mashy",
        country: "AR",
        points: "1232",
      },
      {
        rank: "10",
        prevRank: "78",
        username: "Lorry",
        country: "AM",
        points: "1232",
      },
      {
        rank: "11",
        prevRank: "6",
        username: "Evan",
        country: "NE",
        points: "1232",
      },
      {
        rank: "12",
        prevRank: "7",
        username: "Helsinki",
        country: "JP",
        points: "1232",
      },
      {
        rank: "13",
        prevRank: "14",
        username: "Tokyo",
        country: "MO",
        points: "1232",
      },
      {
        rank: "14",
        prevRank: "17",
        username: "Muse",
        country: "NA",
        points: "1232",
      },
      {
        rank: "15",
        prevRank: "90",
        username: "Dora",
        country: "SI",
        points: "1232",
      },
      {
        rank: "16",
        prevRank: "10",
        username: "Amazon",
        country: "SL",
        points: "1232",
      },
      {
        rank: "17",
        prevRank: "4",
        username: "Kesha",
        country: "FI",
        points: "1232",
      },
      {
        rank: "18",
        prevRank: "4",
        username: "Lita",
        country: "AZ",
        points: "1232",
      },
      {
        rank: "109",
        prevRank: "4",
        username: "Zian",
        country: "PL",
        points: "1232",
      },
    ];
    //finding user's record
    const username = user?.username;
    setData(
      rankingData.map((challenger) => {
        if (challenger.username !== username) {
          return challenger;
        } else {
          return { ...challenger, myRecord: true };
        }
      })
    );
  }, [activeQuestionId, user]);

  return (
    data && (
      <>
        <div className="grid-leaderboard border m-4 rounded shadow-lg overflow-y-auto">
          <div className="grid-title text-gray-500 pl-1"></div>
          <div className="grid-title text-gray-500 pl-1"></div>
          <div className="grid-title text-gray-500 "></div>
          <div className="grid-title text-gray-500 "></div>
          <div className="grid-title text-gray-500 ">Username</div>
          <div className="grid-title text-gray-500 ">Points</div>

          {data.map((challenger, i) => (
            <React.Fragment key={i}>
              <div
                className={`flex items-center ${
                  challenger?.myRecord && "my-row"
                }`}
              >
                <ChangeInRank
                  current={parseInt(challenger.rank)}
                  previous={parseInt(challenger.prevRank)}
                />
              </div>
              <div
                className={`flex items-center ${
                  challenger?.myRecord && "my-row"
                }`}
              >
                {challenger.rank}
              </div>
              <Flags
                country={challenger.country}
                className={`flex items-center ${
                  challenger?.myRecord && "my-row"
                }`}
              />
              <div
                className={`flex items-center ${
                  challenger?.myRecord && "my-row"
                }`}
              ></div>
              <div
                className={`flex items-center ${
                  challenger?.myRecord && "my-row"
                }`}
              >
                {challenger.username}
              </div>
              <div
                className={`flex items-center ${
                  challenger?.myRecord && "my-row"
                }`}
              >
                {challenger.points}
              </div>
            </React.Fragment>
          ))}
        </div>
      </>
    )
  );
};

const ChangeInRank = ({ current, previous }) => {
  const [state, setState] = React.useState("Equal");

  React.useEffect(() => {
    if (current < previous) {
      setState("Increment");
    } else if (previous < current) {
      setState("Decrement");
    } else {
      setState("Equal");
    }
  }, [current, previous]);

  return <Icon type={state} />;
};

export default LeaderBoard;
