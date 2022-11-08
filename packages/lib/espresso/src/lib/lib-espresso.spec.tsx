import { render } from '@testing-library/react';

import LibEspresso from './lib-espresso';

describe('LibEspresso', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibEspresso />);
    expect(baseElement).toBeTruthy();
  });
});
