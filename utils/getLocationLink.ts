export default function getLocationLink(location: any, destination: string): string {
  const baseUrl = "https://www.google.com/maps/dir/";
  return `${baseUrl}${location.location?.lat.toString() + "," + location.location?.lng.toString()}/${encodeURIComponent(destination)}`;
}
