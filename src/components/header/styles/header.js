import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url(${({ src }) =>
      src
        ? // ? `../images/misc/${src}.jpg`
          `#`
        : "https://d28mq30amg5oyw.cloudfront.net/lizy%2Fpreview%2F43622733%2Fmain_full.jpg?response-content-disposition=inline%3Bfilename%3D%22main_full.jpg%22%3B&response-content-type=image%2Fjpeg&Expires=1638735135&Signature=c9aSWGi1AnbLIgQ9VIJ6JjJlQlaafBJ21dTTTtXeex1clMrpX06TSZuJN0Qo~6z97z3dQLKWvzPrvcX1Kwhv5jhFKHkNN3b~8S4g3JpXnwBDXqOxyHVmob7np3I5eQDrikziMqkwXkLw63~s5s3hCIz31LILTAWFSmkOhUL8haOZZJCHjDQm7kENxhdQ-W5Zic18ZKLZJcmrAEKleKIbdYzWbHkrLxXtIVSu2~KBlM-uUZX9oZE5UcnSRuUN-gWcOoRPkNbSVfUwULHmmDIqXOnBpvpkLPJIFFu7RdwhJEtCtwmb~mlQ5Ox6Jk1he2oZqEih00DhaJ71R3mEsyOtQQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"})
    top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${(active) => (active === "true" ? "700" : "normal")};
  /* font-weight: ${({ active }) => (active === "true" ? "700" : "normal")}; */
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: flex;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
