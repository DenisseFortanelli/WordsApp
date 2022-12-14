import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import HomeCards from '../../components/HomeCards/HomeCards';

export default {
    title:'HomeCards',
    component: HomeCards
} as ComponentMeta<typeof HomeCards>

const handleClick = (e: MouseEvent<HTMLDivElement>)=>{
    console.log(e);
    
}

const Template:ComponentStory<typeof HomeCards> = (args) => {

    return<HomeCards {...args}/>
}

export const HomeCardsComponent = Template.bind({})
HomeCardsComponent.args={
    
    header:'Adjectival',
    body:'A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ...',
    onClick:handleClick,
}