import {ComponentMeta, ComponentStory} from '@storybook/react'
import CardsTable from '../../components/CardsUserTable/CardsUserTable'


export default {
    title:'Cards',
    component: CardsTable
} as ComponentMeta<typeof CardsTable>



const Template:ComponentStory<typeof CardsTable> = (args) => {

    return<CardsTable {...args}/>
}

export const CardsTableComponent = Template.bind({})
CardsTableComponent.args={
    name:'Isaura Romero',
    email:'isa.romero@company.mx',
    phone:'+52 442 172 3740',
    country:'Mexico City (GMT-5)',
    checked: true,

}