import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FeedbackOptionsSection,FeedbackOptionsButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsSection>
      {options.map(e => {
        return (
          <FeedbackOptionsButton
            key={nanoid()}
            onClick={() => onLeaveFeedback(e)}
            type="button"
          >
            {e}
          </FeedbackOptionsButton>
        );
      })}
    </FeedbackOptionsSection>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
