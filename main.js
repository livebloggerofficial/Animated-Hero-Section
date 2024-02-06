const menuIcon = document.querySelector("nav#custom-nav .menu-icon");
const mobileMenuItems = document.querySelector(
  "nav#custom-nav .mobile-menu-items"
);

menuIcon.addEventListener("click", () => {
  mobileMenuItems.classList.toggle("active");
});

let mm = gsap.matchMedia();

mm.add("(max-width: 800px)", () => {
  const tlMobile = gsap.timeline();

  tlMobile
    .from("#hero > img", {
      opacity: 0,
    })
    .from(
      "nav#custom-nav",
      {
        y: -100,
        ease: "expo.out",
        duration: 1.7,
      },
      "-=.6"
    )
    .from(
      "nav#custom-nav .logo",
      {
        opacity: 0,
        duration: 1,
      },
      "-=1"
    )
    .from(
      "nav#custom-nav .menu-icon",
      {
        x: 30,
        opacity: 0,
        duration: 1,
      },
      "-=1"
    )
    .to(
      "#hero .text-content",
      {
        y: 0,
        ease: "power4.out",
        duration: 1.8,
      },
      "-=1.4"
    )
    .from(
      "#hero h1",
      {
        opacity: 0,
        scale: 0.9,
        ease: "elastic.out(1.2, 0.4)",
        duration: 1.5,
      },
      "-=1.3"
    )
    .from(
      "#hero .sub-heading",
      {
        opacity: 0,
        x: 40,
        ease: "elastic.out(1, .4)",
        duration: 1.5,
      },
      "-=1.3"
    )
    .from(
      "#hero .buttons .btn",
      {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "elastic.out(1, .5)",
        stagger: 0.2,
      },
      "-=1.3"
    );
});

mm.add("(min-width: 801px)", () => {
  const tlDesktop = gsap.timeline();

  tlDesktop
    .from("#hero > img", {
      opacity: 0,
    })
    .from(
      "nav#custom-nav",
      {
        y: -100,
        ease: "expo.out",
        duration: 1.7,
      },
      "-=.6"
    )
    .from(
      "nav#custom-nav .logo",
      {
        opacity: 0,
        duration: 1,
      },
      "-=1"
    )
    .from(
      "nav#custom-nav .menu-items a",
      {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "elastic.out(1, .5)",
        stagger: 0.3,
      },
      "-=1"
    )
    .to(
      "#hero .text-content",
      {
        y: 0,
        ease: "power4.out",
        duration: 1.8,
      },
      "-=1.4"
    )
    .from(
      "#hero h1",
      {
        opacity: 0,
        scale: 0.9,
        ease: "elastic.out(1.2, 0.4)",
        duration: 1.5,
      },
      "-=1.3"
    )
    .from(
      "#hero .sub-heading",
      {
        opacity: 0,
        x: 40,
        ease: "elastic.out(1, .4)",
        duration: 1.5,
      },
      "-=1.3"
    )
    .from(
      "#hero .buttons .btn",
      {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "elastic.out(1, .5)",
        stagger: 0.2,
      },
      "-=1.3"
    );
});
