import React, { useEffect, useState } from "react";

interface TestProps {
  setIsMounted: any;
}

function Test({ setIsMounted }: TestProps) {
  const [width, setWidth] = useState(window.innerWidth);
  const [heigh, setHeigh] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
        setWidth(window.innerWidth);
        setHeigh(window.innerHeight)
    }

    window.addEventListener("resize", handleResize);

  }, []);

  return (
    <div>
      <div>
        <h1 id="test">Window size</h1>
        <span>Width: {width}; </span>
        <span>Heigh: {heigh};</span>
      </div>
    </div>
  );
}

export default Test;
