import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Legend,
} from "bizcharts";
import { IRadarCharOption, IRadarChartProps } from './types';
import { ShapeFunction } from '../polyline-chart/types';
import deepAssign from "../bar-chart/tools/deepAssign";

const defaultRadarChartOption: IRadarCharOption = {
  height: 400,
  width: undefined,
  padding: 'auto',
  colors: ['rgb(133, 203, 255)', 'rgb(252, 224, 114)', 'purple'],
  distinctProp: 'user',
  axis: ['item', 'score'],
  axisOptions: [
    { isShow: false },
    {
      isShow: true,
      label: {
        formatter: () => ''
      }
    },
  ],
  labelOption: {
  },
  legendOption: {
    isShow: true,
  },
  tooltipOption: {},
  lineOption: {
    isShow: true,
    size: 2,
  },
  pointOption: {
    isShow: true,
    shapes: ["circle"],
  }
}

export default function createRadarChartTemp(tempOptions: Partial<IRadarCharOption> = {}) {
  return (props: IRadarChartProps) => {
    // render() {
    const { data, options } = props;
    const {
      width,
      height,
      padding,
      distinctProp,
      colors,
      axis,
      axisOptions,
      legendOption,
      labelOption,
      tooltipOption,
      lineOption,
      pointOption,
    } = deepAssign(defaultRadarChartOption, tempOptions, options);
    const cols = {
      [axis[0]]: {
        alias: axisOptions && axisOptions[0] && axisOptions[0].title && axisOptions[0].title.alias,
        tickCount: axisOptions && axisOptions[0] && axisOptions[0].label && axisOptions[0].label.tickCount,
        tickInterval: axisOptions && axisOptions[0] && axisOptions[0].label && axisOptions[0].label.tickInterval,
      },
      [axis[1]]: {
        min: 0,
        alias: axisOptions && axisOptions[1] && axisOptions[1].title && axisOptions[1].title.alias,
        tickCount: axisOptions && axisOptions[1] && axisOptions[1].label && axisOptions[1].label.tickCount,
        tickInterval: axisOptions && axisOptions[1] && axisOptions[1].label && axisOptions[1].label.tickInterval,
      }
    };
    return (
      <div>
        <Chart
          height={height || 400}
          width={width}
          data={data}
          padding={padding}
          scale={cols}
          forceFit={width ? false : true}
        >
          <Coord type="polar" radius={0.8} />
          {
            axisOptions && axisOptions[0].isShow ? (
              <Axis
                name={axis[0]}
                line={null}
                tickLine={null}
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
          <Tooltip
            title={axis[0]}
            showTitle={tooltipOption ? tooltipOption.showTitle : true}
            crosshairs={tooltipOption ? tooltipOption.crosshairs : {}}
            useHtml={tooltipOption ? tooltipOption.useHtml : true}
            triggerOn={tooltipOption ? tooltipOption.triggerOn : 'mousemove'}
            shared={tooltipOption ? tooltipOption.shared : true}
            htmlContent={tooltipOption ? tooltipOption.htmlContent : undefined}
          />
          <Geom
            type="area"
            position={`${axis[0]}*${axis[1]}`}
            color={distinctProp ? ([distinctProp, colors as string[]] || [distinctProp, colors as ShapeFunction]) : (colors && (colors as string[])[0])}
          />
          {
            lineOption && lineOption.isShow ? (
              <Geom
                type="line"
                position={`${axis[0]}*${axis[1]}`}
                color={distinctProp ? ([distinctProp, colors as string[]] || [distinctProp, colors as ShapeFunction]) : (colors && (colors as string[])[0])}
                size={lineOption.size}
              />
            ) : ''
          }
          {
            pointOption && pointOption.isShow ? (
              <Geom
                type="point"
                position={`${axis[0]}*${axis[1]}`}
                color={distinctProp ? [distinctProp, colors as string[]] : (colors && (colors as string[])[0])}
                shape={distinctProp ? ([distinctProp, pointOption.shapes as string[]] || [distinctProp, pointOption as ShapeFunction]) : (pointOption && (pointOption.shapes as string[])[0])}
                size={pointOption.size}
                style={pointOption.style}
              />
            ) : ''
          }
        </Chart>
      </div>
    );
    // }
  }
}
