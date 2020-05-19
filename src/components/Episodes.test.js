import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import Episodes from "./Episodes";

test( "Renders Episodes first w/o props, then w/ props", () => {
  const mockData = {
    id: '111',
    image: { large: 'large_image' },
    name: 'name',
    season: 1,
    number: 1,
    summary: '<p>Summary</p>',
    runtime: 1
  };
  const { getByText, queryAllByText, rerender, debug } =
    render( <Episodes episodes={ [] } /> );

  expect( queryAllByText( /season/i ) === null );
  rerender( <Episodes episodes={ [ mockData ] } /> );

  expect( queryAllByText( /Summary/i ) ).toHaveLength( 1 );

} );