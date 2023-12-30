import { api } from "../../api/apiSlice";

const formApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postPatientRegister: builder.mutation({
      query: ({ data }) => ({
        url: `/patient-registers/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["patient-registers"],
    }),

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
  }),
});

export const {
  usePostPatientRegisterMutation,
  usePostLoginMutation,
  useMyPatientRegistersQuery,
} = formApi;
