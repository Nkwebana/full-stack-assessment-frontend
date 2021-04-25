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
