import React from "react";
import clsx from "clsx";

function Row({
  type = "vertical",
  columnBreakpoint = "768px",
  className,
  children,
}) {
  return (
    <div
      className={clsx(
        "flex",
        // vertical
        type === "vertical" && "flex-col gap-[1.6rem]",
        // horizontal
        type === "horizontal" &&
          "flex-row items-center justify-between " +
            `[@media(max-width:${columnBreakpoint})]:flex-col [@media(max-width:${columnBreakpoint})]:gap-[2rem]`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Row;
