declare module '*.scss'
declare module '*.svg'
declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
declare module 'react-file-reader';