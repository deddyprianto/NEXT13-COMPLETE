export const sortNewValue = (array) => {
  if (array?.length === 0) return;
  const lastItem = array?.pop();
  array?.unshift(lastItem);
  return array;
};
