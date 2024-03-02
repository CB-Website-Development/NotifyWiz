declare module 'notifywiz' {
    const Notifywiz: INotifywiz;
    export = Notifywiz;
}

type Positions = 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
type Animations = 'fade' | 'slide' | 'none';

interface INotifywiz {

    /**
     * 
     * Show a success notification.
     * @param {string} title - The title of the notification. Defaults to "Success" in the implementation.
     * @param {string} message - The message of the notification.
     * @param {Positions} position - The position of the notification. Defaults to "bottom-right" in the implementation, ('top' | 'bottom' | 'left' | 'right' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left').
     * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
     * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'. 
     * @param {boolean} loadingIndicator - The loading indicator of the notification. Defaults to false in the implementation.
     * @returns {void} 
    */
    success(params?: {
        title?: string,
        message?: string,
        position?: Positions,
        duration?: number,
        animation?: Animations,
        loadingIndicator?: boolean
    }): void;

    /**
     * 
     * Show a error notification.
     * @param {string} title - The title of the notification. Defaults to "Error" in the implementation.
     * @param {string} message - The message of the notification.
     * @param {Positions} position - The position of the notification. Defaults to "bottom-right" in the implementation, ('top' | 'bottom' | 'left' | 'right' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left').
     * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
     * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.  
     * @param {boolean} loadingIndicator - The loading indicator of the notification. Defaults to false in the implementation.
     * @returns {void} 
    */
    error(params?: {
        title?: string,
        message?: string,
        position?: Positions,
        duration?: number,
        animation?: Animations,
        loadingIndicator?: boolean
    }): void;

    /**
     * 
     * Show a warning notification.
     * @param {string} title - The title of the notification. Defaults to "Warning" in the implementation.
     * @param {string} message - The message of the notification.
     * @param {Positions} position - The position of the notification. Defaults to "bottom-right" in the implementation, ('top' | 'bottom' | 'left' | 'right'  | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left').
     * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
     * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.  
     * @param {boolean} loadingIndicator - The loading indicator of the notification. Defaults to false in the implementation. 
     * @returns {void} 
    */
    warning(params?: {
        title?: string,
        message?: string,
        position?: Positions,
        duration?: number,
        animation?: Animations,
        loadingIndicator?: boolean
    }): void;

    /**
     * 
     * Show a info notification.
     * @param {string} title - The title of the notification. Defaults to "Info" in the implementation.
     * @param {string} message - The message of the notification.
     * @param {Positions} position - The position of the notification. Defaults to "bottom-right" in the implementation, ('top' | 'bottom' | 'left' | 'right' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left').
     * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
     * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.   
     * @param {boolean} loadingIndicator - The loading indicator of the notification. Defaults to false in the implementation.
     * @returns {void} 
    */
    info(params?: {
        title?: string,
        message?: string,
        position?: Positions,
        duration?: number,
        animation?: Animations,
        loadingIndicator?: boolean
    }): void;

}