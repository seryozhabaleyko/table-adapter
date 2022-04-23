import 'styled-components';
import { Transitions } from './transitions';

declare module 'styled-components' {
    export interface DefaultTheme {
        transitions: Transitions
    }
}
