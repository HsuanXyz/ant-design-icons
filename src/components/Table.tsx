import * as React from "react";

const Table: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    id="图层_1"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      className="st0"
      d="M412 432h200v160H412zM412 232h200v136H412zM136 432h212v160H136zM676 232h212v136H676zM676 432h212v160H676zM412 656h200v136H412zM676 656h212v136H676zM136 232h212v136H136zM136 656h212v136H136z"
    />
    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z" />
  </svg>
);

Table.displayName = "Table";

export default Table;