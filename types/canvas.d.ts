declare type CanvasOptions = {
  color: string;
  tool: boolean;
};

declare type CanvasUseState = {
  settingOptions: CanvasOptions;
  setSettingOptions: React.Dispatch<React.SetStateAction<CanvasOptions>>;
};

declare type CanvasTool = {
  tool: boolean;
  color: string;
};

declare type CanvasToolUseState = {
  tool: CanvasTool;
  setTool: React.Dispatch<React.SetStateAction<CanvasTool>>;
};

declare type ToolSize = {
  brush: number;
  eraser: number;
};
