import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLottieStore, useStore } from "../../../../module/store";
import LottieAnimation from "../../../lottie/Lottie";

const Test1Compoents = () => {
  const movePage = useNavigate();

  function rootHome() {
    movePage("/");
  }
  const { autoIncrementValue, startAutoIncrement } = useStore();

  useEffect(() => {
    // 컴포넌트가 마운트되면 자동으로 값이 증가하도록 시작
    startAutoIncrement();
    // 컴포넌트가 언마운트되면 setInterval을 정리하여 메모리 누수를 방지
    return () => clearInterval(startAutoIncrement);
  }, [startAutoIncrement]);

  const { animationData, setAnimationData } = useLottieStore();

  useEffect(() => {
    // 여기에서 애니메이션 데이터를 불러오는 로직을 수행하고,
    // 불러온 데이터를 setAnimationData를 사용하여 스토어에 설정
    const fetchData = async () => {
      try {
        const response = await fetch("../components/lottie/test1.json");
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error fetching Lottie animation data:", error);
      }
    };

    fetchData();
  }, [setAnimationData]);

  return (
    <>
      <button onClick={rootHome}> Test1Compoents </button>

      <div>
        <p>Auto Increment Value: {autoIncrementValue}</p>
      </div>
      <div>{animationData && <LottieAnimation animationData={animationData} />}</div>
    </>
  );
};

export default Test1Compoents;
