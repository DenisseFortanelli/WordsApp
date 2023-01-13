import {ComponentMeta, ComponentStory} from '@storybook/react'
import { BoxCategory } from '../../components/BoxCategory/BoxCategory';

export default {
    title:'BoxCaterogy',
    component: BoxCategory
} as ComponentMeta<typeof BoxCategory>

const Template:ComponentStory<typeof BoxCategory> = (args) => {
    return<BoxCategory {...args}/>
}

export const BoxCategoryComponent = Template.bind({})
BoxCategoryComponent.args={
title: '🗂️ Norm-ISO 27000',
word: 'Absolute phrase',
}