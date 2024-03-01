import alerts from './alerts.js';
import './index.css';
import Icons from './icons.js';

/**
 * 
 * Show a success notification.
 * @param {string} title - The title of the notification. Defaults to "Success" in the implementation.
 * @param {string} message - The message of the notification.
 * @param {Positions} position - The position of the notification.
 * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'none'.  
 * @returns {void}
*/
export function success({ title = 'Success', message, position = 'bottom-right', duration = 3000, animation = 'none' }) {

    notificationHandler('success', title, message, position, duration, animation)

}

/**
 * 
 * Show a error notification.
 * @param {string} title - The title of the notification. Defaults to "Error" in the implementation.
 * @param {string} message - The message of the notification.
 * @param {Positions} position - The position of the notification.
 * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'none'.  
 * @returns {void}
*/
export function error({ title = 'Error', message, position = 'bottom-right', duration = 3000, animation = 'none' }) {

    notificationHandler('error', title, message, position, duration, animation)

}


/**
 * 
 * Show a warn notification.
 * @param {string} title - The title of the notification. Defaults to "Warning" in the implementation.
 * @param {string} message - The message of the notification.
 * @param {Positions} position - The position of the notification.
 * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'none'.  
 * @returns {void}
*/
export function warning({ title = 'Warning', message, position = 'bottom-right', duration = 3000, animation = 'none' }) {

    notificationHandler('warn', title, message, position, duration, animation)


}


/**
 * 
 * Show a info notification.
 * @param {string} title - The title of the notification. Defaults to "Info" in the implementation.
 * @param {string} message - The message of the notification.
 * @param {Positions} position - The position of the notification.
 * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'none'.  
 * @returns {void}
*/
export function info({ title = 'Info', message, position = 'bottom-right', duration = 3000, animation = 'none' }) {

    notificationHandler('info', title, message, position, duration, animation)

}

/**
 * 
 * Handle notification logic.
 * @param {String} type - The type of the notification, ('success', 'error', 'info', 'warning').
 * @param {string} title - The title of the notification. Defaults to "Info" in the implementation.
 * @param {string} message - The message of the notification.
 * @param {Positions} position - The position of the notification.
 * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'none'.  
 * @returns {void}
*/
function notificationHandler(type, title, message, position, duration, animation)
{

    //Throw a client error if the message is not provided
    if (!window) return alerts['client-error']();

    //Create Inner Container
    const containerElement = createContainer(position);
    containerElement.classList.add(type+'-container');

    //Create Inner Container
    const innerContainer = createInnerContainer();

    //Create Title and Message Container
    const titleMessageContainer = createTitleMessageContainer();

    //Create Title
    const innerTitleElement = createTitle(title);

    //Create Message
    const innerMessageElement = createMessage(message);

    //Create Icon
    const iconElement = createIcon(type);

    //Append to container
    appendToContainer(
        containerElement,
        innerTitleElement,
        innerMessageElement,
        innerContainer,
        titleMessageContainer,
        iconElement,
        animation
    );

    //Remove the notification after the duration
    createDuration(duration, containerElement, animation);
}

/**
 * 
 * Create the container and set the position of the notification.
 * @param {Positions} position - The position of the notification.
 * @returns {HTMLElement} The container of the notification.
*/
function createContainer(position) {
    const container = window.document.createElement('div');
    container.className = `${position} container`;

    return container;
}

/**
 * 
 * Create the inner container of the notification.
 * @returns {HTMLElement | null} The inner container of the notification.
*/
function createInnerContainer() {
    const innerContainer = window.document.createElement('div');
    innerContainer.className = 'inner-container';
    return innerContainer;
}

/**
 * 
 * Create the title and message container of the notification.
 * @returns {HTMLElement | null} The title and message container of the notificatio.
*/
function createTitleMessageContainer() {
    const titleMessageContainer = window.document.createElement('div');
    titleMessageContainer.className = 'title-description-container';
    return titleMessageContainer;
}

/**
 * 
 * Create the title of the notification. If no title is provided, it will return null.
 * @param {String} title - The title of the notification.
 * @returns {HTMLElement | null} The title of the notification.
*/
function createTitle(title) {
    if (!title) return null;
    const innerTitleElement = window.document.createElement('h1');
    innerTitleElement.textContent = title;
    return innerTitleElement;
}

/**
 * 
 * Create a description message of the notification. If no message is provided, it will return null.
 * @param {String} message - The message of the notification.
 * @returns {HTMLElement | null} The message of the notification.
*/
function createMessage(message) {
    if (!message) return null;
    const innerMessageElement = window.document.createElement('p');
    innerMessageElement.textContent = message;
    return innerMessageElement;
}

/**
 * 
 * Create the icon of the notification.
 * @param {String} type - The type of the notification, ('success', 'error', 'info', 'warning').
 * @returns {HTMLElement | null} The icon of the notification.
*/
function createIcon(type) {
    const iconElement = Icons[type];
    return iconElement;
}

/**
 * 
 * Append everything tougheter and return the notification.
 * @param {HTMLElement} containerElement - The container element of the notification.
 * @param {HTMLElement} innerTitleElement - The title element of the notification.
 * @param {HTMLElement} innerMessageElement - The description element of the notification.
 * @param {HTMLElement} innerContainer - The inner container of the notification.
 * @param {HTMLElement} titleMessageContainer - The title and message container of the notification.
 * @param {HTMLElement} iconElement - The icon element of the notification.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'none'.  
 * @returns {HTMLElement} The body of the notification.
*/
function appendToContainer(
    containerElement,
    innerTitleElement,
    innerMessageElement,
    innerContainer,
    titleMessageContainer,
    iconElement,
    animation
) {

    if (innerTitleElement) titleMessageContainer.appendChild(innerTitleElement);
    if (innerMessageElement) titleMessageContainer.appendChild(innerMessageElement);

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = iconElement;
    const iconNode = tempDiv.firstChild;

    innerContainer.appendChild(iconNode);
    innerContainer.appendChild(titleMessageContainer);
    containerElement.appendChild(innerContainer);

    animate('in', containerElement, animation);

    document.body.appendChild(containerElement);

}

/**
 * set the duration of the notification.
 * @param {number} duration - The duration of the notification.
 * @param {HTMLElement} containerElement - The container element of the notification.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'none'.  
 * @returns {void} The duration of the notification.
*/
function createDuration(duration, containerElement, animation) {

    setTimeout(() => {

        animate('out', containerElement, animation);

        setTimeout(() => {

            containerElement.remove();

        }, 500); // match this duration with the transition duration in your CSS

    }, duration);

}

/**
 * set the duration of the notification.
 * @param {string} direction - The direction of the effect.
 * @param {HTMLElement} containerElement - The container element of the notification.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'none'.  
 * @returns {void} The duration of the notification.
*/
function animate(direction, containerElement, animation)
{

    if(animation === 'none') return;

    if(direction === 'in') {
        containerElement.classList.remove('fadeOut', 'slideOut')
        if(animation === 'fade') containerElement.classList.add('fadeIn');
        if(animation === 'slide' && (containerElement.classList.contains('top-right') || containerElement.classList.contains('top-left') || containerElement.classList.contains('bottom-left') || containerElement.classList.contains('bottom-right'))) containerElement.classList.add('slideIn');
        if(animation === 'slide' && (containerElement.classList.contains('left') || containerElement.classList.contains('right'))) containerElement.classList.add('slideInCenter');
        if(animation === 'slide' && (containerElement.classList.contains('bottom') || containerElement.classList.contains('top'))) containerElement.classList.add('slideInCenterBottom');
    }
    
    if(direction === 'out') {
        containerElement.classList.remove('fadeIn', 'slideIn', 'slideInCenter', 'slideInCenterBottom')
        if(animation === 'slide' && (containerElement.classList.contains('left') || containerElement.classList.contains('right'))) {
            containerElement.classList.add('fadeOutCenter');
        } else {
            if(animation === 'fade') containerElement.classList.add('fadeOut');
            if(animation === 'slide') containerElement.classList.add('slideOut');
        }

    }

}

const Notifywiz = {
    success: success,
    error: error,
    warning: warning,
    info: info
}

export default Notifywiz;