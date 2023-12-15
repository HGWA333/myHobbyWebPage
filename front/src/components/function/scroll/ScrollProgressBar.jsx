import React, { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop + ((document.documentElement && document.documentElement.scrollTop) || 0);

    const totalScroll = documentHeight - windowHeight;
    const scrolled = (scrollTop / totalScroll) * 100;

    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "1000px" }}>
      {/* 스크롤이 생기도록 충분한 내용을 넣어줍니다 */}
      <div style={{ width: "100%", height: "5px", backgroundColor: "#ccc" }}>
        <div
          style={{
            width: `${scrollPercentage}%`,
            height: "100%",
            backgroundColor: "blue",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressBar;
