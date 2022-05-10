import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Card from '../src/index';
import Icon from './assets/icon-workbook.svg';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Card',
  decorators: [withKnobs],
  component: Card,
};

export const Card_no_click_story = () => (
  <Card
    heading='Experiment'
    subHeading='+ CREATE NEW'
    description='Select an existing template to create an experiment from'
    icon={Icon}
    className='testclass'
  />
);

Card_no_click_story.story = {
  name: 'Card with no click',
};

export const Card_clickable_story = () => (
  <Card
    onClick={() => alert('hi')}
    heading='Experiment from template'
    subHeading='+ CREATE NEW'
    description='Create an experiment using an existing template. This will help get started quicker.'
    icon={Icon}
  />
);

Card_clickable_story.story = {
  name: 'Card with click',
};

export const Card_no_icon_story = () => (
  <Card
    onClick={() => alert('hi')}
    heading='Experiment from template'
    subHeading='+ CREATE NEW'
    description='Create an experiment using an existing template. This will help get started quicker.'
  />
);

Card_no_icon_story.story = {
  name: 'Card with no icon',
};
