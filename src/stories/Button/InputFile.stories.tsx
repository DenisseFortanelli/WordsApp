import { ComponentMeta, ComponentStory } from '@storybook/react'
import { InputFile } from '../../components/InputFile/InputFile';

export default {
	title: 'Button',
	component: InputFile
} as ComponentMeta<typeof InputFile>

const Template: ComponentStory<typeof InputFile> = (args) => {
	return <InputFile {...args} />
}

export const InputFileComponent = Template.bind({})
InputFileComponent.args = {
	name: 'image'
}