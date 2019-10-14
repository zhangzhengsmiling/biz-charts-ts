import React, { FC } from 'react';
import { IPolylineChartOption } from '../../components/polyline-chart/types';
import createPolylineTemp from '../../components/polyline-chart';
const PolylineChart = createPolylineTemp();

const PolylineTest01:FC<{}> = () => {
  const data = [
    {
      month: 'Jan',
      city: 'China',
      revenue: 7,
    },
    {
      month: 'Jan',
      city: 'Oversea',
      revenue: 3.9,
    },
    {
      month: 'Feb',
      city: 'China',
      revenue: 6.9,
    },
    {
      month: 'Feb',
      city: 'Oversea',
      revenue: 4.2,
    },
    {
      month: 'Mar',
      city: 'China',
      revenue: 9.5,
    },
    {
      month: 'Mar',
      city: 'Oversea',
      revenue: 5.7,
    },
    {
      month: 'Apr',
      city: 'China',
      revenue: 14.5,
    },
    {
      month: 'Apr',
      city: 'Oversea',
      revenue: 8.5,
    },
    {
      month: 'May',
      city: 'China',
      revenue: 18.4,
    },
    {
      month: 'May',
      city: 'Oversea',
      revenue: 11.9,
    },
    {
      month: 'Jun',
      city: 'China',
      revenue: 21.5,
    },
    {
      month: 'Jun',
      city: 'Oversea',
      revenue: 15.2,
    },
    {
      month: 'Jul',
      city: 'China',
      revenue: 25.2,
    },
    {
      month: 'Jul',
      city: 'Oversea',
      revenue: 17,
    },
    {
      month: 'Aug',
      city: 'China',
      revenue: 26.5,
    },
    {
      month: 'Aug',
      city: 'Oversea',
      revenue: 16.6,
    },
    {
      month: 'Sep',
      city: 'China',
      revenue: 23.3,
    },
    {
      month: 'Sep',
      city: 'Oversea',
      revenue: 14.2,
    },
    {
      month: 'Oct',
      city: 'China',
      revenue: 18.3,
    },
    {
      month: 'Oct',
      city: 'Oversea',
      revenue: 10.3,
    },
    {
      month: 'Nov',
      city: 'China',
      revenue: 13.9,
    },
    {
      month: 'Nov',
      city: 'Oversea',
      revenue: 6.6,
    },
    {
      month: 'Dec',
      city: 'China',
      revenue: 9.6,
    },
    {
      month: 'Dec',
      city: 'Oversea',
      revenue: 4.8,
    },
  ];
  const option: IPolylineChartOption = {
    axis: ['month', 'revenue'],
    distinctProp: 'city',
  }
  return (
    <PolylineChart data={data} option={option} />
  )
}


export default PolylineTest01;
