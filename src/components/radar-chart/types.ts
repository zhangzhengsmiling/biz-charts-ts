import { ILineOption, IPointOption, ShapeFunction } from '../polyline-chart/types';
import {
  IAxisOption,
  ILabelOption,
  ITooltipOption,
  ILegendOption,
} from '../bar-chart/types';

export interface IRadarCharOption {
  width?: number;
  height?: number;
  axis: string[];
  padding?: [number, number, number, number] | [string, string] | 'auto';
  distinctProp?: string;
  colors?: string[] | ShapeFunction;
  axisOptions?: Partial<IAxisOption>[];
  labelOption?: Partial<ILabelOption>;
  tooltipOption?: ITooltipOption;
  legendOption?: ILegendOption;
  lineOption?: ILineOption;
  pointOption?: IPointOption;
}

export interface IRadarChartProps {
  data: any;
  options: IRadarCharOption;
}
