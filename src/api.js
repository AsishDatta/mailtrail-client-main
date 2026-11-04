const raw = (process.env.REACT_APP_API_URL || "").trim().replace(/\/$/, "");

export const API_URL = raw.endsWith("/api") ? raw : `${raw}/api`;
