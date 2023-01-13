import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import CountWords from '../../components/Button/CountWords/CountWords';

export default {
    title:'Button',
    component: CountWords
} as ComponentMeta<typeof CountWords>

const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
    console.log(e);
    
}

const Template:ComponentStory<typeof CountWords> = (args) => {

    return<CountWords {...args}/>
}

export const CountWordsComponent = Template.bind({})
CountWordsComponent.args={
    number:2,
    onClick:handleClick,
}