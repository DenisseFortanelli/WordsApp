import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MouseEvent } from 'react'
import { SelectAll } from '../../components/Button/SelectAll/SelectAll';

export default {
	title: 'Button',
	component: SelectAll
} as ComponentMeta<typeof SelectAll>

const handleClick = (e: MouseEvent<HTMLDivElement>) => {
	console.log(e);

}

const Template: ComponentStory<typeof SelectAll> = (args) => {

	return <SelectAll {...args} />
}

export const SelectAllComponent = Template.bind({})
SelectAllComponent.args = {
	onClick: handleClick,
	isChecked:()=>{}
}