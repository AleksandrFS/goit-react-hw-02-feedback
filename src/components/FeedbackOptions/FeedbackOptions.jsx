import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.buttons}>
      {options.map(name => {
        return (
          <button
            className={css.button}
            type="button"
            key={name}
            name={name}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};


FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
