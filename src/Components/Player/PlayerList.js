import React from "react";

const PlayerList = (props) => {
  const isPlayersArray = Array.isArray(props.players);
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Players</h4>
        </li>
        {!isPlayersArray
          ? null
          : props.players.map((item) => (
              <a
                href="#!"
                className="collection-item"
                key={item._id}
                onClick={props.updateCurrentPlayer.bind(this, item)}
              >
                {item.firstName} {item.lastName}
              </a>
            ))}
      </ul>
    </div>
  );
};

export default PlayerList;
