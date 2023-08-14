import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from '../components/searchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

export const Default = () => <SearchBar />;
export const Template = args => <SearchBar {...args}/> 
export const Custom = Template.bind({})
Custom.args ={
  size: "12px",
  color: "red",
}
