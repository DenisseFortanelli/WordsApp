import {ComponentMeta, ComponentStory} from '@storybook/react'
import H3 from '../../components/Typhography/H3'


export default {
    title:'Typography',
    component: H3
} as ComponentMeta<typeof H3>

const Template:ComponentStory<typeof H3> = (args) => {

    return<H3 {...args}>Green House</H3>
}

export const H3Component = Template.bind({})