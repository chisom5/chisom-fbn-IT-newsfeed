export function formatRelativeTime(dateString) {
  if (!dateString) return "Just now";

  const diff = Date.now() - new Date(dateString).getTime();
  const minutes = Math.max(1, Math.round(diff / 60000));

  if (minutes < 60) return `${minutes} min${minutes > 1 ? "s" : ""} ago`;

  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;

  const days = Math.round(hours / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

export function truncateText(text, maxLength = 120) {
  if (!text) return "";
  const cleaned = text
    .replace(/\s*\[\+\d+\s*chars\]/gi, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\\r\\n|\r\n/g, " ")
    .trim();

  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength).trim()}...`;
}
