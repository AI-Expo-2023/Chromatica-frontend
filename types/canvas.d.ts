declare type CanvasOptions = {
  color: string;
  tool: boolean;
  paint?: boolean;
  backgroundColor: string;
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

declare type ToolSizeUseState = {
  toolWidth: ToolSize;
  setToolWidth: React.Dispatch<React.SetStateAction<ToolSize>>;
};

declare type CanvasSize = {
  width: number;
  height: number;
};

declare type AiSetting = {
  quality: number;
  count: number;
};

declare type AiSettingUseState = {
  aiSetting: AiSetting;
  setAiSetting: React.Dispatch<React.SetStateAction<AiSetting>>;
};
