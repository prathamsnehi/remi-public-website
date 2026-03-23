// TypeScript declaration for Ionicons web component in JSX
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name: string;
        src?: string;
        icon?: string;
        ios?: string;
        md?: string;
        flipRtl?: boolean;
        lazy?: boolean;
        size?: string;
        color?: string;
        class?: string;
      };
    }
  }
}