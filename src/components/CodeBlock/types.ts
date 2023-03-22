export interface CodeBlockProps {
  isEditable?: boolean;
  onChange?: (value: string, event?: unknown) => void;
  children: string;
}
