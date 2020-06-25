export const getPoints = (x, y) => {
  if (x < 30 || x > 480 || y < 63 || y > 480) return 'invalid';
  if (x >= 54 && x <= 450 && y >= 63 && y <= 160) return 'two';
  if ((x - 195) * (x - 195) + (y - 160) * (y - 160) <= 130 * 130) return 'two';
  if ((x - 309) * (x - 309) + (y - 160) * (y - 160) <= 130 * 130) return 'two';
  if (x >= 195 && x <= 309 && y > 160 && y <= 307) return 'two';

  return 'three';
};
