import PropTypes from 'prop-types';

const Frame = ({ className, header }) => (
  <>
    {/* You can use the className and header props as needed */}
    <div className={className}>
      {header && <h1>{header}</h1>}
      {/* Add more content here as necessary */}
    </div>
  </>
);

// Prop types validation
Frame.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
};

// Default props declaration
Frame.defaultProps = {
  className: '', // Default to an empty string
  header: 'Default Header', // Default to a placeholder header
};

export default Frame;
