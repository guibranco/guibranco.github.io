export const calculateDuration = (startDate: string, endDate: string = "now"): string => {
  const start = new Date(startDate.split("/").reverse().join("-"));
  const end =
    endDate.toLowerCase() === "now" ? new Date() : new Date(endDate.split("/").reverse().join("-"));

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  months++;

  if (months === 12) {
    years++;
    months = 0;
  }

  if (years === 0) {
    return `${months} month${months !== 1 ? "s" : ""}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? "s" : ""}`;
  }
  return `${years} year${years !== 1 ? "s" : ""} and ${months} month${months !== 1 ? "s" : ""}`;
};

export const getContractTypeLabel = (type: string): string => {
  const labels = {
    "full-time": "Full-time",
    "part-time": "Part-time",
    freelance: "Freelance",
    contract: "Contract",
  };
  return labels[type as keyof typeof labels] || type;
};

export const getWorkModelLabel = (model: string): string => {
  const labels = {
    "on-site": "On-site",
    hybrid: "Hybrid",
    remote: "Remote",
  };
  return labels[model as keyof typeof labels] || model;
};
