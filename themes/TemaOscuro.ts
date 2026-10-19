import { MD3DarkTheme } from 'react-native-paper';

export const temaOscuro = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#2DD4BF',              //
    onPrimary: '#042F2E',            //
    primaryContainer: '#134E4A',     //
    onPrimaryContainer: '#CCFBF1',   //[cite: 6]
    secondary: '#60A5FA',            //[cite: 6]
    onSecondary: '#0F172A',          //[cite: 6]
    secondaryContainer: '#1E3A8A',   //[cite: 6]
    onSecondaryContainer: '#DBEAFE', //[cite: 6]
    background: '#0F172A',           //[cite: 6]
    surface: '#1E293B',              //[cite: 6]
    surfaceVariant: '#334155',       //[cite: 6]
    onBackground: '#F8FAFC',         //[cite: 6]
    onSurface: '#F8FAFC',            //[cite: 6]
    onSurfaceVariant: '#CBD5E1',     //[cite: 6]
    outline: '#475569',              //[cite: 6]
    outlineVariant: '#334155',       //[cite: 6]
    error: '#F87171',                //[cite: 6] (Nota: en la tabla aparece como errors)
  },
};