import classNames from 'classnames';

import { ButtonAppearance, ButtonType } from '../../utils/types';

import Loader from './loader';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  button: ButtonType;
  appearance?: ButtonAppearance;
  compact?: boolean;
  handleClick?: React.MouseEventHandler;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  button,
  appearance,
  compact = false,
  handleClick,
  loading = false,
  type,
}) => {
  return (
    <button onClick={handleClick} type={type}>
      <div
        className={classNames(
          // Common classes
          'flex w-full justify-center lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md',
          // Full-size button
          {
            'px-8 py-4': compact === false,
          },
          // Compact button
          {
            'px-6 py-2': compact === true,
          },
          // Specific to when the button is fully dark
          {
            'bg-primary-600 text-white border-primary-600':
              appearance === 'dark',
          },
          // Specific to when the button is dark outlines
          {
            'text-primary-600 border-primary-600':
              appearance === 'dark-outline',
          },
          // Specific to when the button is fully white
          {
            'bg-white text-primary-600 border-white': appearance === 'white',
          },
          // Specific to when the button is white outlines
          {
            'text-white border-white': appearance === 'white-outline',
          }
        )}
      >
        {loading && <Loader />}
        {button.text}
      </div>
    </button>
  );
};

export default Button;
