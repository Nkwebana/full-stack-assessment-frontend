const intlFormat = (numberOfFansCalculation) => {
  return new Intl.NumberFormat().format(
    Math.round(numberOfFansCalculation * 10) / 10
  );
};

export function formatNumberOfFans(numberOfFans) {
  if (numberOfFans >= 1000000) {
    return intlFormat(numberOfFans / 1000000) + 'M';
  }

  return intlFormat(numberOfFans / 1000) + 'k';
}

export function convertSecondsToMinutes(seconds) {
  return (
    (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ':' : ':0') + seconds
  );
}

export const truncate = (input, limit) =>
  input.length > limit ? `${input.substring(0, limit)}...` : input;

export const debounce = (func, wait, immediate) => {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
