/*Axis配置 */

export type AxisTitlePosition = 'start' | 'center' | 'end';

export interface IAxisTitleOption {
  autoRotate: boolean, // 是否需要自动旋转，默认为 true
  offset: number, // 设置标题 title 距离坐标轴线的距离
  textStyle: Object // 坐标轴文本属性配置
  position: AxisTitlePosition, // 标题的位置，**新增**
  /**
   * 标题别名
   */
  alias: string,
}
export interface IAxisLineOption {
  fill: string,
  lineDash: [number, number, number],
  lineWidth: number, // 刻度线宽
  stroke: string, // 刻度线的颜色
}

/**
 * 刻度线配置
 */
export interface IAxisTickLineOption {
  lineWidth: number, // 刻度线宽
  stroke: string, // 刻度线的颜色
  length: number, // 刻度线长度
}

export interface IAxisLabelOption {
  tickCount: number, // 定义坐标轴刻度线的条数，默认为 5
  tickInterval: number, // 用于指定坐标轴各个标度点的间距，是原始数据之间的间距差值，tickCount 和 tickInterval 不可以同时声明。
  autoRotate: boolean,
  offset: number, // 数值，设置坐标轴文本 label 距离坐标轴线的距离
  rotate: number, //文本旋转角度
  textStyle: Object,
  formatter: (text: string, item: any, index: number) => string;
  htmlTemplate: (text: string, item: any, index: number) => string;
}
export interface IAxisGridLineStyle {
  stroke?: string;
  lineWidth?: number;
  lineDash?: [number, number];
}
export interface IAxisGridOption {
  align: 'center', // 网格顶点从两个刻度中间开始
  type: 'line' | 'polygon', // 网格的类型
  lineStyle: IAxisGridLineStyle; // 网格线的样式配置，原有属性为 line
  alternateColor: string | [string, string]; // 为网格设置交替的背景色，指定一个值则先渲染奇数层，两个值则交替渲染。**代替原有的 odd 和 even 属性**
}

export type AxisTitleOption = Partial<IAxisTitleOption>;
export type AxisLineOption = Partial<IAxisLineOption>;
export type AxisTickLineOption = Partial<IAxisTickLineOption>;
export type AxisPosition = 'top' | 'bottom' | 'right' | 'left';
export type AxisLabelOption = Partial<IAxisLabelOption>;
export type AxisGridOption = Partial<IAxisGridOption>;

export type MarkerFunction = (x?: number, y?: number, r?: number) => any
export type LegendMarker = 'circle' |
  'square' |
  'bowtie' |
  'diamond' |
  'hexagon' |
  'triangle' |
  'triangle-down' |
  'tick' |
  'plus' |
  'hyphen' |
  'line' |
  'hollowCircle' |
  'hollowSquare' |
  'hollowBowtie' |
  'hollowDiamond' |
  'hollowHexagon' |
  'hollowTriangle' |
  'hollowTriangle-down' |
  MarkerFunction;

export interface IAxisOption {
  isShow?: boolean;
  position?: AxisPosition,
  title?: AxisTitleOption | null;
  line?: AxisLineOption;
  tickLine?: AxisTickLineOption;
  label?: AxisLabelOption;
  grid?: AxisGridOption | null;
}

type LegendPosition = 'left-top' | 'left-center' | 'left-bottom'|
                      'right-top' | 'right-bottom' | 'right-center' | 
                      'top-left' | 'top-center' | 'top-right' |
                      'bottom-left' | 'bottom-center' | 'bottom-right' |
                      'bottom' | 'top' | 'left' | 'right';

/*Legend配置 */
export interface ILegendOption {
  isShow?: boolean;
  title?: boolean;
  position?: LegendPosition;
  itemGap?: number;
  background?: { fill: string; fillOpacity: number; }
  itemFormatter?: ((text: string) => string);
  marker?: LegendMarker;
}

export interface ITooltipCrossChairsOption {
  type: 'x' | 'y' | 'rect' | 'cross';
  style: {
    stroke?: string;
    strokeOpacity?: number;
    fill?: string;
    fillOpacity?: number;
    lineWidth?: number;
    lineDash?: [number, number];
  }
}

export interface ITooltipOption {
  showTitle?: boolean;
  crosshairs?: Partial<ITooltipCrossChairsOption>;
  useHtml?: boolean;
  triggerOn?: 'mousemove' | 'click' | 'none';
  shared?: boolean;
  htmlContent?: (text?: string, item?: any, index?: number) => string;
}

export interface ILabelLineOption {
  lineWidth: number; // 线的粗细
  stroke: string; // 线的颜色
  lineDash: [number, number]; // 虚线样式
}
export type LabelLineOption = Partial<ILabelLineOption>
export interface ILabelOption {
  isShow?: boolean,
  content?: string | [string, (x?: any, y?: any) => string];
  autoRotate?: boolean;
  offset?: number;
  labelLine?: LabelLineOption;
  textStyle?: Object;
  formatter?: (text?: string, item?: any, index?: number) => string;
  htmlTemplate?: (text?: string, item?: any, index?: number) => string;
}

export interface IBarChartOption {
  height?: number;
  width?: number;
  padding?: [string, string] | [number, number, number, number] | 'auto';
  axis: [string, string];
  distinctProp?: string;
  colors?: string[];
  axisOptions?: IAxisOption[];
  legendOption?: ILegendOption;
  tooltipOption?: ITooltipOption;
  labelOption?: ILabelOption;
}

export interface IBarChartProps {
  data: any[],
  option: IBarChartOption;
}
