import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../lib/api";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseQuery,
    prepareHeaders: (headers) => {
      const token = `Bearer ${localStorage.getItem("carrus_care")}`;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["users", "patient-registers"],
  endpoints: () => ({}),
});
