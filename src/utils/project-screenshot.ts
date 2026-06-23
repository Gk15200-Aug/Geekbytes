/** Live website preview via WordPress mshots (same as homepage ProjectCard). */
export function projectScreenshotUrl(url: string, width = 600, height = 400): string {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=${width}&h=${height}`;
}
