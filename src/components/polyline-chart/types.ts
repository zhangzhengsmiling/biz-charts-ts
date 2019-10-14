import { IAxisOption, ILegendOption, ITooltipOption } from '../bar-chart/types';

export type ShapeFunction = (field: string) => string;

export interface IPointOption {
  isShow?: boolean;
  size?: number;
  shapes?: string[] | ShapeFunction;
  style?: Object;
}
// type GeomShapeString = LegendMarker;
export interface ILineOption {
  isShow?: boolean;
  size?: number;
}

export interface IPolylineChartOption {
  width?: number;
  height?: number;
  axis: string[];
  padding?: [string, string] | [number, number, number, number] | 'auto';
  distinctProp?: string;
  colors?: string[];
  axisOptions?: IAxisOption[];
  legendOption?: ILegendOption;
  tooltipOption?: ITooltipOption;
  pointOption?: IPointOption;
  lineOption?: ILineOption;
}

export interface IPolylineChartProps {
  data: any[];
  option: IPolylineChartOption;
}