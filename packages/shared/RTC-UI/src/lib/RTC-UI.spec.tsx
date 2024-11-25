import { render } from '@testing-library/react';

import RTCUI from './RTC-UI';

describe('RTCUI', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RTCUI />);
    expect(baseElement).toBeTruthy();
  });
});
