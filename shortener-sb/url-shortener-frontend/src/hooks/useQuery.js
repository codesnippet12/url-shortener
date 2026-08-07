import { useQuery } from "@tanstack/react-query";
import api from "../api/api";


// ===============================
// Fetch user's short URLs
// ===============================
export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls"],

    queryFn: async () => {
      const response = await api.get("/api/urls/myurls", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      return response;
    },

    enabled: !!token,

    select: (data) => {
      return data.data.sort(
        (a, b) =>
          new Date(b.createdDate) - new Date(a.createdDate)
      );
    },

    staleTime: 5000,

    retry: false,

    onError,
  });
};


// ===============================
// Fetch total clicks
// ===============================
export const useFetchTotalClicks = (token, onError) => {

  return useQuery({
    queryKey: ["url-totalclick"],

    queryFn: async () => {

      // Today's date
      const today = new Date();

      // 7 days ago
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(today.getDate() - 7);

      const formatDate = (date) => {
        return date.toISOString().split("T")[0];
      };

      const startDate = formatDate(sevenDaysAgo);
      const endDate = formatDate(today);

      const response = await api.get(
        `/api/urls/totalClicks?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      return response;
    },

    enabled: !!token,

    select: (data) => {

      return Object.keys(data.data).map((key) => ({
        clickDate: key,
        count: data.data[key],
      }));

    },

    staleTime: 5000,

    retry: false,

    onError,
  });
};