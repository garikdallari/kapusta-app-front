export const changeTopIcon = width => {
  if (width >= 319 && width <= 767) return 'mob-cabbage-up';
  if (width >= 768 && width <= 1279) return 'tabl-cabbage-up';
  if (width >= 1280) return 'desc-cabbage-up';
};
