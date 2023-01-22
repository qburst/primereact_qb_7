/**
 *
 * Ripple component adds ripple effect to the host element.
 *
 * [Live Demo](https://www.primefaces.org/primereact/ripple)
 *
 * @module ripple
 *
 */
import * as React from 'react';

/**
 * Defines valid properties in Ripple component.
 * @group Properties
 */
export interface RippleProps {
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * **PrimeReact - Ripple**
 *
 * _Ripple component adds ripple effect to the host element._
 *
 * [Live Demo](https://www.primefaces.org/primereact/ripple/)
 * --- ---
 * ![PrimeReact](https://www.primefaces.org/primereact/images/logo.png|height=100|width=100)
 *
 * @module ripple
 */
export declare class Ripple extends React.Component<RippleProps, any> {}
