import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IOurDoctors} from "../interfaces/IComponents/IOurDoctors";
import {IProfile} from "../interfaces/IComponents/IProfile";
import {Imeeting} from "../interfaces/IhospitalAPI";

const hospitalApi = createApi({
    reducerPath: 'hospitalApi',
    baseQuery  : fetchBaseQuery({
        baseUrl: 'https://6336b69865d1e8ef2671a820.mockapi.io'
    }),
    tagTypes   : ['User'],
    endpoints  : (build) => ({
        getDoctors    : build.query<IOurDoctors, any>({
            query: () => '/ourDoctors'
        }),
        getProfile    : build.query<IProfile[], string>({
            query: (serialNumber) => `/users?serialNumber=${serialNumber}`,
        }),
        getUsers      : build.query<IProfile[], { page: number, limit: number }>({
            query       : ({page, limit}) => `/users?page=${page}&limit=${limit}`,
            providesTags: _ => ['User']
        }),
        getCurrentUser: build.query<IProfile[], string | null>({
            query       : (serialNumber) => `/users?serialNumber=${serialNumber}`,
            providesTags: _ => ['User']
        }),
        getMyPatients : build.query<Imeeting[], string>({
            query: (doctorSerialNumber) => `/meetings?doctorSerialNumber=${doctorSerialNumber}`
        }),
        setFieldValue : build.mutation<IProfile, { id: string | null, body: IProfile }>({
            query          : ({id, body}) => ({
                url   : `/users/${id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['User']
        })
    })
})


export default hospitalApi
export const {
    useGetDoctorsQuery, useGetProfileQuery, useGetMyPatientsQuery, useSetFieldValueMutation,
    useGetCurrentUserQuery, useGetUsersQuery
} = hospitalApi
