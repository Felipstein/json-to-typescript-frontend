export type TranspilationType = 'typescript_interface' | 'javascript_class' | 'java_class' | 'java_interface' | 'java_abstract_class' | 'c#_class' | 'xml';

export const transpilationLabel: Record<TranspilationType, string> = {
  typescript_interface: 'Interface TypeScript',
  javascript_class: 'Classe JavaScript',
  java_class: 'Classe Java',
  java_interface: 'Interface Java',
  java_abstract_class: 'Classe Abstrata Java',
  'c#_class': 'Classe C#',
  xml: 'XML',
};
