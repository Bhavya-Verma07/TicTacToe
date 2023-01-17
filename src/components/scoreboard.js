import React from "react";
import "./scoreboard.css";

export const Scoreboard = ({ scores, xPlaying, currentwinner, matchDrawn }) => {
  const { xScore, oScore } = scores;
  return (
    <>
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${!xPlaying && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
    <div className="result">{ currentwinner? `${currentwinner} WON`: matchDrawn ? "It's a Draw!": null }</div>
    </>
  );
};
