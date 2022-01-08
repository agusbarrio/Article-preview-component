export default function sharePanel(shareBox, shareButton) {
  const d = document;
  d.addEventListener("click", (e) => {
    let $shareBox = d.querySelector(shareBox);

    let $shareButton = d.querySelector(shareButton);
    if (e.target.matches(shareButton) || e.target.matches(`${shareButton} *`)) {
      $shareBox.classList.toggle("active");
      if ($shareBox.classList.contains("active")) {
        $shareButton.firstElementChild.firstElementChild.setAttribute(
          "fill",
          "#FFF"
        );
      } else {
        $shareButton.firstElementChild.firstElementChild.setAttribute(
          "fill",
          "#6E8098"
        );
      }
    }
  });
}
