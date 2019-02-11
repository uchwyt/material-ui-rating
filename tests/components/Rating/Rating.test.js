/**
 * Created by marcin on 06.12.16.
 */
import renderer from 'react-test-renderer';
import React from 'react';
import Rating from '../../../src/components/Rating/Rating';

describe('Rating', function () {
  const handleChange = () => true;
  it('render with default props', () => {
    'use strict';
    const tree = renderer
    .create(<Rating />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render with onClick', () => {
    'use strict';
    const tree = renderer
    .create(<Rating onChange={handleChange} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render with custom classes', () => {
    'use strict';
    const tree = renderer
    .create(<Rating className='rating-test' containerClass='rating-container-test' iconClass='custom-icon-class' />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render disabled', () => {
    'use strict';
    const tree = renderer
    .create(<Rating disabled />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render in read only mode', () => {
    'use strict';
    const tree = renderer
    .create(<Rating readOnly />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render in read only mode with onChange', () => {
    'use strict';
    const tree = renderer
    .create(<Rating readOnly onChange={handleChange} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render with custom value, max value and fractions ', () => {
    'use strict';
    const tree = renderer
    .create(<Rating value={3.5} max={10} fractions={2} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render with tooltip', () => {
    'use strict';
    const tree = renderer
    .create(<Rating tooltip={<p>Test tooltip</p>} tooltipPosition='top' tooltipStyles={{margin: 5}} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render with custom style', () => {
    'use strict';
    const tree = renderer
    .create(<Rating itemStyle={{backgroundColor: '#000'}} style={{color: 'red'}} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render with customIcons', () => {
    'use strict';
    const Icon = '<span>Icon</span>';
    const IconFilled = '<span>filled</span>';
    const IconHovered = '<span>hovered</span>';
    const IconHalf = '<span>half</span>';

    const tree = renderer
    .create(<Rating iconFilled={IconFilled} iconHovered={IconHovered} fractions={2} value={2.5} iconNormal={Icon} iconHalf={IconHalf} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render with custom icon renderer', () => {
    'use strict';
    const rendererNormal = ({index}) => <span>{index}</span>;
    const rendererFilled = ({index}) => <span>{index} filled</span>;
    const rendererHover = ({index}) => <span>{index} hover</span>;
    const rendererHalf = ({index}) => <span>{index} half</span>;

    const tree = renderer
    .create(<Rating
      iconHoveredRenderer={rendererHover}
      iconFilledRenderer={rendererFilled}
      iconHalfRenderer={rendererHalf}
      iconNormalRenderer={rendererNormal}
      fractions={2}
      value={2.5}
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
