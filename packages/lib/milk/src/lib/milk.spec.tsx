import { render } from '@testing-library/react';

import Milk from './milk';

describe('Milk', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Milk />);
    expect(baseElement).toBeTruthy();
  });
});
