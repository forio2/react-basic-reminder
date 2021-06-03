import React from 'react' 
import { ReminderScreenController } from './ReminderScreenController'
import { withController } from '../../hoc/withController'
import Summary from './Summary'
import Input from './Input'
import ReminderList from './ReminderList'

function ReminderScreen(){
    return(
        <div>
            <div>
                ReminderScreen
            </div>
            <Input />
            <ReminderList />
            <Summary />
        </div>
    )
}

export default withController(ReminderScreenController)(ReminderScreen)