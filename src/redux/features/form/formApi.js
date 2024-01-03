import { api } from "../../api/apiSlice";

const formApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: ({ data }) => ({
        url: `/users/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    myPatientRegisters: builder.query({
      query: ({ page, pageSize }) =>
        `/patient-registers?page=${page}&&pageSize=${pageSize}`,
      providesTags: ["patient-registers"],
    }),

    // form one
    postPROne: builder.mutation({
      query: ({ data }) => ({
        url: `/prf-one/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["prf-one", "patient-registers"],
    }),

    pROneById: builder.query({
      query: (id) => `/prf-one/${id}`,
      providesTags: ["prf-one", "patient-registers"],
    }),

    // form two
    postPRTwo: builder.mutation({
      query: ({ data }) => ({
        url: `/prf-two/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["prf-two", "patient-registers"],
    }),

    pRTwoById: builder.query({
      query: (id) => `/prf-two/${id}`,
      providesTags: ["prf-two", "patient-registers"],
    }),

    // form three
    postPRThree: builder.mutation({
      query: ({ data }) => ({
        url: `/prf-three/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["prf-three", "patient-registers"],
    }),

    pRThreeById: builder.query({
      query: (id) => `/prf-three/${id}`,
      providesTags: ["prf-three", "patient-registers"],
    }),
  }),
});

export const {
  usePostLoginMutation,
  useMyPatientRegistersQuery,

  // form one
  usePostPROneMutation,
  usePROneByIdQuery,

  // form one
  usePostPRTwoMutation,
  usePRTwoByIdQuery,

  // form one
  usePostPRThreeMutation,
  usePRThreeByIdQuery,
} = formApi;
