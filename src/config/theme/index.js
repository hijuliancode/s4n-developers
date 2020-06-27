// COLORS
export const primaryColor = "#7d67f0"

export const lightColor = "rgba(243, 60, 82, 0.04)"
export const grayColor = "#464646";
export const blackColor = "#090810"
export const whiteColor = "#ffffff"

export const s4nBrandColor1 = "#EC1C25"

// SIZES
export const baseSize = 4

// HELPERS
export const isRadious = {
  x1: `border-radius: ${baseSize}px;`,
  x2: `border-radius: ${baseSize * 2}px;`,
  x3: `border-radius: ${baseSize * 3}px;`,
  x4: `border-radius: ${baseSize * 4}px;`,
  x5: `border-radius: ${baseSize * 5}px;`,
  x6: `border-radius: ${baseSize * 6}px;`,
  x7: `border-radius: ${baseSize * 7}px;`,
  x8: `border-radius: ${baseSize * 8}px;`,
  x9: `border-radius: ${baseSize * 9}px;`,
  x10: `border-radius: ${baseSize * 10}px;`,
}

// MEDIA QUERIES
// xm (Mobile) < 576px
// sm (Tablets Vertical) >= 576px
// md (Tablets Horizontal) >= 768px
// lg (Desktop) >= 992px
// xl (Desktop large) >= 1200px
export const mq = {
  xm: 'max-width: 576px',
  sm: 'min-width: 576px',
  md: 'min-width: 768px',
  lg: 'min-width: 992px',
  xl: 'min-width: 1200px'
}

// FONTS
// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'Poppins', sans-serif;
export const font = {
  base: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  weight: {
    '100': 100,
    '200': 200,
    '300': 300,
    '400': 400,
    '500': 500,
    '600': 600,
    '700': 700,
    '800': 800,
    '900': 900,
  },
  literature: {
    name: "'Alegreya', serif",
    weight: {
      '400' : 400,
      '500' : 500,
      '700' : 700,
    }
  }
}

//SKELETON
export const skeleton = {
  base: `
    animation: animation-skeleton 1.2s ease-in-out infinite;
    background-color: #eee;
    background-image: linear-gradient( 90deg,#eee,#f5f5f5,#eee );
    background-repeat: no-repeat;
    background-size: 200px 100%;
    border-radius: 4px;
    display: inline-block;
    flex: 1;
    height: 100%;
    line-height: 1;
    width: 100%;
  `
}