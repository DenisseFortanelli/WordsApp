import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import CardUsers from '../../components/CardUsers/CardUsers'

export default {
    title:'CardUsers',
    component: CardUsers
} as ComponentMeta<typeof CardUsers>



const Template:ComponentStory<typeof CardUsers> = (args) => {

    return<CardUsers {...args}/>
}

export const CardUsersComponent = Template.bind({})
CardUsersComponent.args={
    
    name:'Isaura Romero',
    email:'isa.romero@company.mx',
    phone:'+52 442 172 3740',
    country:'Mexico City (GMT-5)'

}