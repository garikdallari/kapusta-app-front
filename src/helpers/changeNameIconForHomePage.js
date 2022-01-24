export const changeNameIconForHomePage = width => {
  if (width >= 319 && width <= 767) return 'mob-cabbage-down';
  if (width >= 768 && width <= 1279) return 'tabl-cabbage-down';
  if (width >= 1280) return 'home-cabbage-down';
};
