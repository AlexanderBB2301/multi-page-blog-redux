import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeSincePosted = ({ timestamp }) => {
  let timeSincePosted;
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePassed = formatDistanceToNow(date);
    timeSincePosted = `${timePassed}`;
  }
  return (
    <span title={timestamp}>
      &nbsp; <i>{timeSincePosted} ago.</i>
    </span>
  );
};

export default TimeSincePosted;
