import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
  Label,
} from "bizcharts";

import {
  IBarChartProps,
  IBarChartOption
} from './types';
import deepAssign from './tools/deepAssign';

const defaultBarChartOption: Partial<IBarChartOption> = {
  width: undefined,
  height: 400,
  padding: 'auto',
  colors: ['rgb(133, 203, 255)', 'rgb(252, 224, 114)', 'purple'],
  axisOptions: [
    {
      isShow: true,
    },
    {
      isShow: true,
    }
  ],
  labelOption: {},
  legendOption: {
    isShow: true,
    position: 'top',
  },
  tooltipOption: {
    crosshairs: {
      type: 'y',
    }
  },
}

const createBarChartTemp = (tempOption: Partial<IBarChartOption> = {}) => {
  return  (props: IBarChartProps) => {
    const { data, option } = props;
    let {
      width,
      height = 500,
      padding,
      axis,
      distinctProp,
      colors,
      axisOptions,
      legendOption,
      tooltipOption,
      labelOption,
    } = deepAssign(defaultBarChartOption, tempOption, option);

    const scale = {
      [axis[0]]: {
        alias: axisOptions && axisOptions[0] && axisOptions[0].title && axisOptions[0].title.alias,
        tickCount: axisOptions && axisOptions[0] && axisOptions[0].label && axisOptions[0].label.tickCount,
        tickInterval: axisOptions && axisOptions[0] && axisOptions[0].label && axisOptions[0].label.tickInterval,
      },
      [axis[1]]: {
        alias: axisOptions && axisOptions[1] && axisOptions[1].title && axisOptions[1].title.alias,
        tickInterval: axisOptions && axisOptions[1] && axisOptions[1].label && axisOptions[1].label.tickInterval,
        tickCount: axisOptions && axisOptions[1] && axisOptions[1].label && axisOptions[1].label.tickCount,
      }
    }
    return (
      <div>
        <Chart
          height={height}
          width={width}
          data={data}
          padding={padding}
          forceFit={width ? false : true}
          scale={scale}
        >
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
            type="interval"
            position={`${axis[0]}*${axis[1]}`}
            color={distinctProp === undefined ? colors && colors[0] : [distinctProp as string, colors as string[]]}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          >
            {
              labelOption && labelOption.isShow && (
                <Label
                  content={labelOption && labelOption.content}
                  autoRotate={labelOption && labelOption.autoRotate}
                  offset={labelOption && labelOption.offset}
                  labelLine={labelOption && labelOption.labelLine}
                  textStyle={labelOption && labelOption.textStyle}
                  formatter={labelOption && labelOption.formatter}
                  htmlTemplate={labelOption && labelOption.htmlTemplate}
                />
              )
            }
          </Geom>
        </Chart>
      </div>
    );
  }
}

export default createBarChartTemp;
