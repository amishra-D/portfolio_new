function getTimeGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good morning";
  }

  if (hour >= 23 || hour < 5) {
    return "Still building?";
  }

  if (hour >= 12 && hour < 17) {
    return "Deep work hours";
  }

  return "Winding down?";
}
export default getTimeGreeting