import React from "react";
import { render, waitFor } from "@testing-library/react";
// import userEvent from '@testing-library/user-event';
import { fetchShow as mockFetchShow } from "./api/fetchShow";


import App from "./App";

//Use jest to mock the async function
jest.mock( "./api/fetchShow" );

// test( 'App renders w/o errors', () => {
//   render( <App /> );
// } );

test( "App fetches and then renders show data", async () => {
  const mockData = {
    id: '111',
    image: { large: 'large_image' },
    name: 'name',
    season: 1,
    number: 1,
    summary: '<p>Summary</p>',
    runtime: 1
  };

  mockFetchShow.mockResolvedValueOnce( mockData );
  const { queryAllByText } = render( <App /> );
  await waitFor( () => expect( queryAllByText( /Summary/i ) ).toHaveLength( 1 ) );
} );