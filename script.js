console.log("Portfolio Loaded Successfully 🚀");

/* ===== 3D TILT EFFECT ===== */
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

/* ===== TOUCH / MOUSE LIGHT EFFECT ===== */
document.addEventListener("mousemove", e => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

document.addEventListener("touchmove", e => {
  const touch = e.touches[0];
  document.body.style.setProperty("--x", touch.clientX + "px");
  document.body.style.setProperty("--y", touch.clientY + "px");
});
