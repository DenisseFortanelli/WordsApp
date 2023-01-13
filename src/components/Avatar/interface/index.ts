import { MouseEventHandler } from "react";
import ReactElement from 'react';

export interface AvatarProps {
    size: 'sm' | 'md' | 'lg' | 'xl',
    imageSrc?: string | undefined,
    isLoading?: boolean,
    backgroundColor?: string,
    text?: string,
    createBy?: string,
    textName?: string,
    onClick?: MouseEventHandler<HTMLDivElement>,
    numberOfCharacters?: 1 | 2
    value?: string,
    name?: string,
}