import React from 'react';

import Button from './Button'

export default {
    title: 'Button',
    component:Button
}

//we create a "templatr" of how args maps to rendering
const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = { backgroundColor: '#ff2', label: 'Button' };