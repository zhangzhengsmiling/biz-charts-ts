import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Legend,
  Tooltip,
} from 'bizcharts';

import { IPolylineChartProps, IPolylineChartOption, ShapeFunction } from './types';
import deepAssign from '../bar-chart/tools/deepAssign';

const defaultPolylineChartOption: Partial<IPolylineChartOption> = {
  width: undefined,
  height: 400,
  padding: 'auto',
  colors: ['rgb(133, 203, 255)', 'rgb(252, 224, 114)', 'purple'],
  axisOptions: [
    { isShow: true },
    { isShow: true },
  ],
  legendOption: {
    isShow: true,
    position: 'top',
  },
  tooltipOption: {
    crosshairs: {
      type: 'y',
    }
  },
  pointOption: {
    isShow: true,
    size: 4,
    shapes: ['circle', 'square'],
  },
  lineOption: {
    isShow: true,
    size: 2,
  },
}

const createPolylineChartTemp = (tempOption: Partial<IPolylineChartOption> = {}) => {
  return (props: IPolylineChartProps) => {
    let { data, option } = props;
    const {
      width,
      height,
      padding,
      colors,
      distinctProp,
      axis,
      axisOptions,
      legendOption,
      tooltipOption,
      pointOption,
      lineOption,
    } = deepAssign(defaultPolylineChartOption, tempOption, option);

    const scale = {
      [axis[0]]: {
        alias: axisOptions && axisOptions[0] && axisOptions[0].title && axisOptions[0].title.alias,
        tickCount: axisOptions && axisOptions[0] && axisOptions[0].label && axisOptions[0].label.tickCount,
        tickInterval: axisOptions && axisOptions[0] && axisOptions[0].label && axisOptions[0].label.tickInterval,
      },
      [axis[1]]: {
        alias: axisOptions && axisOptions[1] && axisOptions[1].title && axisOptions[1].title.alias,
        tickCount: axisOptions && axisOptions[1] && axisOptions[1].label && axisOptions[1].label.tickCount,
        tickInterval: axisOptions && axisOptions[1] && axisOptions[1].label && axisOptions[1].label.tickInterval,
      }
    };
    const mapShape: (distinctProps: string | undefined, shapes: ShapeFunction | string[] | undefined) => string | [string, string[]] | [string, ShapeFunction] = (distinctProp: string | undefined, shapes: ShapeFunction | string[] = ['circle', 'square', 'triangle']) => {
      if (distinctProp) {
        if (shapes instanceof Function) {
          return [distinctProp, shapes as ShapeFunction];
        } else {
          return [distinctProp, shapes as string[]];
        }
      }
      return (shapes as string[])[0];
    }

    return (
      <Chart
        height={height}
        padding={padding}
        data={data}
        scale={scale}
        forceFit={width ? false : true}>
        {
          legendOption && legendOption.isShow ? (
            <Legend
              name={distinctProp}
              position={legendOption.position}
              title={legendOption.title}
              itemGap={legendOption.itemGap}
              background={legendOption.background}
              itemFormatter={legendOption.itemFormatter}
              marker={legendOption.marker}
            />
          ) : ''
        }
        <Axis name={axis[0]}
          visible={axisOptions && axisOptions[0] && axisOptions[0].isShow}
          position={axisOptions && axisOptions[0] && axisOptions[0].position}
          title={axisOptions && axisOptions[0] && axisOptions[0].title ? { ...axisOptions[0].title } : null}
          line={axisOptions && axisOptions[0] && axisOptions[0].line ? axisOptions[0].line : {}}
          tickLine={axisOptions && axisOptions[0] && axisOptions[0].tickLine ? axisOptions[0].tickLine : {}}
          label={axisOptions && axisOptions[0] && axisOptions[0].label ? axisOptions[0].label : {}}
          grid={axisOptions && axisOptions[0] && axisOptions[0].grid ? axisOptions[0].grid : null}
        />
        <Axis name={axis[1]}
          visible={axisOptions && axisOptions[1] && axisOptions[1].isShow}
          position={axisOptions && axisOptions[1] && axisOptions[1].position}
          title={axisOptions && axisOptions[1] && axisOptions[1].title ? { ...axisOptions[1].title } : null}
          line={axisOptions && axisOptions[1] && axisOptions[1].line ? axisOptions[1].line : null}
          tickLine={axisOptions && axisOptions[1] && axisOptions[1].tickLine ? axisOptions[1].tickLine : null}
          label={axisOptions && axisOptions[1] && axisOptions[1].label ? axisOptions[1].label : {}}
          grid={axisOptions && axisOptions[1] && axisOptions[1].grid ? axisOptions[1].grid : {}}
        />
        <Tooltip
          title={axis[0]}
          showTitle={tooltipOption ? tooltipOption.showTitle : true}
          crosshairs={tooltipOption ? tooltipOption.crosshairs : {}}
          useHtml={tooltipOption ? tooltipOption.useHtml : true}
          triggerOn={tooltipOption ? tooltipOption.triggerOn : 'mousemove'}
          shared={tooltipOption ? tooltipOption.shared : true}
          htmlContent={tooltipOption ? tooltipOption.htmlContent : undefined}
        />
        {
          lineOption && lineOption.isShow ? (
            <Geom
              type="line"
              position={`${axis[0]}*${axis[1]}`}
              size={1}
              color={distinctProp === undefined ? (colors as string[])[0] : [distinctProp as string, colors as string[]]}
            />
          ) : ''
        }
        {
          pointOption && pointOption.isShow ? (
            <Geom
              type="point"
              shape={mapShape(distinctProp, pointOption.shapes)}
              color={distinctProp === undefined ? (colors as string[])[0] : [distinctProp, colors as string[]]}
              position={`${axis[0]}*${axis[1]}`}
              size={pointOption && pointOption.size}
              style={pointOption && pointOption.style}
            />
          ) : ''
        }
      </Chart>
    );
  }
}

export default createPolylineChartTemp;
