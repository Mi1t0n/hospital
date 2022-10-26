
interface INotification {
    postDate:string
    content:string
}
interface IrecentNotificationsSlice{
    notifications:INotification[] |null
}

export type {IrecentNotificationsSlice,INotification}