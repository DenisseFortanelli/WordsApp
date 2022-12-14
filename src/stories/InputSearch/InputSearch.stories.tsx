
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputSearch } from '../../components/InputSearchs/InputSearch';


export default {
	title: 'Input',
	component: InputSearch,
} as ComponentMeta<typeof InputSearch>

const handleClick = () => {

}

const Template: ComponentStory<typeof InputSearch> = (args) => {
	return <InputSearch {...args} />
}

export const InputSearchComponent = Template.bind({})
InputSearchComponent.args = {
	size: 'lg',
	type: 'text',
	text: 'Search User',
	icon: 'MagnifyingGlass',
	eventHandler: handleClick,
}