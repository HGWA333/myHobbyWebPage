import React, { createContext, useState, useEffect, useContext, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useMotionValue, useTransform, useSpring } from "framer-motion";
import { toggleTheme } from "../../module/themeSlice.js";
import MainComponent from "./Component";
import "../function/menu/modal.css";
const DataContext = createContext();

// 데이터를 관리하는 Provider 컴포넌트
const DataProvider = ({ children }) => {
  // 통신을 통해 받아온 데이터 state
  const [data, setData] = useState("");

  // 데이터를 백엔드로부터 가져오는 비동기 함수 (실제로는 API 호출 등으로 대체)
  const fetchData = async () => {
    try {
      // 데이터를 가져오는 API 호출 등의 로직 수행
      // 임의의 데이터를 setTimeout으로 가져오는 방식을 사용
      setTimeout(() => {
        const fetchedData = {
          /* 여기는 백엔드로부터 받은 데이터 */
          a: 100,
          b: 200,
        };
        setData(fetchedData);
      }, 1000);
    } catch (err) {
      console.error("Error 데이터 못 가져옴: ", err);
    }
  };

  useEffect(() => {
    // 컴포넌트 마운트 시 데이터 가져오기
    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const MainContainer = () => {
  const [modalOpen, setModalOpen] = useState(0);
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modalOpen");
    } else {
      document.body.classList.remove("modalOpen");
    }
  }, [modalOpen]);

  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeModal = () => {
    if (isClosing) return;

    setIsClosing(true);

    gsap.to(modalRef.current, {
      scale: 0.7,
      opacity: 0,
      duration: 0.54,
      ease: "power3.in",
      onComplete: () => {
        modalRef.current.display = "none";
        setModalOpen(0);
        setIsClosing(false);
      },
    });
  };

  useEffect(() => {
    const modalCloseHandler = () => {};

    if (modalOpen) {
      gsap.fromTo(
        modalRef.current,
        {
          scale: 0.7,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          onStart: () => {
            modalRef.current.style.display = "block";
            modalRef.current.style.overflow = "hidden";
          },
        }
      );
    } else {
      modalCloseHandler();
    }

    return () => {
      modalRef.current?.removeEventListener("closeModal", modalCloseHandler);
    };
  }, [modalOpen, setModalOpen]);

  const modalHandlers = {
    modalOpen: modalOpen,
    setModalOpen: setModalOpen,
    modalRef: modalRef,
    closeModal: closeModal,
  };

  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const toggleHandlers = {
    currentTheme: currentTheme,
    handleThemeToggle: handleThemeToggle,
  };

  // 데이터를 Context에서 불러오기
  const data = useContext(DataContext);

  // 화면 크기 상태 관리
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 화면 크기 변화 시 상태 업데이트
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때와 화면 크기 변화 시 resize 이벤트 감지
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 cleanup 작업
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const viewHandlers = {
    data: data,
    windowWidth: windowWidth,
  };

  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos < currentScrollPos) {
        setScrollDirection("down");
      } else if (prevScrollPos > currentScrollPos) {
        setScrollDirection("up");
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let aosAnimation = "";

  if (scrollDirection === "up") {
    aosAnimation = "fade-up";
  } else if (scrollDirection === "down") {
    aosAnimation = "fade-down";
  }

  const aosAnimationHandlers = {
    aosAnimation: aosAnimation,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const menuHandlers = {
    isMenuOpen: isMenuOpen,
    toggleMenu: toggleMenu,
  };

  const [isHovered, setIsHovered] = useState(false);
  const tiltOptions = {
    tiltMaxAngleX: 0, // x 축 변화를 없애기 위해 0으로 설정
    tiltMaxAngleY: isHovered ? 40 : 0,
    perspective: 800,
    transitionSpeed: 1500,
    scale: 1,
    gyroscope: false, // gyroscope 비활성화
    trackOnWindow: false,
  };
  const tiltHandlers = {
    setIsHovered: setIsHovered,
    tiltOptions: tiltOptions,
  };

  const scrollYProgressMV = useMotionValue(0);
  const scrollYProgress = useSpring(scrollYProgressMV, { duration: 2000 });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0.5]);

  const menuTopLineRange = useTransform(scrollYProgress, [0, 1], [0.14, 1]);
  const menuTopLineRangeOffset = useTransform(scrollYProgress, [0, 1], [0, 0.71]);
  const menuTopPathLength = useSpring(menuTopLineRange, {
    stiffness: 400,
    damping: 50,
  });

  const menuMiddleLineRange = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const menuMiddleLineRangeOffset = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const menuMiddlePathLength = useSpring(menuMiddleLineRange, {
    stiffness: 400,
    damping: 50,
  });

  const menuBottomLineRange = useTransform(scrollYProgress, [0, 1], [0.115, 1]);
  const menuBottomLineRangeOffset = useTransform(scrollYProgress, [0, 1], [0, 0.754]);
  const menuBottomPathLength = useSpring(menuBottomLineRange, {
    stiffness: 400,
    damping: 50,
  });

  const [MenuBtnstate, setState] = useState(0);

  const MenuBtnOnClick = () => {
    if (MenuBtnstate === 0) {
      scrollYProgressMV.set(1);
      setState(1);
    } else {
      scrollYProgressMV.set(0);
      setState(0);
      closeModal();
    }
  };

  const menuBtnHandlers = {
    scale: scale,
    MenuBtnstate: MenuBtnstate,
    MenuBtnOnClick: MenuBtnOnClick,
    menuTopLineRangeOffset: menuTopLineRangeOffset,
    menuTopPathLength: menuTopPathLength,
    menuMiddleLineRangeOffset: menuMiddleLineRangeOffset,
    menuMiddlePathLength: menuMiddlePathLength,
    menuBottomLineRangeOffset: menuBottomLineRangeOffset,
    menuBottomPathLength: menuBottomPathLength,
  };

  useEffect(() => {
    // 페이지 이동 시 state와 scrollYProgressMV 초기화
    setState(0);
    scrollYProgressMV.set(0);
  }, [location.pathname]); // location.pathname이 변경될 때마다 useEffect 실행

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollHandlers = {
    scrollToTop: scrollToTop,
  };
  const navigate = useNavigate();

  const homeClick = () => {
    navigate("/");
  };
  const serviceClick = () => {
    navigate("/service");
  };
  const corpClick = () => {
    navigate("/corp");
  };
  const aboutClick = () => {
    navigate("/about");
  };
  const peopleClick = () => {
    navigate("/people");
  };
  const Inspection1Click = () => {
    navigate("/inspection1 ");
  };
  const Inspection2Click = () => {
    navigate("/inspection2");
  };
  const BuildUpClick = () => {
    navigate("/build");
  };
  const DiagnosisClick = () => {
    navigate("/diagnosis");
  };
  const LegalClick = () => {
    navigate("/legal");
  };
  const testPage1Click = () => {
    navigate("/test1");
  };

  const routeHandlers = {
    aboutClick: aboutClick,
    corpClick: corpClick,
    peopleClick: peopleClick,
    Inspection1Click: Inspection1Click,
    Inspection2Click: Inspection2Click,
    BuildUpClick: BuildUpClick,
    DiagnosisClick: DiagnosisClick,
    LegalClick: LegalClick,
    homeClick: homeClick,
    serviceClick: serviceClick,
    testPage1Click: testPage1Click,
  };
  return (
    <>
      <MainComponent
        modalHandlers={modalHandlers}
        toggleHandlers={toggleHandlers}
        viewHandlers={viewHandlers}
        aosAnimationHandlers={aosAnimationHandlers}
        menuHandlers={menuHandlers}
        routeHandlers={routeHandlers}
        tiltHandlers={tiltHandlers}
        menuBtnHandlers={menuBtnHandlers}
        scrollHandlers={scrollHandlers}
      />
    </>
  );
};

export { DataProvider, MainContainer };
