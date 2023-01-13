import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import CardsGlossary from '../../components/CardsGlossary/CardsGlossary';

export default {
    title:'Cards',
    component: CardsGlossary
} as ComponentMeta<typeof CardsGlossary>

const handleClick = (e: MouseEvent<HTMLDivElement>)=>{
    console.log(e);
    
}

const Template:ComponentStory<typeof CardsGlossary> = (args) => {

    return<CardsGlossary {...args}/>
}

export const CardsGlossaryComponent = Template.bind({})
CardsGlossaryComponent.args={
    header:'Adjectival',
    body:'A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ...',
    user:'Denisse'
}