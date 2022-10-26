import userTypes from "../enums/userTypes";

interface TitleBlock {
    title: string
    subBlocks: CollapseButton[]
}

interface CollapseButton {
    title: string
    logo: string
    id: string
    subBlocks: Link[]
}

interface Link {
    title: string
    routePath: string
}

interface ITitleBlocks {
    data: TitleBlock[]
}

interface ICollapseButtons {
    data: CollapseButton[]
}

interface ILinks {
    data: Link[]
}

type IuserSideBar = {
    [key in userTypes]: TitleBlock[]
}

export type {TitleBlock, Link, CollapseButton, ITitleBlocks, ICollapseButtons, ILinks, IuserSideBar}