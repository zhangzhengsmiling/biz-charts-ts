import React, { FC } from 'react';
import createBarChartTemp from '../../components/bar-chart';
import { IBarChartOption } from '../../components/bar-chart/types';

const BarChart = createBarChartTemp();

const Test01: FC<{}> = () => {
  const data = [
    { name: '伦敦', month: '一月', rain: 155 },
    { name: '伦敦', month: '二月', rain: 148 },
    { name: '伦敦', month: '三月', rain: 136 },
    { name: '伦敦', month: '四月', rain: 122 },
    { name: '伦敦', month: '五月', rain: 145 },
    { name: '伦敦', month: '六月', rain: 178 },
    { name: '伦敦', month: '七月', rain: 111 },
    { name: '伦敦', month: '八月', rain: 126 },
    { name: '伦敦', month: '九月', rain: 115 },
    { name: '伦敦', month: '十月', rain: 100 },
    { name: '伦敦', month: '十一月', rain: 180 },
    { name: '伦敦', month: '十二月', rain: 155 },
    { name: '柏林', month: '一月', rain: 152 },
    { name: '柏林', month: '二月', rain: 150 },
    { name: '柏林', month: '三月', rain: 162 },
    { name: '柏林', month: '四月', rain: 150 },
    { name: '柏林', month: '五月', rain: 125 },
    { name: '柏林', month: '六月', rain: 111 },
    { name: '柏林', month: '七月', rain: 180 },
    { name: '柏林', month: '八月', rain: 134 },
    { name: '柏林', month: '九月', rain: 144 },
    { name: '柏林', month: '十月', rain: 150 },
    { name: '柏林', month: '十一月', rain: 111 },
    { name: '柏林', month: '十二月', rain: 120 },
  ]
  const option: IBarChartOption = {
    axis: ['month', 'rain'],
    distinctProp: 'name',
  }
  return (<BarChart data={data} option={option} />)
}

export default Test01;
