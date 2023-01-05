
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BannerGlossary from '../../components/Images/BannerGlossary';


export default {
	title: 'BannerGlossary',
	component: BannerGlossary,
} as ComponentMeta<typeof BannerGlossary>



const Template: ComponentStory<typeof BannerGlossary> = (args) => {
	return <BannerGlossary {...args} />
}

export const BannerGlossaryComponent = Template.bind({})
BannerGlossaryComponent.args = {
	/* tittle:'Term sets simplify searching for definitions',
    body:'With the term sets you can find definitions in a simple and easy way. You can associate multiple words within a Category.',
     */
	
}