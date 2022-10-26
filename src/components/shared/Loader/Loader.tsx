import React from "react"
import ContentLoader from "react-content-loader"


const Loader = () => (
    <ContentLoader speed={1} width={'100%'} height={'100%'}
                   backgroundColor="#FFFFFF" foregroundColor="#CCCCCC"
    >
        <rect x="0" y="0" rx="10" ry="10" width={'100%'} height={'100%'}/>
    </ContentLoader>
)

export default Loader

