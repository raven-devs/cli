const doSmth = (milliseconds: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

export const OraUtils = {
  doSmth,
};
