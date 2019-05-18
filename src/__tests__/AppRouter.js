import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";

import Routes from '../routers/AppRouter';
import NestList from "../components/NestList";
import NestDetails from "../components/NestDetails";

const renderRoutes = path =>
  mount(
    <MemoryRouter initialEntries={[path]}>
        <Routes />
    </MemoryRouter>
  );
describe("#routes", () => {
  it("renders home page on initial route", () => {
    const component = renderRoutes("/");

    expect(component.find(NestList)).toHaveLength(1);
  });
  it("renders detail page for nest", () => {
    const component = renderRoutes("/29484001");

    expect(component.find(NestDetails)).toHaveLength(1);
  });
});