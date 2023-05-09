function getClientId() {
    const gaCookie = document.cookie.split("; ").find(row => row.startsWith("_ga="));
    if (gaCookie) {
      return gaCookie.split("=")[1].split(".").slice(-2).join(".");
    }
    return null;
  }