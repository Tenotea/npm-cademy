export function getAgeFromDate(dob: string) {
  const yearOfBirth = new Date(dob).getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

export function getDateFromISOString(time?: string) {
  const timeString = time ? new Date(time) : new Date();

  const date = timeString.toLocaleDateString();

  function formatTime() {
    let h = timeString.getHours();
    const m = timeString.getMinutes();
    let suffix = "AM";
    if (h > 11) {
      suffix = "PM";
    }
    h = h == 0 ? 12 : h;
    h = h > 13 ? h - 12 : h;
    return `${h > 9 ? h : `0${h}`}:${m > 9 ? m : `0${m}`} ${suffix}`;
  }

  return { date, time: formatTime() };
}
