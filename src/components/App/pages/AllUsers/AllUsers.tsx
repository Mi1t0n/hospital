import style from './AllUsers.module.scss'
import {useGetUsersQuery} from "redux/hospitalApi";
import {useEffect, useRef, useState} from "react";
import Loader from "components/shared/Loader/Loader";
import ShowUserProfile from "components/shared/ShowUserProfile/ShowUserProfile";
import {IProfile} from "interfaces/IComponents/IProfile";


const AllUsers = () => {
    const [page, setPage] = useState<number>(1);
    const [allUsers, addUsers] = useState<IProfile[]>([])
    const {data: users, isLoading} = useGetUsersQuery({page, limit: 9})

    const pageEnd = useRef<HTMLDivElement>(null);
    const {current: element} = pageEnd

    useEffect(() => {
        users && addUsers([...allUsers, ...users])
    }, [users])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setPage(prev => prev + 1)
                }
            })

        element && observer.observe(element)
        return () => {
            element && observer.unobserve(element)
        }
    }, [element])

    if (isLoading) return <Loader/>

    return (
        <div className={style.users}>
            {
                allUsers.map(({serialNumber, userProfile: {fullName, avatar}}) =>
                    <ShowUserProfile fullName={fullName} avatar={avatar} serialNumber={serialNumber}
                                     key={serialNumber}/>
                )
            }
            {
                users?.length === 9 &&
                <div className={style.loader} ref={pageEnd}>
                    <Loader/>
                </div>
            }
        </div>
    );
}

export default AllUsers;
