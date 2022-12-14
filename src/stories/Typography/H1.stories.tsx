import {ComponentMeta, ComponentStory} from '@storybook/react'
import H1 from '../../components/Typhography/H1'


export default {
    title:'Typography',
    component: H1
} as ComponentMeta<typeof H1>

const Template:ComponentStory<typeof H1> = (args) => {

    return<H1 {...args}>Green House</H1>
}

export const H1Component = Template.bind({})