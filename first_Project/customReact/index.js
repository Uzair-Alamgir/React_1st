const customRender = (reactElem, Container) => {
  //   const newElem = document.createElement(reactElem.type);
  //   newElem.innerHTML = reactElem.children;
  //   newElem.setAttribute("href", reactElem.props.href);
  //   newElem.setAttribute("target", reactElem.props.target);
  //   Container.appendChild(newElem);
  const newElem = document.createElement(reactElem.type);
  newElem.textContent = reactElem.children;
  for (const prop in reactElem.props) {
    newElem.setAttribute(prop, reactElem.props[prop]);
  }
  Container.appendChild(newElem);
};

const reactElem = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "By Clicking it You will navigate towards Google Search Engine",
};

const mainContainer = document.querySelector("#root");
customRender(reactElem, mainContainer);
