import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IOurDoctors} from "../interfaces/IComponents/IOurDoctors";
import {IProfile} from "../interfaces/IComponents/IProfile";
import {Imeeting, Ireport} from "../interfaces/IhospitalAPI";
import {IPatientRow} from "../interfaces/IComponents/IPatientRow";

const hospitalApi = createApi({
    reducerPath: 'hospitalApi',
    baseQuery  : fetchBaseQuery({
        baseUrl: 'https://6336b69865d1e8ef2671a820.mockapi.io'
    }),
    tagTypes   : ['User', 'Patients'],
    endpoints  : (build) => ({
        getDoctors    : build.query<IOurDoctors, void>({
            query: () => '/ourDoctors'
        }),
        getProfile    : build.query<IProfile[], string>({
            query: (serialNumber) => `/users?serialNumber=${serialNumber}`,
        }),
        getUsers      : build.query<IProfile[], { page: number, limit: number }>({
            query: ({page, limit}) => `/users?page=${page}&limit=${limit}`,
        }),
        getCurrentUser: build.query<IProfile[], string | null>({
            query       : (serialNumber) => `/users?serialNumber=${serialNumber}`,
            providesTags: ['User']
        }),
        getMyPatients : build.query<Imeeting[], string>({
            query       : (doctorSerialNumber) => `/meetings?doctorSerialNumber=${doctorSerialNumber}`,
            providesTags: ['Patients']
        }),
        setPatients   : build.mutation<Imeeting[], { id: string, patients: IPatientRow[] }>({
            query          : ({id, patients}) => ({
                url   : `/meetings/${id}`,
                method: 'PUT',
                body  : {patients}
            }),
            invalidatesTags: ['Patients']
        }),
        setFieldValue : build.mutation<IProfile, { id: string | null, body: IProfile }>({
            query          : ({id, body}) => ({
                url   : `/users/${id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['User']
        }),
        closeReport   : build.mutation<IProfile, Ireport>({
            query: (report) => ({
                url   : `/completedVisits`,
                method: 'POST',
                body  : report
            })
        }),
        getReports    : build.query<Ireport[], void>({
            query: () => '/completedVisits',
        }),
    })
})


export default hospitalApi
export const {
    useGetDoctorsQuery, useGetProfileQuery, useGetMyPatientsQuery, useSetFieldValueMutation,
    useGetCurrentUserQuery, useGetUsersQuery, useCloseReportMutation, useSetPatientsMutation, useGetReportsQuery
} = hospitalApi
