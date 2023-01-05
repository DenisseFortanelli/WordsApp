import { ComponentMeta, ComponentStory } from '@storybook/react';
import ModalNewCategory from '../../components/Modal/ModalNewCategory/ModalNewCategory';


export default {
	title: 'ModalGlossary',
	component: ModalNewCategory,
} as ComponentMeta<typeof ModalNewCategory>



const Template: ComponentStory<typeof ModalNewCategory> = (args) => {
	return <ModalNewCategory/>
}

export const ModalNewCategoryComponent = Template.bind({})
ModalNewCategoryComponent.args = {
	
}