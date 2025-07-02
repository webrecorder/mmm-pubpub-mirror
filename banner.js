// Example of a very simple web archive banner, created on load

let created = false;

function createBanner() {
  // only init once
  if (created) {
    return;
  }

  // only init in top frame
  if (window !== top) {
    return;
  }

  let dateStr = "";

  // check injected info for date string
  if (self.__wbinfo && self.__wbinfo.timestamp) {
    dateStr = " from " + new Date(self.__wbinfo.timestamp).toLocaleString();
  }

  const b = document.createElement("web-archive-banner");
  b.style.position = "fixed";
  b.style.left = "0px";
  b.style.top = "0px";
  b.style.width = "100%";
  b.style.height = "30px";
  b.style.textAlign = "center";
  b.style.fontFamily = "system-ui; sans-serif";
  b.style.backgroundColor = "rgb(77, 124, 15)";
  b.style.color = "white";
  b.style.zIndex = "1000000";
  b.innerText = "You are viewing an archived version of this page" + dateStr;

  // attempt ot adjust margin for rest of document (won't always work)
  const html = document.querySelector("html");
  if (html) {
    html.style.marginTop = "30px";
  }

  document.body.prepend(b);
  created = true;
}

document.addEventListener("readystatechange", () => createBanner());
