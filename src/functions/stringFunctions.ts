export function colorIsTooLight(color: string) {
  const hex = color.replace('#', '');
  const cR = parseInt(hex.substr(0, 2), 16);
  const Cg = parseInt(hex.substr(2, 2), 16);
  const Cb = parseInt(hex.substr(4, 2), 16);
  const brightness = (cR * 299 + Cg * 587 + Cb * 114) / 1000;
  return brightness > 155;
}
