import React, { JSX, useEffect, useState } from "react";

export function NoJS() {
  return <p>Please enable JS for this element to work</p>;
}

type JSDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  fallback?: (() => JSX.Element | null) | null;
};

export default function JSDiv({ fallback = NoJS, ...rest }: JSDivProps) {
  const [jsEnabled, setJsEnabled] = useState(false);

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  if (jsEnabled) {
    return <div {...rest} />;
  }

  if (fallback === null) {
    return null;
  }

  return fallback();
}
