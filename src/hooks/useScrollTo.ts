import { scroller } from "react-scroll";

const useScrollTo = () => {
  return {
    scrollToSearchBar: () => scroller.scrollTo("search-bar", {
        duration: 100,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -150
    }),
    scrollToCards: () => scroller.scrollTo("cards", {
        duration: 100,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -40
    })
  };
};

export default useScrollTo;