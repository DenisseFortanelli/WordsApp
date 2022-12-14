import React from "react"
import ContentLoader, { IContentLoaderProps } from "react-content-loader"

const CircleSkeleton = ({viewBox, size, ...rest}:{viewBox?:string, size?:string, rest?: JSX.IntrinsicAttributes & IContentLoaderProps}) => (
        <ContentLoader 
            speed={1}
            width={size?size:'100%'}
            height={size?size:'100%'}
            viewBox="0 0 80 80"
            backgroundColor="#f3f4f6"
            foregroundColor="#e5e5e5"
            {...rest}
        >
            <circle cx="40" cy="40" r="40" />
        </ContentLoader>
)

export default CircleSkeleton