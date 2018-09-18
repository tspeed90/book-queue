import React from 'react';
import Browse from './Browse';
import { render, cleanup } from 'react-testing-library';

afterAll(cleanup);

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

describe('Renders Browse component properly', () => {
  it('should render the h1 properly', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(
        mockResponse(200, null, {
          res: {
            results: [
              {
                amazon_product_url:
                  'http://www.amazon.com/Paper-Towns-John-Green/dp/014241493X?tag=NYTBS-20',
                asterisk: 0,
                bestsellers_date: '2015-08-08'
              }
            ],
            images: ['https://www.google.com']
          }
        })
      )
    );
    const { getByText } = render(<Browse />);
    const h1 = getByText(`Best Sellers in Young Adult`);
    expect(h1.textContent).toBe('Best Sellers in Young Adult');
  });
});
