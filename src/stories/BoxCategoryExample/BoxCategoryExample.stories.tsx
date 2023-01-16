import { ComponentMeta, ComponentStory } from '@storybook/react'
import BoxCategoryExample from '../../components/BoxCategory/BoxCategoryExample'

export default {
    title: 'BoxCaterogyExample',
    component: BoxCategoryExample
} as ComponentMeta<typeof BoxCategoryExample>

const Template: ComponentStory<typeof BoxCategoryExample> = (args) => {
    return <BoxCategoryExample {...args} />
}

export const BoxCategoryExampleComponent = Template.bind({})
BoxCategoryExampleComponent.args = {
    title: '🗂️  Norm-ISO 27000',
	word: 'Absolute phrase',
	description: 'DESCRIPTION',
	BodyDescription: 'is a term that has been used in the ecology of plants for two different indices. The older usage of the term refers to Ellenbergs indicator values from 1974, which are based on a simple ordinal classification of plants according to the position of their realized ecological niche along an environmental gradient.',
	definition: 'Alejandra Aguilar Escobar'
}