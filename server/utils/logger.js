export const logger = (message) => {
  console.log(`[LOG] ${new Date().toISOString()} — ${message}`);
};