import {ComponentMeta, ComponentStory} from '@storybook/react'
import { EnvelopeOpen, Phone } from 'phosphor-react';
import { MouseEvent, MouseEventHandler } from 'react'
import Tagsframe from '../../components/Tags/Tagsframe';


export default {
    title:'Tagsframe',
    component: Tagsframe
} as ComponentMeta<typeof Tagsframe>

const handleClick = (e: MouseEvent<HTMLDivElement>)=>{
    console.log(e);
    
}


const Template:ComponentStory<typeof Tagsframe> = (args) => {

    return<Tagsframe {...args}/>
}

export const TagsframeComponent = Template.bind({})
TagsframeComponent.args={
    icon:'Phone',
    size:'md',
    onClick:handleClick,
     backgroundColor:'var(--gray500)',
    text:'isabella@bluepixel.mx'
    
}