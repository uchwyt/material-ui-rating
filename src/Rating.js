import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';
import ToggleStar from '@material-ui/icons/Star';
import ToggleStarBorder from '@material-ui/icons/StarBorder';
import ToggleStarHalf from '@material-ui/icons/StarHalf';
import { makeStyles } from '@material-ui/styles';
import cx from 'clsx';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    padding: 0,
    width: 'auto',
    height: 'auto',
  },
  tooltip: {
    display: 'inline-block',
  },
  icon: {
    color: orange.A700,
  },
  disabled: {
    color: grey[900],
  },
  disabledPointer: {
    pointerEvents: 'none'
  }
});

const Rating = ({value, className, itemStyle, disabled, onChange, readOnly, max, ...props}) => {
  const [hoverValue, setHoverValue] = useState(value);
  const classes = useStyles();

  const renderIcon = useCallback(i => {
    const filled = i <= Math.ceil(value);
    const hovered = i <= Math.ceil(hoverValue);
    const half = (i === Math.ceil(value) && i > Math.floor(value));

    if ((hovered && !filled) || (!hovered && filled)) {
      return props.iconHoveredRenderer ? props.iconHoveredRenderer({
        ...props,
        index: i
      }) : (props.iconHovered || <ToggleStarBorder classes={{root: cx(props.iconClass, classes.icon)}}/>);
    } else if (filled && !half) {
      return props.iconFilledRenderer ? props.iconFilledRenderer({
        ...props,
        index: i
      }) : (props.iconFilled || <ToggleStar classes={{root: cx(props.iconClass, classes.icon)}}/>);
    } else if (filled && half) {
      return props.iconHalfRenderer ? props.iconHalfRenderer({
        ...props,
        index: i
      }) : (props.iconHalf || <ToggleStarHalf classes={{root: cx(props.iconClass, classes.icon)}}/>);
    } else {
      return props.iconNormalRenderer ? props.iconNormalRenderer({
        ...props,
        index: i
      }) : (props.iconNormal || <ToggleStarBorder classes={{root: cx(props.iconClass, classes.disabled)}}/>);
    }
  }, [value, hoverValue, props]);

  const rating = React.useMemo(() => {
    let tmp = [];
    for (let i = 1; i <= max; i++) {
      tmp.push(
        <IconButton
          key={i}
          classes={{
            root: cx(classes.root, props.className),
          }}
          href='#'
          disabled={disabled}
          style={itemStyle}
          onMouseEnter={() => setHoverValue(i)}
          onMouseLeave={() => setHoverValue(value)}
          onClick={() => {
            if (!readOnly && onChange) {
              onChange(i)
            }
          }}
        >
          {renderIcon(i)}
        </IconButton>
      )
    }
    return tmp;
  }, [max, disabled, itemStyle, value, readOnly, className, onChange]);

  return (
    <Tooltip id='tooltip-icon' classes={{tooltip: cx(classes.tooltip, props.containerClass)}} title={hoverValue || value} placement={props.tooltipPosition}>
      <div>
        <div className={cx({[classes.disabledPointer]: disabled || readOnly})} style={props.style}>
          {rating}
        </div>
      </div>
    </Tooltip>
  )
};

Rating.defaultProps = {
  disabled: false,
  tooltipPosition: 'bottom',
  max: 5,
  readOnly: false,
  value: 0,
  fractions: 1,
};

Rating.propTypes = {
  className: PropTypes.string,
  containerClass: PropTypes.string,
  disabled: PropTypes.bool,
  iconFilled: PropTypes.node,
  iconHovered: PropTypes.node,
  iconNormal: PropTypes.node,
  iconHalf: PropTypes.node,
  tooltip: PropTypes.node,
  tooltipRenderer: PropTypes.func,
  tooltipPosition: PropTypes.string,
  tooltipStyles: PropTypes.object,
  iconFilledRenderer: PropTypes.func,
  iconHalfRenderer: PropTypes.func,
  iconHoveredRenderer: PropTypes.func,
  iconNormalRenderer: PropTypes.func,
  itemStyle: PropTypes.object,
  iconClass: PropTypes.string,
  max: PropTypes.number,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  style: PropTypes.object,
  value: PropTypes.number,
  fractions: PropTypes.number,
};

export default Rating;
