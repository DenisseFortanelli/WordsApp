
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RectangleImg from '../../components/Images/RectangleImg';


export default {
	title: 'HeaderHome',
	component: RectangleImg,
} as ComponentMeta<typeof RectangleImg>



const Template: ComponentStory<typeof RectangleImg> = (args) => {
	return <RectangleImg />
}

export const RectangleImgComponent = Template.bind({})
RectangleImgComponent.args = {
	
}