import { ComponentMeta, ComponentStory } from '@storybook/react'
import ToggleButtonGlossaryExample from '../../components/ToggleButtonGlossaryExample/ToggleButtonGlossaryExample'

export default {
    title: 'Button',
    component: ToggleButtonGlossaryExample
} as ComponentMeta<typeof ToggleButtonGlossaryExample>

const Template: ComponentStory<typeof ToggleButtonGlossaryExample> = (args) => {

    return <ToggleButtonGlossaryExample {...args} />
}

export const ToggleButtonGlossaryExampleComponent = Template.bind({})
ToggleButtonGlossaryExampleComponent.args = {
    values: ['Words', 'Categories'],
   

}