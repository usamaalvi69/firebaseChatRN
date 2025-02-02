//Generates a unique color based on the first letter of a given name
export const nameColor = (name?: string): string => {
  if (!name) return '#000000';
  const firstLetter = name.charAt(0).toUpperCase();
  const charCode = firstLetter.charCodeAt(0);
  const hue = (charCode * 15) % 360;
  return `hsl(${hue}, 70%, 60%)`;
};

export const capitalize = (str: string) =>
  str.replace(/\b\w/g, char => char.toUpperCase());

export const formatTime = (timestamp: number): string => {
  if (!timestamp) return '';
// format time i.e, 5:03 PM
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // AM/PM format
  });
};
