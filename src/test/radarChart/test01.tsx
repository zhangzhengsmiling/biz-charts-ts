import React, { Component } from 'react';
import createRadarChartTemp from '../../components/radar-chart';
import {
  IRadarCharOption,
} from '../../components/radar-chart/types';

const RadarChart = createRadarChartTemp({})

const RadarChartTest01 = () => {
  const data = [
    {
      item: "Design",
      user: 'a',
      score: 60,
    },
    {
      item: "Design",
      score: 30,
      user: 'b',
    },
    {
      item: "Development",
      score: 60,
      user: 'a',
    },
    {
      item: "Development",
      score: 40,
      user: 'b',
    },
    {
      item: "Marketing",
      score: 50,
      user: 'a',
    },
    {
      item: "Marketing",
      score: 60,
      user: 'b',
    },
    {
      item: "Users",
      score: 40,
      user: 'a',
    },
    {
      item: "Users",
      score: 50,
      user: 'b',
    },
    {
      item: "Test",
      score: 60,
      user: 'a',
    },
    {
      itemm: 'Test',
      score: 70,
      user: 'b',
    },
    {
      item: "Language",
      score: 70,
      user: 'a',
    },
    {
      item: "Language",
      score: 50,
      user: 'b',
    },
    {
      item: "Technology",
      score: 50,
      user: 'a',
    },
    {
      item: "Technology",
      score: 40,
      user: 'b',
    },
    {
      item: "Support",
      score: 30,
      user: 'a',
    },
    {
      item: "Support",
      score: 40,
      user: 'b',
    },
    {
      item: "Sales",
      score: 60,
      user: 'a',
    },
    {
      item: "Sales",
      score: 40,
      user: 'b'
    },
    {
      item: "UX",
      score: 50,
      user: 'a',
    },
    {
      item: "UX",
      score: 60,
      user: 'b',
    },
  ];
  const options: IRadarCharOption = {
    height: 500,
    axis: ['item', 'score'],
    distinctProp: 'user',
  }
  return (
    <RadarChart
      data={data}
      options={options}
    />
  )
}

export default RadarChartTest01;
