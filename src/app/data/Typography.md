Typography System
We want a type stack that’s clean, friendly, high-contrast, and low-distraction—perfect for neuro-divergent users.

Role	Font Family	Weights	Sizes
Headings / UI	Nunito (Google Fonts)	300, 600, 800	H1 : 32 px / 2 rem
H2 : 24 px / 1.5 rem
H3 : 20 px / 1.25 rem
Body / Labels	Inter (Google Fonts)	400, 500	body : 16 px / 1 rem
small : 14 px / 0.875 rem
System Fallback	- iOS: “SF Pro Text”		
- Android: “Roboto”		

Why Nunito + Inter?

Nunito’s gently rounded terminals feel reassuring without looking childish.

Inter excels at screen-legibility, especially at small sizes or low contrast.

Web Implementation

css
Copiar
Editar
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Nunito:wght@300;600;800&display=swap');

:root {
  --font-heading: 'Nunito', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
h1,h2,h3 { font-family: var(--font-heading); }
body, button, label { font-family: var(--font-body); }
Native App

iOS: use SF Pro Text for body, SF Pro Display (semi-bold) for headings.

Android: use Roboto for body, Roboto Medium/Black for headings.

Fallback to the Google-hosted Nunito/Inter if you bundle them, otherwise stick to system fonts for performance.

Accessibility Tips

Maintain at least 4.5:1 text contrast against background.

Use 1.4× line-height for paragraphs.

Avoid text sizes below 14 px (web) or 14 sp (native).

