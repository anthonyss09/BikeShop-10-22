import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      const user = getState().users.user;
      const isAdmin = user ? user.admin : 0;
      headers.set("isAdmin", isAdmin);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products/all-products",
      providesTags: (result = [], error, arg) => [
        "Product",
        ...result.map(({ _id }) => ({ type: "Product", _id })),
      ],
    }),
    getProduct: builder.query({
      query: (productId) => `/products/${productId}`,
      providesTags: (result, error, arg) => [{ type: "Product", _id: arg }],
    }),
    addNewProduct: builder.mutation({
      query: (product) => ({
        url: "/products/add-product",
        method: "POST",
        body: product,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Product", _id: arg._id },
      ],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddNewProductMutation,
} = apiSlice;
