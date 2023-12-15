import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = ({ animationData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg", // 애니메이션 렌더러 설정 (SVG, Canvas 등)
      loop: true,
      autoplay: true,
      animationData: animationData, // JSON 애니메이션 데이터
    });

    return () => {
      anim.destroy(); // 컴포넌트가 unmount될 때 애니메이션 정리
    };
  }, [animationData]); // animationData가 변경될 때마다 useEffect 재실행

  return <div ref={containerRef} />;
};

export default LottieAnimation;
