import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Card from './Card';

test('renders text props when passed to component', () => {
  const { getByText } = render(
    <Card heading='test heading' subHeading='test subheading' description='test description' />
  );

  expect(getByText('test heading')).toBeInTheDocument();
  expect(getByText('test subheading')).toBeInTheDocument();
  expect(getByText('test description')).toBeInTheDocument();
});

test('calls click function when card is clicked', () => {
  const spy = jest.fn();
  const { getByText } = render(<Card heading='Heading' onClick={spy} />);

  fireEvent.click(getByText('Heading'));
  expect(spy).toHaveBeenCalled();
});

test('renders icon with default alt text', () => {
  const { getByAltText } = render(<Card icon='dummyIcon' />);
  expect(getByAltText('Card icon')).toBeInTheDocument();
});

test('renders icon with alt text from props', () => {
  const { getByAltText } = render(<Card icon='dummyIcon' alt='test alt text' />);
  expect(getByAltText('test alt text')).toBeInTheDocument();
});

test('does not render icon if props.icon not passed', () => {
  const { queryByAltText } = render(<Card />);
  expect(queryByAltText('Card icon')).not.toBeInTheDocument();
});
