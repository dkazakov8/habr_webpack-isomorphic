export function getDefineParams({ isClient }) {
  return {
    IS_CLIENT: JSON.stringify(isClient),
  };
}
