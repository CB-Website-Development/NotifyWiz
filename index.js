import alerts from './alerts.js';
import './index.css';
import Icons from './icons.js';
const Positions = ['top', 'bottom', 'left', 'right', 'top-right', 'top-left', 'bottom-right', 'bottom-left'];

/**
 * 
 * Show a success notification.
 * @param {string} title - The title of the notification. Defaults to "Success" in the implementation.
 * @param {string} message - The message of the notification.
 * @param {Positions} position - The position of the notification.
 * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.  
 * @param {boolean} loadingIndicator - The loading indicator of the notification. Defaults to false in the implementation. 
 * @returns {void}
*/
export function success({ title = 'Success', message, position, duration, animation, loadingIndicator }) {

    notificationHandler('success', title, message, position, duration, animation, loadingIndicator)

}

/**
 * 
 * Show a error notification.
 * @param {string} title - The title of the notification. Defaults to "Error" in the implementation.
 * @param {string} message - The message of the notification.
 * @param {Positions} position - The position of the notification.
 * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.  
 * @param {boolean} loadingIndicator - The loading indicator of the notification. Defaults to false in the implementation.
 * @returns {void}
*/
export function error({ title = 'Error', message, position, duration, animation, loadingIndicator }) {

    notificationHandler('error', title, message, position, duration, animation, loadingIndicator)

}

/**
 * 
 * Show a warn notification.
 * @param {string} title - The title of the notification. Defaults to "Warning" in the implementation.
 * @param {string} message - The message of the notification.
 * @param {Positions} position - The position of the notification.
 * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.  
 * @param {boolean} loadingIndicator - The loading indicator of the notification. Defaults to false in the implementation.
 * @returns {void}
*/
export function warning({ title = 'Warning', message, position, duration, animation, loadingIndicator }) {

    notificationHandler('warn', title, message, position, duration, animation, loadingIndicator)

}

/**
 * 
 * Show a info notification.
 * @param {string} title - The title of the notification. Defaults to "Info" in the implementation.
 * @param {string} message - The message of the notification.
 * @param {Positions} position - The position of the notification.
 * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.  
 * @param {boolean} loadingIndicator - The loading indicator of the notification. Defaults to false in the implementation.
 * @returns {void}
*/
export function info({ title = 'Info', message, position, duration, animation, loadingIndicator }) {

    notificationHandler('info', title, message, position, duration, animation, loadingIndicator)

}

/**
 * 
 * Handle notification logic.
 * @param {String} type - The type of the notification, ('success', 'error', 'info', 'warning').
 * @param {string} title - The title of the notification. Defaults to "Info" in the implementation.
 * @param {string} message - The message of the notification.
 * @param {Positions} position - The position of the notification.
 * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.  
 * @param {boolean} loadingIndicator - The loading indicator of the notification. Defaults to false in the implementation. 
 * @returns {void}
*/
function notificationHandler(type, title, message, position = 'bottom-right', duration = 3000, animation = 'slide', loadingIndicator = false) {

    //Throw a client error if the message is not provided
    if (!window) return alerts['client-error']();

    createContainers();

    //Create Inner Container
    const notificationElement = createNotificationContainer(position);

    notificationElement.classList.add('notifywiz-' + type + '-container');

    //Create Inner Container
    const innerContainer = createNotificationInnerContainer();

    //Create Title and Message Container
    const titleMessageContainer = createNotificationTitleMessageContainer();

    //Create Title
    const innerTitleElement = createNotificationTitle(title);

    //Create Message
    const innerMessageElement = createNotificationMessage(message);

    //Create Icon
    const iconElement = createNotificationIcon(type);

    //Create Close Icon
    const closeElement = createCloseElement(notificationElement, position);

    //Create Loading Line
    const loadingElement = createLoadingElement(duration, type);

    //Append to container
    appendToContainer(
        notificationElement,
        innerTitleElement,
        innerMessageElement,
        innerContainer,
        titleMessageContainer,
        iconElement,
        closeElement,
        loadingElement,
        animation,
        position,
        loadingIndicator,
    );

    //Remove the notification after the duration
    createNotificationDuration(duration, notificationElement, animation);

}

/**
 * 
 * Create the containers for the notifications so they are stackable.
 * @returns {Void}
*/
function createContainers() {

    for (let position in Positions) {

        if (!window.document.getElementById(`notifywiz-container-${Positions[position]}`)) {

            const container = window.document.createElement('div');

            container.className = `notifywiz-${Positions[position]} notifywiz-container notifywiz-stackable-container`;
            container.id = `notifywiz-container-${Positions[position]}`;
            window.document.body.appendChild(container);

        }

    }

}

/**
 * 
 * Create the container and set the position of the notification.
 * @param {Positions} position - The position of the notification.
 * @returns {HTMLElement} The container of the notification.
*/
function createNotificationContainer(position) {

    const container = window.document.createElement('div');

    container.className = `notifywiz-container`;
    container.id = `notifywiz-${position}`;

    return container;

}

/**
 * 
 * Create the inner container of the notification.
 * @returns {HTMLElement | null} The inner container of the notification.
*/
function createNotificationInnerContainer() {

    const innerContainer = window.document.createElement('div');

    innerContainer.className = 'notifywiz-inner-container';

    return innerContainer;

}

/**
 * 
 * Create the title and message container of the notification.
 * @returns {HTMLElement | null} The title and message container of the notificatio.
*/
function createNotificationTitleMessageContainer() {

    const titleMessageContainer = window.document.createElement('div');

    titleMessageContainer.className = 'notifywiz-title-description-container';

    return titleMessageContainer;

}

/**
 * 
 * Create the title of the notification. If no title is provided, it will return null.
 * @param {String} title - The title of the notification.
 * @returns {HTMLElement | null} The title of the notification.
*/
function createNotificationTitle(title) {

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
function createNotificationMessage(message) {

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
function createNotificationIcon(type) {

    const iconElement = Icons[type];

    return iconElement;

}

/**
 * 
 * Create the closing element of the notification.
 * @param {HTMLElement} notificationElement - The container element of the notification.
 * @param {Positions} position - The position of the notification.
 * @returns {HTMLElement} The close icon of the notification.
*/
function createCloseElement(notificationElement, position) {

    const closeNode = document.createElement('div');

    closeNode.className = 'notifywiz-close-icon';
    closeNode.innerHTML = Icons.close;
    closeNode.onclick = () => {
        window.document.getElementById(`notifywiz-container-${position}`).removeChild(notificationElement);
    };

    return closeNode;

}

function createLoadingElement(duration, type) {

    const loadingElement = window.document.createElement('hr');

    loadingElement.className = `notifywiz-line-loading-animation notifywiz-${type}-border`;
    loadingElement.style.animation = `line-animation ${duration / 1000}s forwards`;

    const loadingContainerElement = window.document.createElement('div');
    loadingContainerElement.className = 'notifywiz-loading-container';
    loadingContainerElement.appendChild(loadingElement);

    return loadingContainerElement;

}

/**
 * 
 * Append everything tougheter and return the notification.
 * @param {HTMLElement} notificationElement - The container element of the notification.
 * @param {HTMLElement} innerTitleElement - The title element of the notification.
 * @param {HTMLElement} innerMessageElement - The description element of the notification.
 * @param {HTMLElement} innerContainer - The inner container of the notification.
 * @param {HTMLElement} titleMessageContainer - The title and message container of the notification.
 * @param {HTMLElement} iconElement - The icon element of the notification.
 * @param {HTMLElement} closeElement - The close icon element of the notification.
 * @param {HTMLElement} loadingElement - The loading line element of the notification.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.  
 * @param {Positions} position - The position of the notification.
 * @param {boolean} loadingIndicator - The loading indicator of the notification. Defaults to false in the implementation.
 * @returns {HTMLElement} The body of the notification.
*/
function appendToContainer(
    notificationElement,
    innerTitleElement,
    innerMessageElement,
    innerContainer,
    titleMessageContainer,
    iconElement,
    closeElement,
    loadingElement,
    animation,
    position,
    loadingIndicator
) {

    if (innerTitleElement) titleMessageContainer.appendChild(innerTitleElement);
    if (innerMessageElement) titleMessageContainer.appendChild(innerMessageElement);

    const tempDiv = document.createElement('div');

    tempDiv.innerHTML = iconElement;

    const iconNode = tempDiv.firstChild;

    innerContainer.appendChild(iconNode);
    innerContainer.appendChild(titleMessageContainer);
    notificationElement.appendChild(innerContainer);
    notificationElement.appendChild(closeElement);
    if (loadingIndicator) notificationElement.appendChild(loadingElement);

    animate('in', notificationElement, animation);

    window.document.getElementById(`notifywiz-container-${position}`).appendChild(notificationElement);

}

/**
 * set the duration of the notification.
 * @param {number} duration - The duration of the notification.
 * @param {HTMLElement} notificationElement - The container element of the notification.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.  
 * @returns {void} The duration of the notification.
*/
function createNotificationDuration(duration, notificationElement, animation) {

    setTimeout(() => {

        animate('out', notificationElement, animation);

        setTimeout(() => {

            notificationElement.remove();

        }, 500);

    }, duration);

}

/**
 * set the duration of the notification.
 * @param {string} direction - The direction of the effect.
 * @param {HTMLElement} notificationElement - The container element of the notification.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.  
 * @returns {void} The duration of the notification.
*/
function animate(direction, notificationElement, animation) {

    if (animation === 'none') return;

    if (direction === 'in') {

        notificationElement.classList.remove('notifywiz-fadeOut', 'notifywiz-slideOut')
        if (animation === 'fade') notificationElement.classList.add('notifywiz-fadeIn');
        if (animation === 'slide') notificationElement.classList.add('notifywiz-slideIn');

    }

    if (direction === 'out') {

        notificationElement.classList.remove('notifywiz-fadeIn', 'notifywiz-slideIn')
        if (animation === 'fade') notificationElement.classList.add('notifywiz-fadeOut');
        if (animation === 'slide') notificationElement.classList.add('notifywiz-slideOut');

    }

}

const Notifywiz = {
    success: success,
    error: error,
    warning: warning,
    info: info
}

export default Notifywiz;