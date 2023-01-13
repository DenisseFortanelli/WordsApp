import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MouseEvent } from 'react'
import { BtnDeleteUser } from '../../components/Button/BtnDeleteUser/BtnDeleteUser';


export default {
	title: 'Button',
	component: BtnDeleteUser
} as ComponentMeta<typeof BtnDeleteUser>

const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
	console.log(e);
}

const Template: ComponentStory<typeof BtnDeleteUser> = (args) => {

	return <BtnDeleteUser {...args} />
}

export const BtnDeleteUserComponent = Template.bind({})
BtnDeleteUserComponent.args = {
	iconName: 'Trash',
}