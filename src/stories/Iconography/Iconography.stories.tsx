import {ComponentMeta, ComponentStory} from '@storybook/react'
import { EnvelopeOpen, Phone } from 'phosphor-react';
import { MouseEvent, MouseEventHandler } from 'react'
import { Icon } from '../../components/Iconography/Icon';


export default {
    title:'Iconography',
    component: Icon
} as ComponentMeta<typeof Icon>

const handleClick = (e: MouseEvent<HTMLDivElement>)=>{
    console.log(e);
    
}


const Template:ComponentStory<typeof Icon> = (args) => {

    return<Icon {...args}/>
}

export const IconComponent = Template.bind({})
IconComponent.args={
    /* customIcon:<MX/>, */
    iconName:'Phone',
    size:30,
    color:'var(--neutral500)',
    
}