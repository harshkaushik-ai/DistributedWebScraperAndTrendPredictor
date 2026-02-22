export const predictTrend = (today, yesterday) => {
  const growthRate = (today - yesterday) / (yesterday || 1);

  let prediction = "stable";

  if (growthRate > 0.5) prediction = "rising";
  else if (growthRate < 0) prediction = "falling";

  return { growthRate, prediction };
};