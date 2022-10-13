import React, { useState } from 'react';

import { IconsEnum } from '@components/SvgIcon';
import { Text, TextVariantsEnum } from '@components/Text';

import { ButtonProps } from './Button.types';
import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    width: {
      control: {
        type: 'select',
      },
      options: ['content', 'full'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'outlined', 'text'],
    },
    iconPosition: {
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
    },
  },
};

const Template = ({
  showIcon,
  ...args
}: ButtonProps & { showIcon: boolean }) => {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setCounter(counter + 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <>
      <Text variant={TextVariantsEnum.Body_L}>Counter: {counter}</Text>
      <Button
        onClick={handleClick}
        loading={isLoading}
        icon={showIcon ? IconsEnum.search : null}
        {...args}
      />
    </>
  );
};

export const button = Template.bind({});
button.args = {
  text: 'Click me',
  variant: 'primary',
  disabled: false,
  width: 'content',
  showIcon: true,
  iconPosition: 'left',
};
