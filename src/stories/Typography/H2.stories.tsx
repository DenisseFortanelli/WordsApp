import {ComponentMeta, ComponentStory} from '@storybook/react'
import H2 from '../../components/Typhography/H2'


export default {
    title:'Typography',
    component: H2
} as ComponentMeta<typeof H2>

const Template:ComponentStory<typeof H2> = (args) => {

    return<H2 {...args}>Green House</H2>
}

export const H2Component = Template.bind({})