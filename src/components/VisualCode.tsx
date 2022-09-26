import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { animationRightToLeft } from "helpers/listAnimations";

export const VisualCode = () => {
  const wrapper: any = useRef();
  const container: any = useRef();

  const [transformTicket, setTransformTicket] = useState<object | any>({});
  const innerWidth = 550;
  const innerHeight = 500;

  const halfWidth = innerWidth / 2;
  const halfHeight = innerHeight / 2;

  const transform = (rotationX: any, rotationY: any) => ({
    transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
  });

  const wrapperMove = (event: any) => {
    const { clientX, clientY } = event;
    const rotationX = ((clientX - halfWidth) / halfWidth) * 3;
    const rotationY = ((clientY - halfHeight) / halfHeight) * 5;

    if (!container.current.contains(event.target)) {
      transform(0, 0);
    } else {
      setTransformTicket(transform(rotationX, rotationY));
    }
  };

  const wrapperLeave = () => {
    setTransformTicket(transform(0, 0));
  };

  return (
    <motion.div
      className="wrapper"
      ref={wrapper}
      onMouseMove={wrapperMove}
      onMouseLeave={wrapperLeave}
      variants={animationRightToLeft}
    >
      <div className="container" ref={container} style={transformTicket}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <h3>
            <span>{"<"}</span>body<span>{">"}</span>
          </h3>
          <h3>
            <span>{"<"}</span>h1<span>{">"}</span>{" "}
            <span className="text">Hello World</span> <span>{"</"}</span>h1
            <span>{">"}</span>
          </h3>
          <h3>
            <span>{"<"}</span>div
            <span>
              <span className="class"> class</span>
              {'="'}
              <span className="className">container</span>
              {'">'}
            </span>
          </h3>
          <h3 className="margin">
            <span>{"<"}</span>h2<span>{">"}</span>{" "}
            <span className="text">React and Next JS</span> <span>{"</"}</span>
            h2
            <span>{">"}</span>
          </h3>
          <h3 className="margin">
            <span>{"<"}</span>h2<span>{">"}</span>{" "}
            <span className="text">Node JS with Express</span>{" "}
            <span>{"</"}</span>
            h2
            <span>{">"}</span>
          </h3>
          <h3 className="margin">
            <span>{"<"}</span>h2<span>{">"}</span>{" "}
            <span className="text">TypeScript</span> <span>{"</"}</span>h2
            <span>{">"}</span>
          </h3>
          <h3>
            <span>{"</"}</span>div<span>{">"}</span>
          </h3>
          <h3>
            <span className="comment">{"<!-- noscript -->"}</span>
          </h3>
          <h3>
            <span>{"</"}</span>body<span>{">"}</span>
          </h3>
        </div>
      </div>
    </motion.div>
  );
};
