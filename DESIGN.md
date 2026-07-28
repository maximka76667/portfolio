# Portfolio Design Document

## Vision

Two full-screen sections connected by smooth scroll transitions. Screen 1 sets the tone with a simple statement. Screen 2 is a clean white space (placeholder for future content).

---

## Technical Stack

- **Framework:** Next.js with TypeScript
- **Scroll Control:** GSAP + ScrollTrigger + Lenis
- **Styling:** Tailwind CSS
- **Animations:** GSAP for transitions

---

## Screens

### Screen 1: Dark Statement

- **Background:** Pure black (#000000)
- **Content:** Centered text
  - Text: "My job is made the best when nobody notices it"
  - Static (no animation on load)
  - Color: White (#ffffff)
  - Font size: Large (readable, adjust as needed)
- **Dimensions:** Full screen (h-screen, w-screen)

### Screen 2: White Space

- **Background:** White (#ffffff)
- **Content:** Empty (placeholder)
- **Dimensions:** Full screen (h-screen, w-screen)

---

## Transitions

- **Between screens:** Smooth fade/transition on scroll
- **Duration:** 600-800ms
- **Behavior:** Scroll down → Screen 1 fades smoothly to Screen 2

---

## Future Enhancements

- Idle animation: Text transitioning between two similar fonts
- Additional screens (extensible structure)

---
