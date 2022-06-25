/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw'
import { SWAPI_BASE_URL } from './StarWars.service'

const mockedFilmsResposne = { count: 1, results: [{ title: 'film title 1' }] }
const mockedPeopleResposne = { count: 1, results: [{ name: 'people name 1' }] }
const mockedPlanetsResposne = { count: 1, results: [{ name: 'planet name 1' }] }

export const filmsHandler = rest.get(
  `${SWAPI_BASE_URL}/films`,
  async (req, res, ctx) => res(ctx.json(mockedFilmsResposne))
)

export const peopleHandler = rest.get(
  `${SWAPI_BASE_URL}/people`,
  async (req, res, ctx) => res(ctx.json(mockedPeopleResposne))
)

export const planetsHandler = rest.get(
  `${SWAPI_BASE_URL}/planets`,
  async (req, res, ctx) => res(ctx.json(mockedPlanetsResposne))
)
